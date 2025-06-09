const express = require("express");
const {
  getinfluencres,
  getsingleinfluencres,
  serachinfluencers,
} = require("../controllers/influencerControllers");

const router = express.Router();

router.get("/", getinfluencres);
router.get("/single/:id", getsingleinfluencres);
router.get("/search", serachinfluencers);

module.exports = router;
