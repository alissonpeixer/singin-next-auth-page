import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: {
    type: String,
    require: true,
    unique: true
  },
  name: {
    type: String,
    requeired: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;