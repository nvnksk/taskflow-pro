import dbConnect from '../../../lib/mongodb';
import User from '../../../models/User';
import { authenticateToken } from '../../../middleware/auth';

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      await authenticateToken(req);
      const user = await User.findById(id).select('-password');
      if (!user) return res.status(404).json({ message: 'User not found' });
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  res.setHeader('Allow', ['GET']);
  return res.status(405).json({ message: `Method ${req.method} not allowed` });
}
