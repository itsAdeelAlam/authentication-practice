import { configDotenv } from "dotenv";

configDotenv();

if (!process.env.MONGO_URI) {
    throw new Error(`Error: MONGO_URI isn't defined in environment variables!!!`);
}

if (!process.env.PORT) {
    throw new Error(`Error: PORT isn't defined in environment variables!!!`);
}

if (!process.env.SALT_ROUNDS) {
    throw new Error(`Error: SALT_ROUNDS isn't defined in environment variables!!!`);
}

if (!process.env.ACCESS_TOKEN_SECRET) {
    throw new Error(`Error: ACCESS_TOKEN_SECRE isn't defined in environment variables!!!`);
}

if (!process.env.REFRESH_TOKEN_SECRET) {
    throw new Error(`Error: REFRESH_TOKEN_SECRET isn't defined in environment variables!!!`);
}

if (!process.env.ACCESS_TOKEN_EXPIRY) {
    throw new Error(`Error: REFRESH_TOKEN_EXPIRY isn't defined in environment variables!!!`);
}

if (!process.env.REFRESH_TOKEN_EXPIRY) {
    throw new Error(`Error: REFRESH_TOKEN_EXPIRY isn't defined in environment variables!!!`);
}

const env = {
    MONGO_URI: process.env.MONGO_URI,
    PORT: process.env.PORT,
    SALT_ROUNDS: Number(process.env.SALT_ROUNDS),
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
    ACCESS_TOKEN_EXPIRY: process.env.ACCESS_TOKEN_EXPIRY,
    REFRESH_TOKEN_EXPIRY: process.env.REFRESH_TOKEN_EXPIRY,
}

export default env;