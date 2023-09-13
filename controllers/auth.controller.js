import express from "express";
import user from "../models/user.model.js";
import bcrypt from "bcrypt";
export const register = async (req, res) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new user({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(201).send("success");
  } catch (err) {
    res.status(500).send("something went wrong");
  }
};
export const login = async (req, res) => {
  try {
    const User = await user.findOne({ username: req.body.username });

    if (!User) return res.status(404).send("user not found");

    const isCorrect = bcrypt.compareSync(req.body.password, User.password);
    if (!isCorrect) return res.status(400).send("wrong password or username");

    const { password, ...info } = User._doc;

    res.status(200).send(info);
  } catch (err) {
    res.status(500).send("something went wrong");
  }
};
export const logout = async (req, res) => {};
