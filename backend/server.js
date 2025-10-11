const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const pool = require('./config/database');
const errorHandler = require('./middleware/errorHandler');

// Import routes
const authRoutes = require('./routes/auth');
const moduleRoutes = require('./routes/modules');
const progressRoutes = require('./routes/progress');
const quizRoutes = require('./routes/quizzes');
const badgeRoutes = require('./routes/badges');
const calculationRoutes = require('./routes/calculations');

const app = express();

// Security middleware
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false
}));

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: 'Too many requests, please try again later' }
});
app.use('/api/', limiter);

// Request logging (development)
if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
  });
}

// Root endpoint - API info
app.get('/', (req, res) => {
  res.json({
    name: 'RF Learning Hub API',
    version: '1.0.0',
    status: 'running',
    description: 'Backend API for RF Learning Hub - Complete learning management system with authentication',
    endpoints: {
      health: '/health',
      healthDb: '/health/db',
      authentication: '/api/auth/*',
      modules: '/api/modules/*',
      progress: '/api/progress/*',
      quizzes: '/api/quizzes/*',
      badges: '/api/badges/*',
      calculations: '/api/calculations/*'
    },
    documentation: {
      summary: 'See API-IMPLEMENTATION-SUMMARY.md for complete endpoint documentation',
      totalEndpoints: '35+',
      features: [
        'JWT Authentication',
        'User Management',
        'Module Management',
        'Progress Tracking',
        'Quiz System with Scoring',
        'Badge/Achievement System',
        'Calculator Saves'
      ]
    },
    timestamp: new Date().toISOString()
  });
});

// Health check endpoints
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    database: 'connected'
  });
});

app.get('/health/db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({
      status: 'ok',
      database: 'connected',
      timestamp: result.rows[0].now
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      database: 'disconnected',
      error: error.message
    });
  }
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/modules', moduleRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/badges', badgeRoutes);
app.use('/api/calculations', calculationRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found',
    path: req.path,
    method: req.method
  });
});

// Global error handler
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log('\n🚀 ========================================');
  console.log(`   RF Learning Hub API Server`);
  console.log('   ========================================');
  console.log(`   Status: Running`);
  console.log(`   URL: http://${HOST}:${PORT}`);
  console.log(`   Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`   Database: ${process.env.DB_NAME}`);
  console.log(`   Frontend: ${process.env.FRONTEND_URL}`);
  console.log('   ========================================\n');
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, closing server...');
  pool.end();
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('\nSIGINT received, closing server...');
  pool.end();
  process.exit(0);
});
