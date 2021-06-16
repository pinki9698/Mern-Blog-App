const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
    institute: {
      type: String,
      required: true,
      minLength:2,
      maxLength:150
    },
   contact_no: {
      type: Number,
      required:true,
      minLength:10,
      maxLength:12
    },
    message: {
        type: String,
        required:true
      },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
