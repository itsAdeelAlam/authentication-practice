import { connect } from "mongoose";
import env from "./env.config.js";


const connectDB = async (): Promise<void> => {
    try {
        await connect(env.MONGO_URI);
        console.log("✅ Connected to MongoDB");

    } catch (error) {
        console.error("Database Connection Failed!", error);
        throw error;
    }
}

export default connectDB;