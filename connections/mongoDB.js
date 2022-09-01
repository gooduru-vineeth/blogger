const mongoose = require("mongoose");

exports.connectToMongoDB = () =>
  mongoose.connect("mongodb://localhost:27017/blogger-db");
