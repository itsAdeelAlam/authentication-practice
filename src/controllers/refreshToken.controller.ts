import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import env from "../configs/env.config.js";
import { issueToken } from "../services/token.service.js";
import { JwtPayload } from "jsonwebtoken";
import { cookieOptions } from "../utils/cookieOptions.js";

export interface TokenPayload extends JwtPayload {
    _id: string;
}

const refreshTokens = async (req: Request, res: Response): Promise<void> => {

    const token = req.cookies.refreshToken;

    if (!token) {
        res.status(401).json({
            message: "Refresh Token not found!"
        });
        return;
    }

    try {
        const decoded = jwt.verify(token, env.REFRESH_TOKEN_SECRET) as TokenPayload;

        const { accessToken, refreshToken } = issueToken(decoded._id)

        res.cookie("refreshToken", refreshToken, cookieOptions)

        res.status(200).json({
            message: "Access Token refreshed successfully.",
            accessToken,
        })

    } catch (error) {

        res.status(401).json({
            message: "Invalid or Expired refresh token!",
        })
    }
}

export default refreshTokens;