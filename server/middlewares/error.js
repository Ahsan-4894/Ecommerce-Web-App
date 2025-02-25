const errorMiddleware = (err, req, res, next) => {
  err.message ||= "Internal Server Error";
  err.statusCode ||= 404;

  return res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

export { errorMiddleware };
