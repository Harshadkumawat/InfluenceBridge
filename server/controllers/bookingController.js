const expressAsyncHandler = require("express-async-handler");
const Booking = require("../model/bookingmodel");
const Influencer = require("../model/adminmodel");
const Auth = require("../model/authmodels");

const getBooking = expressAsyncHandler(async (req, res) => {
  const allBooking = await Booking.find({ user: req.user._id }).populate(
    "influencer"
  );
  if (!allBooking) {
    res.status(404);
    throw new Error("influencer not found");
  }

  res.status(200).json(allBooking);
});

const getsingleBooking = expressAsyncHandler(async (req, res) => {
  const allBooking = await Booking.findById(req.params.id).populate(
    "influencer"
  );
  if (!allBooking) {
    res.status(404);
    throw new Error("single Booking");
  }

  res.status(200).json(allBooking);
});
const addbooking = expressAsyncHandler(async (req, res) => {
  const influencer = await Influencer.findById(req.params.id);
  if (!influencer) {
    res.status(404);
    throw new Error("influencer not found");
  }

  //updata influecner
  await Influencer.findByIdAndUpdate(
    influencer._id,
    { isactive: false },
    { new: true }
  );
  /// create booking
  const newBooking = await Booking.create({
    user: req.user.id,
    influencer: influencer._id,
    status: "pending",
  });
  if (!newBooking) {
    res.status(400);
    throw new Error("booking  not create ");
  } else {
    res.status(201).json(newBooking);
  }
});

module.exports = { getBooking, getsingleBooking, addbooking };
