const expressAsyncHandler = require("express-async-handler");
const Influencer = require("../model/adminmodel");
const Booking = require("../model/bookingmodel");
const Auth = require("../model/authmodels");
const Comment = require("../model/commentmodel");

// CREATE INFLUENCER
const createinfluencer = expressAsyncHandler(async (req, res) => {
  const {
    name,
    niche,
    followers,
    instagram_headle,
    rate,
    location,
    profliepic,
    gender,
  } = req.body;

  if (
    !name ||
    !niche ||
    !followers ||
    !instagram_headle ||
    !rate ||
    !location ||
    !profliepic ||
    !gender
  ) {
    res.status(400);
    throw new Error("Please fill all details");
  }

  const existingInfluencer = await Influencer.findOne({ instagram_headle });
  if (existingInfluencer) {
    res.status(400);
    throw new Error("Influencer already exists");
  }

  const newInfluencer = await Influencer.create({
    name,
    niche,
    followers,
    instagram_headle,
    rate,
    location,
    profliepic,
    gender,
  });

  if (!newInfluencer) {
    res.status(400);
    throw new Error("Influencer not created");
  }

  res.status(201).json(newInfluencer);
});

// UPDATE INFLUENCER
const updateinfluencer = expressAsyncHandler(async (req, res) => {
  const updatedInfluencer = await Influencer.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!updatedInfluencer) {
    res.status(404);
    throw new Error("Influencer not found");
  }

  res.status(200).json(updatedInfluencer);
});

// REMOVE INFLUENCER
const removeinfluencer = expressAsyncHandler(async (req, res) => {
  const deleted = await Influencer.findByIdAndDelete(req.params.id);

  if (!deleted) {
    res.status(404);
    throw new Error("Influencer not found");
  }

  res.status(200).json({ id: req.params.id, message: "Deleted influencer" });
});

// GET ALL BOOKINGS
const getallbookindinfluencer = expressAsyncHandler(async (req, res) => {
  const bookingsList = await Booking.find()
    .populate("user")
    .populate("influencer");

  if (!bookingsList) {
    res.status(404);
    throw new Error("No bookings found");
  }

  res.status(200).json(bookingsList);
});

// UPDATE BOOKING STATUS
const updatebookingindinfluencer = expressAsyncHandler(async (req, res) => {
  const updateBooking = await Booking.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
    .populate("user")
    .populate("influencer");

  if (!updateBooking) {
    res.status(404);
    throw new Error("Booking not found");
  }

  // Reactivate influencer if booking rejected
  if (req.body.status === "rejected" && updateBooking.influencer?._id) {
    await Influencer.findByIdAndUpdate(
      updateBooking.influencer._id,
      { isactive: true },
      { new: true }
    );
  }

  res.status(200).json(updateBooking);
});

// GET ALL USERS
const getalluser = expressAsyncHandler(async (req, res) => {
  const alluser = await Auth.find().select("-password");

  if (!alluser) {
    res.status(404);
    throw new Error("Users not found");
  }

  res.status(200).json(alluser);
});

// GET ALL COMMENTS
const getallcomment = expressAsyncHandler(async (req, res) => {
  const allcomment = await Comment.find()
    .populate("user")
    .populate({
      path: "booking",
      populate: {
        path: "influencer",
        model: "Influencer",
      },
    });

  if (!allcomment) {
    res.status(404);
    throw new Error("Comments not found");
  }

  res.status(200).json(allcomment);
});

module.exports = {
  createinfluencer,
  updateinfluencer,
  removeinfluencer,
  getallbookindinfluencer,
  updatebookingindinfluencer,
  getalluser,
  getallcomment,
};
