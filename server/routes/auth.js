import express from "express";
import { register, login } from "../controllers/AuthController.js";

const router = express.Router();

router.post("/signup",register);
router.post("/login",login);


export default router;