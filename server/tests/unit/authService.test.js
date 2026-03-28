import * as authService from '../../src/services/authService';
import User from '../../src/models/User';
import bcrypt from 'bcryptjs';

jest.mock('../../src/models/User');
jest.mock('bcryptjs');

describe('Auth Service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('registerUser', () => {
    it('should register a new user', async () => {
      User.findOne.mockResolvedValue(null);
      bcrypt.genSalt.mockResolvedValue('salt');
      bcrypt.hash.mockResolvedValue('hashedpassword');
      User.create.mockResolvedValue({
        _id: '1',
        name: 'Test User',
        email: 'test@example.com',
      });

      const result = await authService.registerUser({
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123',
      });

      expect(result.user.email).toBe('test@example.com');
      expect(result.token).toBeDefined();
    });

    it('should throw if user already exists', async () => {
      User.findOne.mockResolvedValue({ _id: '1' });

      await expect(
        authService.registerUser({
          name: 'Test',
          email: 'existing@example.com',
          password: 'password123',
        })
      ).rejects.toThrow('User already exists');
    });
  });

  describe('loginUser', () => {
    it('should throw for invalid credentials', async () => {
      User.findOne.mockReturnValue({ select: jest.fn().mockResolvedValue(null) });

      await expect(
        authService.loginUser({ email: 'wrong@example.com', password: 'wrong' })
      ).rejects.toThrow('Invalid credentials');
    });
  });
});
