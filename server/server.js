const express = require("express");
const app = express();
const path = require("path");
const colors = require("colors");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db_config");
const errorHandler = require("./middleware/errorHandier");

const PORT = process.env.PORT || 8000;

connectDB();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", require("./routers/authrouter"));
app.use("/api/admin", require("./routers/adminrouter"));
app.use("/api/bookings", require("./routers/bookingrouter"));
app.use("/api/influencer", require("./routers/influencersrouter"));
app.use("/api/comments", require("./routers/commentrouter"));

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`.bgBlue.white);
});
