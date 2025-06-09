const { mongoose } = require("mongoose");

const adminshcme = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    niche: {
      type: String,
      required: true,
      enum: [
        "lifestyle",
        "education",
        "technology",
        "fashion",
        "sports",
        "gaming",
        "fitness",
        "podcast",
        "devotional",
        "comic",
        "food",
        "other",
      ],
    },
    followers: {
      type: String,
      required: true,
    },
    instagram_headle: {
      type: String,
      required: true,
      unique: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    isactive: {
      type: Boolean,
      default: true,
      required: true,
    },
    profliepic: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female", "other"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Influencer", adminshcme);
// influencers
