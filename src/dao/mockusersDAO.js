import { mockUsersModel } from "../models/mockusers.model.js";

export class mockUsersDAO {
    constructor() {
        this.mockUsersModel = mockUsersModel;
    }

    get() {
        return this.mockUsersModel.find().lean();
    }

    getBy(filter) {
        return this.mockUsersModel.findOne(filter).lean();
    }

    create(mockuser) {
        return this.mockUsersModel.create(mockuser);
    }
}