import mongoose from "mongoose";

export const mockPetsModel = mongoose.model('mockpets', new mongoose.Schema({
    name: String,
    age: Number,
    species: String,
    type: String,
}))