import { mockUsersDAO } from "../dao/mockusersDAO.js";
import { createMultipleRegistries } from "../utils/createMultipleRegistries.js";

export class MockUsersService {
    constructor() {
        this.createMultipleRegistries = createMultipleRegistries;
        this.dao = new mockUsersDAO();
    }

    async getMockUsers({ totalUsers = 50 } = {}) {
        return createMultipleRegistries(totalUsers);
    }

    async createMockUsers({ users = 50, pets = 50 } = {}) {
        return {
            users: this.createMultipleRegistries(users, "users"),
            pets: this.createMultipleRegistries(pets, "pets"),
        };
    }
}