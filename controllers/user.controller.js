import express from "express";
import user from "../models/user.model.js";
import jwt from "jsonwebtoken";



export const deleteUser = async (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).send("youre not aunthenticated");

  jwt.verify(token, process.env.JWT_KEY, (err, payload) => {
    res.send(payload);
  });

  // await user.findByIdAndDelete(req.params.id);
};
