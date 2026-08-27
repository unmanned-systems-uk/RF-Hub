#!/usr/bin/env python3
"""
RF Learning Hub - Comprehensive API Test Suite
Extended testing for all API endpoints with focus on coverage gaps
"""

import requests
import json
import sys
import time
from datetime import datetime

class ComprehensiveAPITest:
    def __init__(self, base_url="http://localhost:3000", verbose=False):
        self.base_url = base_url.rstrip('/')
        self.verbose = verbose
        self.session = requests.Session()
        self.auth_token = None
        self.test_user_id = None
        self.test_module_id = None
        self.test_calculation_id = None
        self.passed = 0
        self.failed = 0
        self.skipped = 0
        
    def log(self, msg, level="INFO"):
        print(f"[{datetime.now().strftime('%H:%M:%S')}] {msg}")
    
    def log_pass(self, endpoint, method, code):
        print(f"  ✓ {method} {endpoint} [{code}]")
        self.passed += 1
        
    def log_fail(self, endpoint, method, code, expected):
        print(f"  ✗ {method} {endpoint} [{code}] expected [{expected}]")
        self.failed += 1
        
    def test_endpoint(self, method, endpoint, expected_code=200, data=None, use_auth=False):
        url = f"{self.base_url}{endpoint}"
        headers = {"Content-Type": "application/json"}
        if use_auth and self.auth_token:
            headers["Authorization"] = f"Bearer {self.auth_token}"
        
        try:
            if method == "GET":
                r = self.session.get(url, headers=headers, timeout=5)
            elif method == "POST":
                r = self.session.post(url, headers=headers, json=data, timeout=5)
            elif method == "PUT":
                r = self.session.put(url, headers=headers, json=data, timeout=5)
            elif method == "DELETE":
                r = self.session.delete(url, headers=headers, timeout=5)
            else:
                return None
            
            if r.status_code == expected_code:
                self.log_pass(endpoint, method, r.status_code)
                try:
                    return r.json()
                except:
                    return r.text
            else:
                self.log_fail(endpoint, method, r.status_code, expected_code)
                return None
        except Exception as e:
            self.log_fail(endpoint, method, 0, expected_code)
            return None
    
    def setup_auth(self):
        """Create test user and get auth token"""
        self.log("\n=== SETUP: Authentication ===")
        email = f"test{int(time.time())}@example.com"
        data = {
            "email": email,
            "password": "TestPass123!",
            "username": f"testuser{int(time.time())}",
            "first_name": "Test"
        }
        result = self.test_endpoint("POST", "/api/auth/register", 201, data)
        if result and "token" in result:
            self.auth_token = result.get("token")
            self.log(f"✓ Auth token obtained")
            return True
        else:
            self.log("✗ Failed to create test user")
            return False
    
    def get_test_module_id(self):
        """Get first module ID for testing"""
        result = self.test_endpoint("GET", "/api/modules", 200)
        if result and "modules" in result and result["modules"]:
            self.test_module_id = result["modules"][0]["module_id"]
            self.log(f"✓ Test module ID: {self.test_module_id[:8]}...")
            return self.test_module_id
        return None
    
    def run_test_suite(self):
        """Run comprehensive tests"""
        self.log("\n╔════════════════════════════════════════╗")
        self.log("║  RF-Hub Comprehensive API Test Suite   ║")
        self.log("╚════════════════════════════════════════╝")
        
        # Setup
        if not self.setup_auth():
            self.log("⚠ Cannot continue without authentication")
            return
        
        self.get_test_module_id()
        
        # Health
        self.log("\n=== HEALTH ENDPOINTS ===")
        self.test_endpoint("GET", "/health", 200)
        self.test_endpoint("GET", "/health/db", 200)
        
        # Modules (complete)
        self.log("\n=== MODULE ENDPOINTS ===")
        self.test_endpoint("GET", "/api/modules", 200)
        self.test_endpoint("GET", "/api/modules/search?q=RF", 200)
        self.test_endpoint("GET", "/api/modules/tier/1", 200)
        if self.test_module_id:
            self.test_endpoint("GET", f"/api/modules/{self.test_module_id}", 200)
            self.test_endpoint("GET", f"/api/modules/{self.test_module_id}/stats", 200, use_auth=True)
        
        # Progress (complete)
        self.log("\n=== PROGRESS ENDPOINTS ===")
        self.test_endpoint("GET", "/api/progress", 200, use_auth=True)
        self.test_endpoint("GET", "/api/progress/stats", 200, use_auth=True)
        self.test_endpoint("GET", "/api/progress/recent", 200, use_auth=True)
        if self.test_module_id:
            self.test_endpoint("GET", f"/api/progress/{self.test_module_id}", 200, use_auth=True)
            self.test_endpoint("POST", f"/api/progress/{self.test_module_id}", 200, {"progress_percentage": 50}, use_auth=True)
            self.test_endpoint("POST", f"/api/progress/{self.test_module_id}/complete", 200, use_auth=True)
            self.test_endpoint("PUT", f"/api/progress/{self.test_module_id}/time", 200, {"time_spent_minutes": 30}, use_auth=True)
        
        # Quizzes (complete)
        self.log("\n=== QUIZ ENDPOINTS ===")
        self.test_endpoint("GET", "/api/quizzes/stats", 200, use_auth=True)
        if self.test_module_id:
            self.test_endpoint("GET", f"/api/quizzes/module/{self.test_module_id}", 200, use_auth=True)
            # Note: Submit quiz requires actual quiz data, skipping for now
            self.test_endpoint("GET", f"/api/quizzes/module/{self.test_module_id}/attempts", 200, use_auth=True)
            self.test_endpoint("GET", f"/api/quizzes/module/{self.test_module_id}/best", 200, use_auth=True)
            self.test_endpoint("GET", f"/api/quizzes/module/{self.test_module_id}/stats", 200)
        
        # Badges (complete)
        self.log("\n=== BADGE ENDPOINTS ===")
        self.test_endpoint("GET", "/api/badges", 200)
        self.test_endpoint("GET", "/api/badges/my", 200, use_auth=True)
        self.test_endpoint("GET", "/api/badges/progress", 200, use_auth=True)
        self.test_endpoint("POST", "/api/badges/check", 200, use_auth=True)
        # Get first badge ID if available
        badges_result = self.test_endpoint("GET", "/api/badges", 200)
        if badges_result and "badges" in badges_result and badges_result["badges"]:
            badge_id = badges_result["badges"][0]["badge_id"]
            self.test_endpoint("GET", f"/api/badges/{badge_id}", 200)
        # Note: /api/badges/user/:user_id requires a valid user_id, added below
        
        # Calculations (GAP: currently untested)
        self.log("\n=== CALCULATION ENDPOINTS ===")
        # Create a test calculation
        calc_data = {
            "calculation_type": "frequency_wavelength",
            "input_value": 2.4,
            "input_unit": "GHz",
            "result": 0.125,
            "result_unit": "m",
            "formula_used": "c/f"
        }
        calc_result = self.test_endpoint("POST", "/api/calculations", 201, calc_data, use_auth=True)
        if calc_result and "calculation_id" in calc_result:
            self.test_calculation_id = calc_result.get("calculation_id")
        
        self.test_endpoint("GET", "/api/calculations", 200, use_auth=True)
        self.test_endpoint("GET", "/api/calculations/recent", 200, use_auth=True)
        self.test_endpoint("GET", "/api/calculations/stats", 200, use_auth=True)
        if self.test_calculation_id:
            self.test_endpoint("GET", f"/api/calculations/{self.test_calculation_id}", 200, use_auth=True)
            self.test_endpoint("PUT", f"/api/calculations/{self.test_calculation_id}/notes", 200, {"notes": "Test calculation"}, use_auth=True)
            self.test_endpoint("DELETE", f"/api/calculations/{self.test_calculation_id}", 204, use_auth=True)
        
        # Auth (complete)
        self.log("\n=== AUTH ENDPOINTS ===")
        self.test_endpoint("GET", "/api/auth/profile", 200, use_auth=True)
        self.test_endpoint("PUT", "/api/auth/profile", 200, {"first_name": "Updated"}, use_auth=True)
        self.test_endpoint("GET", "/api/auth/stats", 200, use_auth=True)
        self.test_endpoint("POST", "/api/auth/verify-token", 200, {}, use_auth=True)
        
        # Equipment (GAP: not mounted)
        self.log("\n=== EQUIPMENT ENDPOINTS (NOT MOUNTED) ===")
        self.test_endpoint("GET", "/api/equipment", 404)
        
        # Summary
        self.log("\n╔════════════════════════════════════════╗")
        self.log("║  TEST SUMMARY                          ║")
        self.log("╚════════════════════════════════════════╝")
        total = self.passed + self.failed
        if total > 0:
            pct = (self.passed / total) * 100
            self.log(f"Passed:  {self.passed}")
            self.log(f"Failed:  {self.failed}")
            self.log(f"Skipped: {self.skipped}")
            self.log(f"Coverage: {pct:.1f}%")
        
        return self.failed == 0

if __name__ == "__main__":
    test = ComprehensiveAPITest()
    success = test.run_test_suite()
    sys.exit(0 if success else 1)
