import bcrypt from 'bcryptjs';
import { signToken } from '../utils/jwt';
import * as userService from './userService';

export const registerUser = async ({ name, email, password }) => {
  const existing = await userService.getUserByEmail(email);
  if (existing) {
    throw new Error('User already exists');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await userService.createUser({ name, email, password: hashedPassword });
  const token = signToken({ userId: user._id });

  return {
    user: { _id: user._id, name: user.name, email: user.email },
    token,
  };
};

export const loginUser = async ({ email, password }) => {
  const user = await userService.getUserByEmail(email);
  if (!user) {
    throw new Error('Invalid credentials');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  const token = signToken({ userId: user._id });

  return {
    user: { _id: user._id, name: user.name, email: user.email },
    token,
  };
};
