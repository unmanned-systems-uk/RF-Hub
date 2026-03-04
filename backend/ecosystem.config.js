module.exports = {
  apps: [{
    name: 'rf-hub-api',
    script: 'server.js',
    cwd: '/home/rfhub/rf-hub/backend',
    env: {
      NODE_ENV: 'development',
      PORT: '3000',
      HOST: '0.0.0.0',
      DB_HOST: '127.0.0.1',
      DB_PORT: '5432',
      DB_NAME: 'rf_learning_hub',
      DB_USER: 'rfhub',
      DB_PASSWORD: 'rfhub_secure_2024',
      JWT_SECRET: 'rf-learning-hub-production-secret-key-2025',
      JWT_EXPIRES_IN: '7d',
      FRONTEND_URL: 'http://10.0.1.98'
    }
  }]
};
