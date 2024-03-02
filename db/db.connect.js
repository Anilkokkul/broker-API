const mongoose = require("mongoose");

exports.db = () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected...");
  } catch (error) {
    console.log("error while connecting to Mongo Server");
  }
};
