const { mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    const connt = await mongoose.connect(process.env.MONGO_URI);

    console.log(`success full connect database ${connt.connection.name}`);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB ;
