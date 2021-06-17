const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    email: {
        type: String,
      trim: true,
      required: true,
      maxlength: 32,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minLength:6
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
        type:String,
        minlength:10,
        trim:true,
        required:true
      },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
