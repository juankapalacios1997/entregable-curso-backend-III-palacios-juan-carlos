import { mockUsersModel } from "../models/mockusers.model.js";

export class mockUsersDAO {
    constructor() {
        this.mockUsersModel = mockUsersModel;
    }

    async get() {
        return await this.mockUsersModel.find().lean();
    }

    async getBy(filter) {
        return await this.mockUsersModel.findOne(filter).lean();
    }

    async create(mockuser) {
        return await this.mockUsersModel.create(mockuser);
    }
}