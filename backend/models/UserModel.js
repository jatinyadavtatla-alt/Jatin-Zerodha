const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const userSchema = new mongoose.Schema({
  UserName: {
    type: String,
    required: [true, "Your UserName Is Required"],
  },
  email: {
    type: String,
    required: [true, "Email is needed"],
  },
  password: {
    type: String,
    required: [true, "Password is Required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function () {
  this.password = await bcryptjs.hash(this.password, 12);
});

const UserModel = mongoose.models.Users || mongoose.model("Users", userSchema);
module.exports = UserModel;