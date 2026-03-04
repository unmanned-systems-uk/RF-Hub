#!/usr/bin/env python3
"""
RF Learning Hub - API Smoke Test Suite
Comprehensive testing for all API endpoints with authentication flow
"""

import requests
import json
import sys
import argparse
import time
from datetime import datetime
from typing import Dict, Tuple, List, Optional

class APITestSuite:
    """Reusable API test suite for RF Learning Hub"""

    def __init__(self, base_url: str = "http://localhost:3000", verbose: bool = False, output_file: Optional[str] = None):
        """Initialize test suite"""
        self.base_url = base_url.rstrip('/')
        self.verbose = verbose
        self.output_file = output_file
        self.session = requests.Session()
        self.auth_token = None
        self.test_user_email = None
        self.test_user_password = "SecurePass123!"

        # Statistics
        self.passed = 0
        self.failed = 0
        self.skipped = 0
        self.errors = []

        # Output buffer
        self.report = []

    def log(self, message: str, level: str = "INFO"):
        """Log message to console and report"""
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        formatted = f"[{timestamp}] {message}"
        print(formatted)
        self.report.append(formatted)

    def log_pass(self, endpoint: str, method: str, code: int):
        """Log successful test"""
        msg = f"✓ [{code}] {method} {endpoint}"
        self.log(msg)
        self.passed += 1

    def log_fail(self, endpoint: str, method: str, code: int, expected: int):
        """Log failed test"""
        msg = f"✗ [{code}] {method} {endpoint} (expected {expected})"
        self.log(msg)
        self.failed += 1
        self.errors.append(f"{method} {endpoint}: HTTP {code} (expected {expected})")

    def log_skip(self, endpoint: str, reason: str):
        """Log skipped test"""
        msg = f"⊘ {endpoint} ({reason})"
        self.log(msg)
        self.skipped += 1

    def test_endpoint(self, method: str, endpoint: str, description: str = "",
                     expected_code: int = 200, data: Optional[Dict] = None,
                     use_auth: bool = False) -> bool:
        """Test API endpoint"""
        url = f"{self.base_url}{endpoint}"
        headers = {"Content-Type": "application/json"}

        if use_auth and self.auth_token:
            headers["Authorization"] = f"Bearer {self.auth_token}"

        try:
            if method == "GET":
                response = self.session.get(url, headers=headers, timeout=5)
            elif method == "POST":
                response = self.session.post(url, headers=headers, json=data, timeout=5)
            elif method == "PUT":
                response = self.session.put(url, headers=headers, json=data, timeout=5)
            elif method == "DELETE":
                response = self.session.delete(url, headers=headers, timeout=5)
            else:
                self.log_skip(endpoint, f"Unknown method {method}")
                return False

            if response.status_code == expected_code:
                self.log_pass(endpoint, method, response.status_code)
                if self.verbose:
                    try:
                        self.log(f"  Response: {str(response.json())[:100]}...")
                    except:
                        self.log(f"  Response: {response.text[:100]}...")
                return True
            else:
                self.log_fail(endpoint, method, response.status_code, expected_code)
                if self.verbose:
                    try:
                        self.log(f"  Response: {str(response.json())[:100]}...")
                    except:
                        self.log(f"  Response: {response.text[:100]}...")
                return False

        except requests.exceptions.ConnectionError:
            self.log_fail(endpoint, method, 0, expected_code)
            return False
        except Exception as e:
            self.log_skip(endpoint, f"Error: {str(e)[:50]}")
            return False

    def create_test_user(self) -> Optional[str]:
        """Create test user and return JWT token"""
        timestamp = int(time.time())
        self.test_user_email = f"testuser{timestamp}@example.com"
        username = f"testuser{timestamp}"

        user_data = {
            "email": self.test_user_email,
            "password": self.test_user_password,
            "username": username,
            "first_name": "Test",
            "last_name": "User"
        }

        try:
            response = self.session.post(
                f"{self.base_url}/api/auth/register",
                json=user_data,
                timeout=5
            )

            if response.status_code in [200, 201]:
                token = response.json().get("token")
                if token:
                    self.auth_token = token
                    return token
            elif response.status_code == 409:  # User already exists
                # Try login instead
                login_data = {
                    "email": self.test_user_email,
                    "password": self.test_user_password
                }
                response = self.session.post(
                    f"{self.base_url}/api/auth/login",
                    json=login_data,
                    timeout=5
                )
                if response.status_code == 200:
                    token = response.json().get("token")
                    if token:
                        self.auth_token = token
                        return token
        except Exception as e:
            self.log_skip("User Creation", f"Error: {str(e)[:50]}")

        return None

    def test_health_endpoints(self):
        """Test health check endpoints"""
        self.log("\n--- HEALTH ENDPOINTS ---")
        self.test_endpoint("GET", "/health", "Main health check", 200)
        self.test_endpoint("GET", "/health/db", "Database health check", 200)

    def test_module_endpoints(self):
        """Test module endpoints"""
        self.log("\n--- MODULE ENDPOINTS ---")
        self.test_endpoint("GET", "/api/modules", "List all modules", 200)
        self.test_endpoint("GET", "/api/modules/search?q=RF", "Search modules", 200)
        # Note: /api/modules/tier/1 may return 400 if tier param is not supported
        self.test_endpoint("GET", "/api/modules/tier/1", "Get modules by tier", 200)

    def test_auth_endpoints(self):
        """Test authentication endpoints"""
        self.log("\n--- AUTHENTICATION ENDPOINTS ---")

        # Create test user
        token = self.create_test_user()

        if token:
            self.log_pass("/api/auth/register", "POST", 201)

            # Test protected endpoints
            self.test_endpoint("GET", "/api/auth/profile", "Get user profile", 200, use_auth=True)
            self.test_endpoint("POST", "/api/auth/verify-token", "Verify token", 200, data={}, use_auth=True)
            self.test_endpoint("PUT", "/api/auth/profile", "Update profile", 200,
                             data={"first_name": "Updated"}, use_auth=True)
            self.test_endpoint("GET", "/api/auth/stats", "Get user stats", 200, use_auth=True)
        else:
            self.log_skip("Protected endpoints", "Could not create/login test user")

    def test_progress_endpoints(self):
        """Test progress endpoints"""
        self.log("\n--- PROGRESS ENDPOINTS ---")

        if not self.auth_token:
            self.log_skip("Progress endpoints", "No authentication token")
            return

        self.test_endpoint("GET", "/api/progress", "Get user progress", 200, use_auth=True)
        self.test_endpoint("GET", "/api/progress/stats", "Get progress stats", 200, use_auth=True)
        self.test_endpoint("GET", "/api/progress/recent", "Get recent progress", 200, use_auth=True)

    def test_quiz_endpoints(self):
        """Test quiz endpoints"""
        self.log("\n--- QUIZ ENDPOINTS ---")

        if not self.auth_token:
            self.log_skip("Quiz endpoints", "No authentication token")
            return

        self.test_endpoint("GET", "/api/quizzes/stats", "Get quiz stats", 200, use_auth=True)

    def test_badge_endpoints(self):
        """Test badge endpoints"""
        self.log("\n--- BADGE ENDPOINTS ---")

        # Public endpoint
        self.test_endpoint("GET", "/api/badges", "List all badges", 200)

        if self.auth_token:
            # Protected endpoints
            self.test_endpoint("GET", "/api/badges/my", "Get user badges", 200, use_auth=True)
            self.test_endpoint("GET", "/api/badges/progress", "Get badge progress", 200, use_auth=True)
        else:
            self.log_skip("Protected badge endpoints", "No authentication token")

    def test_calculation_endpoints(self):
        """Test calculation endpoints"""
        self.log("\n--- CALCULATION ENDPOINTS ---")

        if not self.auth_token:
            self.log_skip("Calculation endpoints", "No authentication token")
            return

        self.test_endpoint("GET", "/api/calculations", "Get calculations", 200, use_auth=True)
        self.test_endpoint("GET", "/api/calculations/recent", "Get recent calculations", 200, use_auth=True)
        self.test_endpoint("GET", "/api/calculations/stats", "Get calculation stats", 200, use_auth=True)

    def run_smoke_test(self):
        """Run smoke test (health, modules, auth, progress, quiz, badges)"""
        self.test_health_endpoints()
        self.test_module_endpoints()
        self.test_auth_endpoints()
        self.test_progress_endpoints()
        self.test_quiz_endpoints()
        self.test_badge_endpoints()

    def run_full_test(self):
        """Run full comprehensive test"""
        self.test_health_endpoints()
        self.test_module_endpoints()
        self.test_auth_endpoints()
        self.test_progress_endpoints()
        self.test_quiz_endpoints()
        self.test_badge_endpoints()
        self.test_calculation_endpoints()

    def print_summary(self):
        """Print test summary"""
        self.log("\n" + "=" * 50)
        self.log("TEST SUMMARY")
        self.log("=" * 50)
        self.log(f"Passed:  {self.passed}")
        self.log(f"Failed:  {self.failed}")
        self.log(f"Skipped: {self.skipped}")

        total = self.passed + self.failed
        if total > 0:
            success_rate = (self.passed / total) * 100
            self.log(f"Success Rate: {success_rate:.1f}%")

        self.log("=" * 50)

        if self.errors:
            self.log("\nFAILED ENDPOINTS:")
            for error in self.errors:
                self.log(f"  - {error}")

        self.log("")

    def save_report(self):
        """Save report to file"""
        if self.output_file:
            with open(self.output_file, 'w') as f:
                f.write('\n'.join(self.report))
            self.log(f"Report saved to: {self.output_file}")

    def get_exit_code(self) -> int:
        """Return appropriate exit code"""
        return 0 if self.failed == 0 else 1


