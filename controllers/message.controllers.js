import express from "express";
import Message from "../models/message.model.js";
import createError from "../utils/createError.js";
import Conversation from "../models/conversation.model.js";

export const createMessage = async (req, res, next) => {
  const newMessage = new Message({
    conversationId: req.body.conversationId,
    userId: req.userId,
    desc: req.body.desc,
  });
  try {
    const savedMessage = await newMessage.save();
    await Conversation.findOneAndUpdate(
      { id: req.body.conversationId },
      {
        $set: {
          readByseller: req.isSeller,
          readBybuyer: !req.isSeller,
          lastmessage: req.body.desc,
        },
      },
      { new: true }
    );
    res.status(200).send(savedMesssaage);
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
