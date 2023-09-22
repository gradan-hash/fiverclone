import express from "express";
import { deleteUser, getUser } from "../controllers/user.controller.js";
import { VerifyToken } from "../middleware/jwt.js";

const router = express.Router();
router.delete("/delete/:id", VerifyToken, deleteUser);
router.get("/:id", VerifyToken, getUser);

export default router;
