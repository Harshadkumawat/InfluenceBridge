


const { mongoose } = require("mongoose");

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Auth',
        required: true,
    },
    influencer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Influencer',
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'fulfilled', 'reject', 'Completed'], // consider fixing typo "rejeact"
        default: 'pending',
        required: true,
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Booking', bookingSchema);

// const mongoose = require("mongoose");

// const bookingSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//     ref: "Auth",
//   },
//   influencer: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//     ref: "Influencer",
//   },
//   status: {
//     type: String,
//     enum: ["pending", "fulfilled", "rejected", "completed"],
//     default: "pending",
//     required: true,
//   },
// }, {
//   timestamps: true,
// });

// module.exports = mongoose.model("Booking", bookingSchema);

