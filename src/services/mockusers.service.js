import { createMultipleRegistries } from "../utils/createMultipleRegistries.js";

import { generateMockUser } from "../utils/generateMockUser.js";
import { generateMockPet } from "../utils/generateMockPet.js";

import { mockUsersDAO } from "../dao/mockusersDAO.js";
import { mockPetsDAO } from "../dao/mockpetsDAO.js";

export class MockUsersService {
    constructor() {
        this.createMultipleRegistries = createMultipleRegistries;
        this.generateMockUser = generateMockUser;
        this.generateMockPet = generateMockPet;
        this.mockusersdao = new mockUsersDAO();
        this.mockpetsdao = new mockPetsDAO();
    }

    async getMockUsers({ totalUsers = 50 } = {}) {
        return createMultipleRegistries(totalUsers);
    }

    async createMockUsers({ users = 50, pets = 50 } = {}) {
        for (let i = 0; i < users; i++) {
            await this.mockusersdao.create(this.generateMockUser());
        }
        for (let i = 0; i < pets; i++) {
            await this.mockpetsdao.create(this.generateMockPet());
        }

        return {
            users: await this.mockusersdao.get(),
            pets: await this.mockpetsdao.get(),
        }
    }
}