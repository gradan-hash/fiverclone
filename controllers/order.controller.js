import express from "express";
import Order from "../models/order.model.js";
import createError from "../utils/createError.js";
export const creteOrder = (req, res, next) => {
  try {
    const newOrder = 
  } catch (err) {
    next(err);
  }
};

export const getOrders = (req, res) => {
  //
  res.send("fuck off");
};
