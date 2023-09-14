import express from "express";
import user from "../models/user.model.js";

export const deleteUser = async (req, res) => {
  const User = await user.findById(req.params.id);

  if (req.userId !== User._id.toString()) {
    return res.status(403).send("you can delete yor account only");
  }

  await user.findByIdAndDelete(req.params.id);
  res.status(200).send("deleted");
};
