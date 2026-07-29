import { hash } from "bcryptjs";
import mongoose, { model, Schema } from "mongoose";
import env from "../configs/env.config.js";

export interface IUser {
    _id?: mongoose.Types.ObjectId;
    username: string;
    name: string;
    email: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const userSchema = new Schema<IUser>(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        name: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
    },    
    {
        timestamps: true,
    }
)


userSchema.pre("save", async function() {
    if (!this.isModified("password")) return;

    this.password = await hash(this.password, env.SALT_ROUNDS);
})

const User = model<IUser>("User", userSchema);
export { User };