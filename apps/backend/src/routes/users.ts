import express, { Request, Response } from 'express';
import { User, UserRole, ApiResponse } from 'shared';

const router = express.Router();

// Mock data for demo purposes
const users: User[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    role: UserRole.ADMIN,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane@example.com',
    role: UserRole.MEMBER,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

// Get all users
router.get('/', (req: Request, res: Response) => {
  const response: ApiResponse<User[]> = {
    success: true,
    data: users
  };
  res.json(response);
});

// Get user by ID
router.get('/:id', (req: Request, res: Response) => {
  const user = users.find(u => u.id === req.params.id);
  
  if (!user) {
    return res.status(404).json({
      success: false,
      error: 'User not found'
    });
  }

  const response: ApiResponse<User> = {
    success: true,
    data: user
  };
  
  res.json(response);
});

export default router; 