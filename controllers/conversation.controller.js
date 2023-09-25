import express from "express";

import createError from "../utils/createError.js";
import Conversation from "../models/conversation.model.js";

export const createConversation = async (req, res, next) => {
  const newConversation = new Conversation({
    id: req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
    sellerId: req.isSeller ? req.userId : req.body.to,
    buyerId: req.isSeller ? req.body.to : req.userId,
    readByseller: req.isSeller,
    readBybuyer: !req.isSeller,
  });
  try {
    const SavedConvesation = await newConversation.save();
    res.status(200).send(SavedConvesation);
  } catch (err) {
    next(err);
  }
};

export const getConversation = async (req, res, next) => {
  try {
    const conversations = await Conversation.find(
      req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }
    );
    res.status(200).send(conversations);
  } catch (err) {
    next(err);
  }
};
export const getsingleConversation = async (req, res, next) => {
  try {
    const Singleconversation = await Conversation.findOne({
      id: req.params.id,
    });
    res.status(200).send(Singleconversation);
  } catch (err) {
    next(err);
  }
};

export const updateConversation = async (req, res, next) => {
  try {
    const updateData = req.isSeller
      ? { readByseller: true }
      : { readBybuyer: true };

    const UpdatedConversation = await Conversation.findByIdAndUpdate(
      {
        id: req.params.id,
      },
      {
        $set: updateData,
      },
      { new: true }
    );
    res.status(200).send(UpdatedConversation);
  } catch (err) {
    next(err);
  }
};
