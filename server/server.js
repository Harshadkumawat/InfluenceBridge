const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const colors = require("colors");
const connectDB = require("./config/db_config");
const errorHandler = require("./middleware/errorHandier"); // make sure filename matches exactly
const PORT = process.env.PORT || 5050;

// Connect to database
connectDB();

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use("/api/auth", require("./routers/authrouter"));
app.use("/api/admin", require("./routers/adminrouter"));
app.use("/api/bookings", require("./routers/bookingrouter"));
app.use("/api/influencer", require("./routers/influencersrouter"));
app.use("/api/comments", require("./routers/commentrouter"));

// Serve frontend in production
if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "/client/dist")));

  app.get("*", (req, res, next) => {
    if (req.originalUrl.startsWith("/api")) return next();
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
} else {
  // Dev root route
  app.get("/", (req, res) => {
    res.send("Influencer API running...");
  });
}

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`.bgBlue.white);
});
