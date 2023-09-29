import express from "express";
import Message from "../models/message.model.js";
import createError from "../utils/createError.js";

export const createMessage = (req, res, next) => {
  try {
    const newMessage = new Message({
      conversationId: req.body.conversationId,
      userId: req.userId,
      desc: req.body.desc,
    });
  } catch (err) {
    next(err);
  }
};

export const getMessage = async (req, res, next) => {
  try {
    const message = await Message.find({
      conversationId: req.params.id,
    });
    res.status(200).send(message);
  } catch (err) {
    next(err);
  }
};
