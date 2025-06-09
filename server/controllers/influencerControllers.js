const expressAsyncHandler = require("express-async-handler");
const influencers = require("../model/adminmodel");

const getinfluencres = expressAsyncHandler(async (req, res) => {
  const influencer = await influencers.find();
  // console.log(influencer)
  if (!influencer) {
    res.status(404);
    throw new Error("influencer not found");
  }
  res.status(200).json(influencer);
});

const getsingleinfluencres = expressAsyncHandler(async (req, res) => {
  const influencer = await influencers.findById(req.params.id);
  if (!influencer) {
    res.status(404);
    throw new Error("influencer not found");
  }
  res.status(201).json(influencer);
});
const serachinfluencers = async (req, res) => {
  res.send("serach influencres");
};

module.exports = { getinfluencres, getsingleinfluencres, serachinfluencers };
