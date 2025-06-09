const {  mongoose } = require("mongoose");

const commentshcema= new mongoose.Schema({

user:{
    type: mongoose.Schema.Types.ObjectId,
ref:'Auth',
required:true
},
booking:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Booking',
    required:true

},

text:{
    type:String,
    required:[true,'please fill to text']
},




},{
    timestamps:true
})
module.exports= mongoose.model("Comment",commentshcema)




// const mongoose = require("mongoose");

// const commentSchema = new mongoose.Schema(
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Auth",
//       required: true,
//     },
//     booking: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "booking",
//       required: true,
//     },
//     text: {
//       type: String,
//       required: [true, "Please provide comment text."],
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// module.exports = mongoose.model("Comment", commentSchema);



