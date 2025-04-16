import express, { Request, Response } from 'express';
import { Event, ApiResponse } from 'shared';

const router = express.Router();

// Mock data for demo purposes
const events: Event[] = [
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
router.get('/', (req: Request, res: Response) => {
  const response: ApiResponse<Event[]> = {
    success: true,
    data: events
  };
  res.json(response);
});

// Get event by ID
router.get('/:id', (req: Request, res: Response) => {
  const event = events.find(e => e.id === req.params.id);
  
  if (!event) {
    return res.status(404).json({
      success: false,
      error: 'Event not found'
    });
  }

  const response: ApiResponse<Event> = {
    success: true,
    data: event
  };
  
  res.json(response);
});

export default router; 