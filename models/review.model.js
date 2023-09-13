import mongoose from "mongoose";
const { Schema } = mongoose;

const reviewSchema = new Schema(
  {
    gigiD:{
      type: String,
      required : true
    },
    userId:{
      type: String,
      required : true
    },
     star:{
      type: String,
      required : true,
      enum: [1,2,3,4,5]
    },
     
     desc:{
      type: String,
      required : true
    },
  },
  { timestamps: true }
);

export default mongoose.model("Review", reviewSchema);