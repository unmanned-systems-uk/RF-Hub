/**
 * Centralized error handling middleware
 */
function errorHandler(err, req, res, next) {
  console.error('Error:', err);

  // PostgreSQL specific errors
  if (err.code === '23505') {
    return res.status(409).json({
      error: 'Duplicate entry',
      detail: 'This record already exists'
    });
  }

  if (err.code === '23503') {
    return res.status(400).json({
      error: 'Invalid reference',
      detail: 'Referenced record does not exist'
    });
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({
      error: 'Invalid token',
      detail: err.message
    });
  }

  if (err.name === 'TokenExpiredError') {
    return res.status(401).json({
      error: 'Token expired',
      detail: 'Please login again'
    });
  }

  // Default error
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
}

module.exports = errorHandler;
