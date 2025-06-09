const errorHandler = (err, req, res, next) => {
  const statusCode =
    res.statusCode && res.statusCode >= 400 ? res.statusCode : 500;
  res.status(statusCode);
  console.error("🔥 ERROR:", err.message); // Show error in terminal

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};

module.exports = errorHandler;
