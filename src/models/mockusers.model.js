import mongoose from "mongoose";
import bcrypt from "bcrypt";

const mockUsersSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String,
    pets: [],
});

mockUsersSchema.pre("save", async function () {
    if (!this.isModified("password")) return next();

    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
});

export const mockUsersModel = mongoose.model(
    "MockUsers",
    mockUsersSchema
);