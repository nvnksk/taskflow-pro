describe('Auth API Integration', () => {
  const testEmail = `auth-test-${Date.now()}@example.com`;

  it('should register a new user', async () => {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Auth Test User',
        email: testEmail,
        password: 'password123',
      }),
    });
    const data = await res.json();
    expect(res.status).toBe(201);
    expect(data.token).toBeDefined();
    expect(data.user.email).toBe(testEmail);
  });

  it('should not register duplicate email', async () => {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Duplicate User',
        email: testEmail,
        password: 'password123',
      }),
    });
    expect(res.status).toBe(409);
  });

  it('should login with valid credentials', async () => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: testEmail, password: 'password123' }),
    });
    const data = await res.json();
    expect(res.status).toBe(200);
    expect(data.token).toBeDefined();
  });

  it('should reject invalid credentials', async () => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: testEmail, password: 'wrongpassword' }),
    });
    expect(res.status).toBe(401);
  });
});
