"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const shared_1 = require("shared");
const router = express_1.default.Router();
// Mock data for demo purposes
const users = [
    {
        id: '1',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        role: shared_1.UserRole.ADMIN,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: '2',
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane@example.com',
        role: shared_1.UserRole.MEMBER,
        createdAt: new Date(),
        updatedAt: new Date()
    }
];
// Get all users
router.get('/', (req, res) => {
    const response = {
        success: true,
        data: users
    };
    res.json(response);
});
// Get user by ID
router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === req.params.id);
    if (!user) {
        return res.status(404).json({
            success: false,
            error: 'User not found'
        });
    }
    const response = {
        success: true,
        data: user
    };
    res.json(response);
});
exports.default = router;
