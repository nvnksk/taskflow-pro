import { z } from 'zod';

export function validateRequest(schema) {
  return (handler) => async (req, res) => {
    try {
      const validatedData = schema.parse({
        body: req.body,
        query: req.query,
        params: req.query,
      });
      req.validatedData = validatedData;
      return handler(req, res);
    } catch (error) {
      return res.status(400).json({ error: 'Validation failed', issues: error.issues });
    }
  };
}

export const taskCreateSchema = z.object({
  body: z.object({
    title: z.string().min(1).max(100),
    description: z.string().optional(),
    priority: z.enum(['low', 'medium', 'high']).optional(),
    dueDate: z.string().datetime().optional(),
  }),
});