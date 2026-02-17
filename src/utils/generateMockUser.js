import { faker } from "@faker-js/faker";

export function generateMockUser () {
    const role = Math.random() > 0.75 ? "user" : "admin";

    return {
        name: faker.person.firstName(),
        email: faker.internet.email(),
        password: "password123",
        role: role,
        pets: [],
    };
};