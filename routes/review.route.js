import express from "express";
import {
  createReview,
  getReviews,
  deleteReview,
} from "../controllers/review.controller.js";
import { VerifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/", VerifyToken, createReview);
router.get("/:gigId", VerifyToken, getReviews);
router.delete("/:id", VerifyToken, deleteReview);

export default router;
