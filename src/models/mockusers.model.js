import mongoose from "mongoose";

export const mockUsersModel = mongoose.model('mockusers', new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String,
    pets: [],
}));