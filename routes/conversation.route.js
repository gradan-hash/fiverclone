import express from "express";
import {
  getConversation,
  createConversation,
  getsingleConversation,
  updateConversation,
} from "../controllers/conversation.controller.js";
import { VerifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.get("/", VerifyToken, getConversation);
router.get("/", VerifyToken, createConversation);
router.get("/single/:id", VerifyToken, getsingleConversation);
router.get("/i:d", VerifyToken, updateConversation);

export default router;
