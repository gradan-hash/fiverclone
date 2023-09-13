import express from "express";
import user from "../models/user.model.js";
import bcrypt from "bcrypt";
export const register = async (req, res) => {
  try {
    const hash = bcypt.hashSync(req.body.password);
    const newUser = new user(req.body);

    await newUser.save();
    res.status(201).send("success");
  } catch (err) {
    res.status(500).send("something went wrong");
  }
};
export const login = async (req, res) => {};
export const logout = async (req, res) => {};
