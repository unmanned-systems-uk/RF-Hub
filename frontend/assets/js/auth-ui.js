/**
 * RF Learning Hub - Authentication UI
 * Handles login/registration modals and user state
 */

// Initialize auth state on page load
document.addEventListener('DOMContentLoaded', function() {
    initAuthUI();
    updateAuthUI();
});

/**
 * Initialize authentication UI
 */
function initAuthUI() {
    // Add auth modal HTML if not exists
    if (!document.getElementById('authModal')) {
        const modalHTML = `
            <div id="authModal" class="modal" style="display: none;">
                <div class="modal-content">
                    <span class="close-modal" onclick="closeAuthModal()">&times;</span>

                    <!-- Login Form -->
                    <div id="loginForm" class="auth-form">
                        <h2>Login to RF Learning Hub</h2>
                        <form onsubmit="handleLogin(event)">
                            <div class="form-group">
                                <label>Email or Username:</label>
                                <input type="text" id="loginEmailOrUsername" required placeholder="Enter email or username">
                            </div>
                            <div class="form-group">
                                <label>Password:</label>
                                <div class="password-input-wrapper">
                                    <input type="password" id="loginPassword" required>
                                    <span class="password-toggle" onclick="togglePasswordVisibility('loginPassword', this)">
                                        👁️
                                    </span>
                                </div>
                            </div>
                            <button type="submit" class="btn-primary">Login</button>
                            <p class="auth-toggle">
                                Don't have an account?
                                <a href="#" onclick="showRegisterForm(); return false;">Register here</a>
                            </p>
                        </form>
                        <div id="loginError" class="error-message"></div>
                    </div>

                    <!-- Registration Form -->
                    <div id="registerForm" class="auth-form" style="display: none;">
                        <h2>Register for RF Learning Hub</h2>
                        <form onsubmit="handleRegister(event)">
                            <div class="form-group">
                                <label>Email:</label>
                                <input type="email" id="regEmail" required>
                            </div>
                            <div class="form-group">
                                <label>Username:</label>
                                <input type="text" id="regUsername" required pattern="[A-Za-z0-9_-]{3,50}">
                                <small>3-50 characters, letters, numbers, - and _ only</small>
                            </div>
                            <div class="form-group">
                                <label>First Name:</label>
                                <input type="text" id="regFirstName" required>
                            </div>
                            <div class="form-group">
                                <label>Last Name:</label>
                                <input type="text" id="regLastName" required>
                            </div>
                            <div class="form-group">
                                <label>Password:</label>
                                <div class="password-input-wrapper">
                                    <input type="password" id="regPassword" required minlength="8">
                                    <span class="password-toggle" onclick="togglePasswordVisibility('regPassword', this)">
                                        👁️
                                    </span>
                                </div>
                                <small>Minimum 8 characters</small>
                            </div>
                            <div class="form-group">
                                <label>Confirm Password:</label>
                                <div class="password-input-wrapper">
                                    <input type="password" id="regConfirmPassword" required minlength="8">
                                    <span class="password-toggle" onclick="togglePasswordVisibility('regConfirmPassword', this)">
                                        👁️
                                    </span>
                                </div>
                            </div>
                            <button type="submit" class="btn-primary">Register</button>
                            <p class="auth-toggle">
                                Already have an account?
                                <a href="#" onclick="showLoginForm(); return false;">Login here</a>
                            </p>
                        </form>
                        <div id="registerError" class="error-message"></div>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
}

/**
 * Update UI based on authentication state
 */
function updateAuthUI() {
    const authButton = document.getElementById('authButton');
    const userInfo = document.getElementById('userInfo');

    if (api.isAuthenticated()) {
        const user = api.getCurrentUser();
        if (authButton) {
            authButton.textContent = `👤 ${user.username}`;
            authButton.onclick = showUserMenu;
        }
        if (userInfo) {
            userInfo.style.display = 'block';
            userInfo.innerHTML = `
                <span>Welcome, ${user.first_name || user.username}!</span>
                <button onclick="handleLogout()" class="btn-secondary">Logout</button>
            `;
        }

        // Load user dashboard data
        loadUserDashboard();
    } else {
        if (authButton) {
            authButton.textContent = '🔐 Login';
            authButton.onclick = showLoginForm;
        }
        if (userInfo) {
            userInfo.style.display = 'none';
        }
    }
}

/**
 * Show login form
 */
function showLoginForm() {
    document.getElementById('authModal').style.display = 'flex';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginError').textContent = '';
}

/**
 * Show registration form
 */
function showRegisterForm() {
    document.getElementById('authModal').style.display = 'flex';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
    document.getElementById('registerError').textContent = '';
}

/**
 * Close authentication modal
 */
function closeAuthModal() {
    document.getElementById('authModal').style.display = 'none';
    document.getElementById('loginError').textContent = '';
    document.getElementById('registerError').textContent = '';
}

/**
 * Toggle password visibility
 */
function togglePasswordVisibility(inputId, toggleIcon) {
    const input = document.getElementById(inputId);
    if (input.type === 'password') {
        input.type = 'text';
        toggleIcon.textContent = '🙈'; // Hide icon
    } else {
        input.type = 'password';
        toggleIcon.textContent = '👁️'; // Show icon
    }
}

/**
 * Handle login form submission
 */
async function handleLogin(event) {
    event.preventDefault();

    const emailOrUsername = document.getElementById('loginEmailOrUsername').value;
    const password = document.getElementById('loginPassword').value;
    const errorDiv = document.getElementById('loginError');

    try {
        errorDiv.textContent = 'Logging in...';
        errorDiv.style.color = '#00d4ff';

        await api.login(emailOrUsername, password);

        closeAuthModal();
        updateAuthUI();
        showNotification('Login successful! Welcome back!', 'success');

    } catch (error) {
        errorDiv.textContent = error.message || 'Login failed. Please check your credentials.';
        errorDiv.style.color = '#ff4444';
    }
}

/**
 * Handle registration form submission
 */
async function handleRegister(event) {
    event.preventDefault();

    const email = document.getElementById('regEmail').value;
    const username = document.getElementById('regUsername').value;
    const firstName = document.getElementById('regFirstName').value;
    const lastName = document.getElementById('regLastName').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;
    const errorDiv = document.getElementById('registerError');

    // Validate password match
    if (password !== confirmPassword) {
        errorDiv.textContent = 'Passwords do not match!';
        errorDiv.style.color = '#ff4444';
        return;
    }

    try {
        errorDiv.textContent = 'Registering...';
        errorDiv.style.color = '#00d4ff';

        await api.register({
            email,
            username,
            first_name: firstName,
            last_name: lastName,
            password
        });

        closeAuthModal();
        updateAuthUI();
        showNotification('Registration successful! Welcome to RF Learning Hub!', 'success');

    } catch (error) {
        errorDiv.textContent = error.message || 'Registration failed. Please try again.';
        errorDiv.style.color = '#ff4444';
    }
}

/**
 * Handle logout
 */
function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        api.logout();
        showNotification('Logged out successfully', 'info');
    }
}

/**
 * Show user menu
 */
function showUserMenu() {
    const user = api.getCurrentUser();
    const menu = `
        <div class="user-menu">
            <h3>👤 ${user.username}</h3>
            <p>${user.email}</p>
            <hr>
            <button onclick="showProfile()">View Profile</button>
            <button onclick="handleLogout()">Logout</button>
        </div>
    `;
    // Implement dropdown menu or modal
    showNotification('User menu - Profile and settings coming soon!', 'info');
}

/**
 * Load user dashboard data from API
 */
async function loadUserDashboard() {
    try {
        // Get user statistics
        const statsData = await api.getUserStats();
        if (statsData && statsData.stats) {
            const stats = statsData.stats;
            document.getElementById('modulesComplete').textContent = stats.modules_completed || 0;
            document.getElementById('hoursLogged').textContent =
                Math.round((stats.total_time_spent || 0) / 60) || 0;
        }

        // Get progress
        const progressData = await api.getProgressStats();
        if (progressData && progressData.stats) {
            const totalModules = 26;
            const completedCount = progressData.stats.completed || 0;
            const progress = Math.round((completedCount / totalModules) * 100);

            const progressBar = document.getElementById('overallProgress');
            if (progressBar) {
                progressBar.style.width = progress + '%';
                progressBar.textContent = progress + '%';
            }
        }

        // Get badges
        const badgesData = await api.getMyBadges();
        if (badgesData && badgesData.badges) {
            // Update badge count or display
            console.log('User badges:', badgesData.badges);
        }

    } catch (error) {
        console.error('Error loading user dashboard:', error);
        // Fallback to localStorage if API fails
        if (error.message.includes('401') || error.message.includes('403')) {
            // Token expired, logout
            api.logout();
        }
    }
}

/**
 * Show notification toast
 */
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#2ecc71' : type === 'error' ? '#ff4444' : '#00d4ff'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(style);
