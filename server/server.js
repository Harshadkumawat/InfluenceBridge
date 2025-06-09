const express = require("express");
const app = express();
const path = require("path");
const colors = require("colors");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db_config");
const errorHandler = require("./middleware/errorHandier");

const PORT = process.env.PORT || 5050;
const __dirname = path.resolve(); // Only define once

// Connect to database
connectDB();

// CORS fix ✅
app.use(cors({ origin: "*" }));

// Middleware
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
  app.use(express.static(path.join(__dirname, "/client/dist")));

  app.get("*", (req, res, next) => {
    if (req.originalUrl.startsWith("/api")) return next();
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Influencer API running...");
  });
}

// Error handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`.bgBlue.white);
});
