"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// Mock data for demo purposes
const events = [
    {
        id: '1',
        title: 'Sunday Service',
        description: 'Weekly Sunday worship service',
        startDate: new Date('2023-05-21T10:00:00Z'),
        endDate: new Date('2023-05-21T12:00:00Z'),
        location: 'Main Auditorium',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: '2',
        title: 'Prayer Meeting',
        description: 'Mid-week prayer meeting',
        startDate: new Date('2023-05-24T18:00:00Z'),
        endDate: new Date('2023-05-24T19:30:00Z'),
        location: 'Prayer Room',
        createdAt: new Date(),
        updatedAt: new Date()
    }
];
// Get all events
router.get('/', (req, res) => {
    const response = {
        success: true,
        data: events
    };
    res.json(response);
});
// Get event by ID
router.get('/:id', (req, res) => {
    const event = events.find(e => e.id === req.params.id);
    if (!event) {
        return res.status(404).json({
            success: false,
            error: 'Event not found'
        });
    }
    const response = {
        success: true,
        data: event
    };
    res.json(response);
});
exports.default = router;