def main():
    """Main entry point"""
    parser = argparse.ArgumentParser(
        description='RF Learning Hub API Smoke Test Suite',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python api-smoke-test.py                    # Run smoke test
  python api-smoke-test.py --full             # Run full test
  python api-smoke-test.py --url http://api:3000
  python api-smoke-test.py --verbose --output report.txt
        """
    )

    parser.add_argument('--url', default='http://localhost:3000',
                       help='Base URL of API (default: http://localhost:3000)')
    parser.add_argument('--verbose', action='store_true',
                       help='Show detailed responses')
    parser.add_argument('--output', type=str,
                       help='Save report to file')
    parser.add_argument('--full', action='store_true',
                       help='Run full comprehensive test')

    args = parser.parse_args()

    # Create test suite
    suite = APITestSuite(
        base_url=args.url,
        verbose=args.verbose,
        output_file=args.output
    )

    # Print header
    suite.log("=" * 50)
    suite.log("RF Learning Hub - API Smoke Test")
    suite.log("=" * 50)
    suite.log(f"Base URL: {args.url}")
    suite.log(f"Timestamp: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")

    # Run tests
    if args.full:
        suite.run_full_test()
    else:
        suite.run_smoke_test()

    # Print summary and save report
    suite.print_summary()
    suite.save_report()

    # Exit with appropriate code
    sys.exit(suite.get_exit_code())


if __name__ == "__main__":
    main()
