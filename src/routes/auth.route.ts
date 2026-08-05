import { Router } from "express";
import register from "../controllers/register.controller.js";
import refreshTokens from "../controllers/refreshToken.controller.js";

const authRouter = Router();

authRouter.post("/register", register);
authRouter.get("/refresh-token", refreshTokens);


export default authRouter;