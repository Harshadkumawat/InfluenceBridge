const express = require("express");
const {
  createinfluencer,
  updateinfluencer,
  removeinfluencer,
  getallbookindinfluencer,
  updatebookingindinfluencer,
  getalluser,
  getallcomment,
} = require("../controllers/adminControllers");

const adminprotect = require("../middleware/adminmiddliewer");
const router = express.Router();

// ✅ Each route on a separate line with ;
router.post("/influencer", adminprotect, createinfluencer);
router.put("/influencer/:id", adminprotect, updateinfluencer);
router.delete("/influencer/:id", adminprotect, removeinfluencer);
router.get("/bookings", adminprotect, getallbookindinfluencer);
router.put("/bookings/:id", adminprotect, updatebookingindinfluencer);
router.get("/users", adminprotect, getalluser);
router.get("/comment", adminprotect, getallcomment);

module.exports = router;
