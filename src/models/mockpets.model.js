import mongoose from "mongoose";

export const mockPetModel = mongoose.model('mockpet', new mongoose.Schema({
    name: String,
    age: Number,
    species: String,
    type: String,
}))