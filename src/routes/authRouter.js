import { Router } from "express";
import { signIn, signUp, getUser } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/sign-up", signUp);
authRouter.post("/sign-in", signIn);
authRouter.get("/user/:id", getUser);

export default authRouter;
