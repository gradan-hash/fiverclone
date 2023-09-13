import express from "express";
import user from "../models/user.model.js";

export const register = async (req, res) => {
  try {
    const newUser = new user({
      username: "username",
      password: "123456",
      email: "mutukku@gmail.com",
      country: "kenya",
    });

    await newUser.save();
    res.status(201).send("success");
  } catch (err) {
    res.status(500).send("something went wrong");
  }
};
export const login = async (req, res) => {};
export const logout = async (req, res) => {};
