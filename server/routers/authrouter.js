const express = require("express");
const {
  authlogin,
  authregister,
  privateController,
  updateUser,
} = require("../controllers/authControllers");

const router = express.Router();

router.post("/register", authregister);
router.post("/login", authlogin);
router.post("/private", privateController);
module.exports = router;
