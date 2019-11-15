const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;

  // Log to console for the developer
  console.log(err);

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = `Resource not found with id ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  // Mongoose Duplicate key
  if (err.code === 11000) {
    const message = 'Duplicate field value entered';
    error = new ErrorResponse(message, 400);
  }

  // Mongoose validaion error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(elem => elem.message);

    error = new ErrorResponse(message, 404);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  });
};

module.exports = errorHandler;
