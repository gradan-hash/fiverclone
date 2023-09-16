import express from "express";
import Gig from "../models/gig.model.js";
import createError from "../utils/createError.js";

export const createGig = async (req, res, next) => {
  if (!req.isSeller)
    return next(createError(403, "only sellers can create a gig "));

  const newGig = new Gig({
    userId: req.userId,
    ...req.body,
  });

  try {
    const savedGig = await newGig.save();
    res.status(200).json(savedGig);
  } catch (err) {
    next(err);
  }
};

export const geteGig = (req, res, next) => {};
export const singleGig = (req, res, next) => {};

export const deleteGig =await (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id)
    if(gig.userId !=req.userId)return next(createError(403,"you can only delete yout gig sorry buddy"))
  } catch (err) {
    next(err);
  }
};
