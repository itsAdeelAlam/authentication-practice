export const cookieOptions = {
    httpOnly: true,
    secure: true,
    sameSite: "strict" as const,
    maxAge: 30 * 24 * 60 * 60 * 1000,
};