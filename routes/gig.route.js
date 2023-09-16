import express from "express";
import {
  createGig,
  geteGig,
  singleGig,
  deleteGig,
} from "../controllers/gig.controller.js";

import { VerifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/", VerifyToken, createGig);
router.get("/", VerifyToken, geteGig);
router.get("/single/:id", VerifyToken, singleGig);
router.delete("/:id", VerifyToken, deleteGig);

export default router;
