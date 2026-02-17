export const getMockUsers = (mockUsersService) => async(req, res) => {
    const { totalUsers } = req.body;
    
    const mockUsers = await mockUsersService.getMockUsers({ totalUsers });

    res.json({
        data: mockUsers,
    });
}

export const createMockUsers = (mockUsersService) => async(req, res) => {
    const { users, pets } = req.body;
    
    const mockData = await mockUsersService.createMockUsers({ users, pets });

    res.json({
        data: mockData,
    });
}