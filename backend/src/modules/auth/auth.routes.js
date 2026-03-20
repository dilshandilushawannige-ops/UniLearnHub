import { Router } from "express";
import validate from "../../middlewares/validate.middleware.js";
import authMiddleware from "../../middlewares/auth.middleware.js";
import { signupValidator, loginValidator } from "./auth.validators.js";
import { signup, login, me } from "./auth.controller.js";

const router = Router();

router.post("/signup", signupValidator, validate, signup);
router.post("/login", loginValidator, validate, login);
router.get("/me", authMiddleware, me);

export default router;
