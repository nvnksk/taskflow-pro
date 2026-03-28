import connectDB from '../../../config/database';
import Task from '../../../models/Task';
import { withAuth } from '../../../middleware/auth';

async function handler(req, res) {
  await connectDB();

  if (req.method === 'GET') {
    try {
      const tasks = await Task.find({ userId: req.userId }).populate('category');
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch tasks' });
    }
  } else if (req.method === 'POST') {
    try {
      const { title, description, priority, dueDate } = req.body;

      if (!title) {
        return res.status(400).json({ error: 'Title required' });
      }

      const task = new Task({
        title,
        description,
        priority,
        dueDate,
        userId: req.userId,
      });

      await task.save();
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create task' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

export default withAuth(handler);