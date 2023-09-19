import express from "express";
import user from "../models/user.model.js";
import createError from "../utils/createError.js";

export const deleteUser = async (req, res, next) => {
  const User = await user.findById(req.params.id);

  if (req.userId !== User._id.toString()) {
    return next(createError(403, "you can delete yor account only"));
  }

  await user.findByIdAndDelete(req.params.id);
  res.status(200).send("deleted");
};

export const getUser = async (req, res, next) => {
  const User = await user.findById(req.params.id);

  res.status(200).json(User);
};
