import jwt from "jsonwebtoken";
import env from "../configs/env.config.js";
import type { StringValue } from "ms";


export const asignAccessToken = (userId: string) => {
    return jwt.sign(
        {_id: userId},
        env.ACCESS_TOKEN_SECRET,
        {expiresIn: env.ACCESS_TOKEN_EXPIRY as StringValue}
    )
}

export const asignRefreshToken = (userId: string) => {
    return jwt.sign (
        {_id: userId},
        env.REFRESH_TOKEN_SECRET,
        {expiresIn: env.REFRESH_TOKEN_EXPIRY as StringValue}
    )
}

export const issueToken = (userId: string) => {
    const accessToken = asignAccessToken(userId);
    const refreshToken = asignRefreshToken(userId);

    return {
        accessToken,
        refreshToken,
    }
}