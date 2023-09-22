import express from "express";
import { creteOrder, getOrders } from "../controllers/order.controller.js";
import { VerifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/:gigId", VerifyToken, creteOrder);
router.get("/all", VerifyToken, getOrders);

export default router;
