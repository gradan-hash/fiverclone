import mongoose from "mongoose";
const { Schema } = mongoose;

const conversationSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    sellerId: {
      type: String,
      required: true,
    },
    buyerId: {
      type: String,
      required: true,
    },
    readByseller: {
      type: Boolean,
      required: true,
    },
    readBybuyer: {
      type: Boolean,
      required: true,
    },
    lastmessage: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Conversation", conversationSchema);
