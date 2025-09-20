const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const captinSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlenght: [3, "Firstname must be at least 3 character long"],
    },
    lastname: {
      type: String,
      minlenght: [3, "Lastname must be at least 3 characters long"],
    },
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },

  password: {
    type: String,
    required: true,
    select: true,
  },

  socketId: {
    type: String,
  },

  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },

  vehicle: {
    color: {
      type: String,
      required: true,
      minlenght: [3, "Color must be at least 3 characters long"],
    },
    plate: {
      type: String,
      required: true,
      minlenght: [3, "plate must be at least 3 characters long"],
    },
    capacity: {
      type: Number,
      required: true,
      min: [1, "Capacity must be at least 1"],
    },
    vehicleType: {
      type: String,
      required: true,
      enum: ["car", "motercycle", "auto"],
    },
  },

  location: {
    lat: {
      type: Number,
    },
    log: {
      type: Number,
    },
  },
});

captinSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {expiresIn:'24h'});
  return token;
};

captinSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

captinSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const captainModel = mongoose.model("captain", captinSchema);
module.exports = captainModel;
