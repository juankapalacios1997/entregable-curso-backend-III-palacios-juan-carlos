import { Router } from "express";
import { MockUsersService } from "../../services/mockusers.service.js";
import { getMockUsers, createMockUsers } from "../../controllers/mockusers.controller.js";

export default function mocksRouter() {
    const router = Router();

    const mockUsersService = new MockUsersService();

    router.get("/mockinguser", getMockUsers(mockUsersService));

    router.post("/generateData", createMockUsers(mockUsersService));

    return router;
}