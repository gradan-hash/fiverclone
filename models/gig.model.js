import mongoose from "mongoose";
const { Schema } = mongoose;

const gigScheme = new Schema(
  {
    
  },
  { timestamps: true }
);

export default mongoose.model("User", gigScheme);
