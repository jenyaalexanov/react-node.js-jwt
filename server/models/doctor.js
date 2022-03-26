const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Doctor = new Schema({
    FIO: {
      type: String,
    },
    speciality_id: {
        type: Schema.Types.ObjectId,
        ref: "Speciality"
      },
  });

module.exports = mongoose.model("Doctor", Doctor);