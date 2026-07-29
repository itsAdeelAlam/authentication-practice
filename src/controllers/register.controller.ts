import { Request, Response } from "express";
import { User } from "../models/user.model.js";
import { findUserByEmail, findUserByUsername } from "../services/user.service.js";
import jwt from "jsonwebtoken";
import env from "../configs/env.config.js";

const register = async (req: Request, res: Response): Promise<void> => {

    const { name, username, email, password } = req.body;

    try {
        const existingUser = await findUserByEmail(email);

        if (existingUser) {
            res.status(409).json({
                message: "Email already registered!"
            })
            return;
        }


        const isTaken = await findUserByUsername(username);

        if (isTaken) {
            res.status(409).json({
                message: "Username is not available"
            })
            return;
        }

        const user = await User.create({
            username,
            name,
            email,
            password,
        })

        const token = jwt.sign(
            {
                id: user._id,
                username: user.username,
                password: user.password,
            },
            env.JWT_SECRET
        )

        res.status(201).json({
            message: "User registered successfully.",
            user: {
                id: user._id,
                name: user.name,
                username: user.username,
                email: user.email,
            },
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "User registration failed.",
        });
    }

}

export default register;