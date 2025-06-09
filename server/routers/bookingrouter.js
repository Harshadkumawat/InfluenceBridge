const express = require("express");
const {
  getBooking,
  getsingleBooking,
  addbooking,
} = require("../controllers/bookingController");
// const { route } = require('./authrouter')
const protect = require("../middleware/authmiddliewer");

const router = express.Router();

router.get("/", protect, getBooking);
router.post("/:id", protect, addbooking);
router.get("/:bid", protect, getsingleBooking);
router.use("/:id/comment", require("../routers/commentrouter"));
module.exports = router;
