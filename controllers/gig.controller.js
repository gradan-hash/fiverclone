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

export const geteGig = async (req, res, next) => {
  const query = req.query;
  const filters = {
    ...(query.userId && { userId: query.userId }),

    ...(query.category && { cat: query.category }),

    ...((query.min || query.max) && {
      price: {
        ...(query.min && { $gt: query.min }),
        ...(query.max && { $lt: query.max }),
      },
    }),

    ...(query.search && { title: { $regex: query.search, $options: "i" } }),
  };
  try {
    const gig = await Gig.find(filters).sort({ [query.sort]: -1 });

    res.status(200).json(gig);
  } catch (error) {}
};

export const singleGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);
    if (!gig) return next(createError(404, "gig not found"));
    res.status(200).send(gig);
  } catch (err) {
    next(err);
  }
};

export const deleteGig = async (req, res, next) => {
  try {
    const gig = await Gig.findById(req.params.id);

    if (gig.userId != req.userId)
      return next(createError(403, "you can only delete yout gig sorry buddy"));

    await Gig.findByIdAndDelete(req.params.id);
    res.status(200).send("Gig has been deleted");
  } catch (err) {
    next(err);
  }
};
