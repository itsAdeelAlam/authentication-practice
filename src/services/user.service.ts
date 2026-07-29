import { User } from "../models/user.model.js"

const findUserByUsername = async (username: string) => {
    username = username.toLowerCase().trim();

    return await User.findOne({username});
}

const findUserByEmail = async (email: string) => {
    email = email.toLowerCase().trim();

    return await User.findOne({ email });
}

export { findUserByUsername, findUserByEmail };