/**
 * RF Learning Hub - API Service Layer
 * Handles all backend API communication
 */

const API_BASE_URL = 'http://10.0.1.98:3000/api';

class APIService {
    constructor() {
        this.token = localStorage.getItem('authToken');
    }

    /**
     * Get authorization headers
     */
    getHeaders(includeAuth = true) {
        const headers = {
            'Content-Type': 'application/json'
        };

        if (includeAuth && this.token) {
            headers['Authorization'] = `Bearer ${this.token}`;
        }

        return headers;
    }

    /**
     * Make API request
     */
    async request(endpoint, options = {}) {
        const url = `${API_BASE_URL}${endpoint}`;
        const config = {
            ...options,
            headers: this.getHeaders(options.auth !== false)
        };

        try {
            const response = await fetch(url, config);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || `HTTP ${response.status}: ${response.statusText}`);
            }

            return data;
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }

    // ==================== AUTH ENDPOINTS ====================

    /**
     * Register new user
     */
    async register(userData) {
        const data = await this.request('/auth/register', {
            method: 'POST',
            body: JSON.stringify(userData),
            auth: false
        });

        // Store token
        if (data.token) {
            this.token = data.token;
            localStorage.setItem('authToken', data.token);
            localStorage.setItem('currentUser', JSON.stringify(data.user));
        }

        return data;
    }

    /**
     * Login user
     */
    async login(email, password) {
        const data = await this.request('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            auth: false
        });

        // Store token
        if (data.token) {
            this.token = data.token;
            localStorage.setItem('authToken', data.token);
            localStorage.setItem('currentUser', JSON.stringify(data.user));
        }

        return data;
    }

    /**
     * Logout user
     */
    logout() {
        this.token = null;
        localStorage.removeItem('authToken');
        localStorage.removeItem('currentUser');
        window.location.href = '/index.html';
    }

    /**
     * Get current user profile
     */
    async getProfile() {
        return await this.request('/auth/profile');
    }

    /**
     * Update user profile
     */
    async updateProfile(updates) {
        return await this.request('/auth/profile', {
            method: 'PUT',
            body: JSON.stringify(updates)
        });
    }

    /**
     * Get user statistics
     */
    async getUserStats() {
        return await this.request('/auth/stats');
    }

    // ==================== MODULE ENDPOINTS ====================

    /**
     * Get all modules
     */
    async getModules(filters = {}) {
        const params = new URLSearchParams(filters);
        return await this.request(`/modules?${params}`, { auth: false });
    }

    /**
     * Search modules
     */
    async searchModules(query) {
        return await this.request(`/modules/search?q=${encodeURIComponent(query)}`, { auth: false });
    }

    /**
     * Get single module
     */
    async getModule(moduleId) {
        return await this.request(`/modules/${moduleId}`, { auth: false });
    }

    // ==================== PROGRESS ENDPOINTS ====================

    /**
     * Get all user progress
     */
    async getProgress() {
        return await this.request('/progress');
    }

    /**
     * Get progress statistics
     */
    async getProgressStats() {
        return await this.request('/progress/stats');
    }

    /**
     * Update module progress
     */
    async updateProgress(moduleId, progressPercentage) {
        return await this.request(`/progress/${moduleId}`, {
            method: 'POST',
            body: JSON.stringify({ progress_percentage: progressPercentage })
        });
    }

    /**
     * Mark module as complete
     */
    async completeModule(moduleId) {
        return await this.request(`/progress/${moduleId}/complete`, {
            method: 'POST'
        });
    }

    // ==================== QUIZ ENDPOINTS ====================

    /**
     * Get quiz questions for module
     */
    async getQuizQuestions(moduleId) {
        return await this.request(`/quizzes/module/${moduleId}`);
    }

    /**
     * Submit quiz answers
     */
    async submitQuiz(moduleId, answers, timeTaken) {
        return await this.request(`/quizzes/module/${moduleId}/submit`, {
            method: 'POST',
            body: JSON.stringify({ answers, time_taken_seconds: timeTaken })
        });
    }

    /**
     * Get quiz attempts
     */
    async getQuizAttempts(moduleId) {
        return await this.request(`/quizzes/module/${moduleId}/attempts`);
    }

    // ==================== BADGE ENDPOINTS ====================

    /**
     * Get all badges
     */
    async getBadges() {
        return await this.request('/badges', { auth: false });
    }

    /**
     * Get user's badges
     */
    async getMyBadges() {
        return await this.request('/badges/my');
    }

    /**
     * Get badge progress
     */
    async getBadgeProgress() {
        return await this.request('/badges/progress');
    }

    /**
     * Check and award eligible badges
     */
    async checkBadges() {
        return await this.request('/badges/check', {
            method: 'POST'
        });
    }

    // ==================== CALCULATION ENDPOINTS ====================

    /**
     * Save calculation
     */
    async saveCalculation(calculatorType, inputs, result, notes = '') {
        return await this.request('/calculations', {
            method: 'POST',
            body: JSON.stringify({
                calculator_type: calculatorType,
                inputs,
                result,
                notes
            })
        });
    }

    /**
     * Get user's calculations
     */
    async getCalculations(calculatorType = null) {
        const params = calculatorType ? `?calculator_type=${calculatorType}` : '';
        return await this.request(`/calculations${params}`);
    }

    /**
     * Delete calculation
     */
    async deleteCalculation(calculationId) {
        return await this.request(`/calculations/${calculationId}`, {
            method: 'DELETE'
        });
    }

    // ==================== HELPER METHODS ====================

    /**
     * Check if user is authenticated
     */
    isAuthenticated() {
        return !!this.token;
    }

    /**
     * Get current user from localStorage
     */
    getCurrentUser() {
        const userStr = localStorage.getItem('currentUser');
        return userStr ? JSON.parse(userStr) : null;
    }
}

// Create global API instance
const api = new APIService();

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = APIService;
}
