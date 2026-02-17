import { mockPetModel } from "../models/mockpets.model";

export class mockPetsDAO {
    constructor() {
        this.mockPetsModel = mockPetsModel;
    }

    get() {
        return this.mockPetsModel.find().lean();
    }

    getBy(filter) {
        return this.mockPetsModel.findOne(filter).lean();
    }

    create(mockuser) {
        return this.mockPetsModel.create(mockuser);
    }
}