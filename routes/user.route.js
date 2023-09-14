import express from "express";
import { deleteUser } from "../controllers/user.controller.js";
import { VerifyToken } from "../middleware/jwt.js";

const router = express.Router();
router.delete("/delete/:id", VerifyToken, deleteUser);

export default router;
