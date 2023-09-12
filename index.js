import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

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

app.listen(4000, () => {
  connect()
  console.log("backend running");
});
