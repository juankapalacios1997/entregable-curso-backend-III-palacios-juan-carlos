import { faker } from "@faker-js/faker";

export function generateMockPet () {
    const species = Math.random() > 0.5 ? "Dog" : "Cat";

    return {
        name: faker.animal.petName(),
        age: Math.floor(Math.random() * 24) + 1,
        species: species,
        type: species === "Dog" ? faker.animal.dog() : faker.animal.cat(),
    };
};