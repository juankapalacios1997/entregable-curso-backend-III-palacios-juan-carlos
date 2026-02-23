import { mockPetsModel } from "../models/mockpets.model.js";

export class mockPetsDAO {
    constructor() {
        this.mockPetsModel = mockPetsModel;
    }

    async get() {
        return await this.mockPetsModel.find().lean();
    }

    async getBy(filter) {
        return await this.mockPetsModel.findOne(filter).lean();
    }

    async create(mockpet) {
        return await this.mockPetsModel.create(mockpet);
    }
}