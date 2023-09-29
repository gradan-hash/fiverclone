import express from "express";
import { VerifyToken } from "../middleware/jwt.js";
import { createMessage,getMessage } from "../controllers/message.controllers.js";
const router = express.Router();

router.post("/", VerifyToken, createMessage);
router.get("/id", VerifyToken, getMessage);

export default router;
