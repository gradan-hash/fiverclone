import express from "express";
import createError from "../utils/createError.js";
import Review from "../models/review.model.js";
import Gig from "../models/gig.model.js";

export const createReview = async (req, res, next) => {
  if (req.isSeller) return next(createError("sellers cannot create a review"));

  const newGig = new Review({
    userId: req.userId,
    gigId: req.body.gigId,
    desc: req.body.desc,
    star: req.body.start,
  });

  try {
    const review = await Review.findOne({
      gigId: req.body.gigId,
      userId: req.userId,
    });

    if (review) return next(createError("already created"));

    await Gig.findByIdAndUpdate(req.body.gigId, {
      $inc: { totalStars: req.body.star, starNumber: 1 },
    });

    const savedReview = await newGig.save();
    res.status(200).send(savedReview);
  } catch (err) {
    next(err);
  }
};

export const getReviews = (req, res) => {
  try {
  } catch (err) {
    next(err);
  }
};

export const deleteReview = (req, res) => {
  try {
  } catch (err) {
    next(err);
  }
};
