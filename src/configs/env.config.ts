import { configDotenv } from "dotenv";

configDotenv();

if (!process.env.MONGO_URI) {
    throw new Error (`Error: MONGO_URI isn't defined in environment variables!!!`);
}

if (!process.env.PORT) {
    throw new Error (`Error: PORT isn't defined in environment variables!!!`);
}

if (!process.env.SALT_ROUNDS) {
    throw new Error (`Error: SALT_ROUNDS isn't defined in environment variables!!!`);
}

if (!process.env.JWT_SECRET) {
    throw new Error (`Error: JWT_SECRET isn't defined in environment variables!!!`);
}

const env =  {
    MONGO_URI: process.env.MONGO_URI,
    PORT: process.env.PORT,
    SALT_ROUNDS: Number(process.env.SALT_ROUNDS),
    JWT_SECRET: process.env.JWT_SECRET,
}

export default env;