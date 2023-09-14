import express from "express";
import user from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const register = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new user({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(201).send("success");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const User = await user.findOne({ username: req.body.username });

    if (!User) return next(createError(404, "user not found"));

    const isCorrect = bcrypt.compareSync(req.body.password, User.password);
    if (!isCorrect) return next(createError(400, "wrong password or username"));

    const token = jwt.sign(
      {
        id: User._id,
        isSeller: User.isSeller,
      },
      process.env.JWT_KEY
    );

    const { password, ...info } = User._doc;

    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .send(info);
  } catch (err) {
    next(err);
  }
};

export const logout = async (req, res) => {};
