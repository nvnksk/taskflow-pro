export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  // With JWT-based auth, logout is handled client-side by removing the token.
  return res.status(200).json({ message: 'Logged out successfully' });
}
