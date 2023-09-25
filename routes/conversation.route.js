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
router.post("/", VerifyToken, createConversation);
router.get("/single/:id", VerifyToken, getsingleConversation);
router.put("/id", VerifyToken, updateConversation);

export default router;
