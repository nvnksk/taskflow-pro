import http from 'http';

describe('Tasks API Integration', () => {
  let token;
  let taskId;

  beforeAll(async () => {
    // Register and login to get token
    const registerRes = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Test User',
        email: `test-${Date.now()}@example.com`,
        password: 'password123',
      }),
    });
    const data = await registerRes.json();
    token = data.token;
  });

  it('should create a task', async () => {
    const res = await fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title: 'Integration Test Task', priority: 'high' }),
    });
    const task = await res.json();
    expect(res.status).toBe(201);
    expect(task.title).toBe('Integration Test Task');
    taskId = task._id;
  });

  it('should get all tasks', async () => {
    const res = await fetch('/api/tasks', {
      headers: { Authorization: `Bearer ${token}` },
    });
    const tasks = await res.json();
    expect(res.status).toBe(200);
    expect(Array.isArray(tasks)).toBe(true);
  });

  it('should delete a task', async () => {
    const res = await fetch(`/api/tasks/${taskId}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    expect(res.status).toBe(200);
  });
});
