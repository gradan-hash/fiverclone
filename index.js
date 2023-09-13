import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";
import gigRoute from "./routes/gig.route.js";
import reviewRoute from "./routes/review.route.js";
import orderRoute from "./routes/order.route.js";
import conversationRoute from "./routes/conversation.route.js";

const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("database connection online");
  } catch (error) {
    console.log(error);
  }
};

app.use("/api/user", userRoute);
app.use("/api/messages", messageRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/review", reviewRoute);
app.use("/api/order", orderRoute);
app.use("/api/conversation", conversationRoute);

app.listen(4000, () => {
  connect();
  console.log("backend running");
});
