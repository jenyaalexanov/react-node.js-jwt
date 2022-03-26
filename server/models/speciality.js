const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Speciality = new Schema({
    Name: String
  });

module.exports = mongoose.model("Speciality", Speciality);