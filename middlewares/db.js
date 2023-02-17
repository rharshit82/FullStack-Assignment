const mongoose = require("mongoose");

const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI;
  try {
    mongoose
      .connect(MONGO_URI)
      .then(() => console.log("MongoDB Connected..."))
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectDB;
