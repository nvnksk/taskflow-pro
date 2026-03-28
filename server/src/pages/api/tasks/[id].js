import connectDB from '../../../config/database';
import Task from '../../../models/Task';
import { withAuth } from '../../../middleware/auth';
import { ObjectId } from 'mongodb';

async function handler(req, res) {
  await connectDB();

  const { id } = req.query;

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid task ID' });
  }

  if (req.method === 'GET') {
    try {
      const task = await Task.findOne({ _id: id, userId: req.userId });
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch task' });
    }
  } else if (req.method === 'PUT') {
    try {
      const task = await Task.findOneAndUpdate(
        { _id: id, userId: req.userId },
        req.body,
        { new: true }
      );
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update task' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const task = await Task.findOneAndDelete({ _id: id, userId: req.userId });
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.status(200).json({ message: 'Task deleted' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete task' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

export default withAuth(handler);