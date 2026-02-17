import { generateMockPet } from "./generateMockPet.js";
import { generateMockUser } from "./generateMockUser.js";

export function createMultipleRegistries(number, registryType) {
    if (typeof number !== "number") return [];

    const createdUsersList = [];

    for (let i = 0; i < number; i++) {
        if (registryType === "users") {
            createdUsersList.push(generateMockUser());
        } else if (registryType === "pets") {
            createdUsersList.push(generateMockPet());
        }
    }

    return createdUsersList;
}