import User from '../models/User';

export const getUserById = async (id) => {
  return User.findById(id).select('-password');
};

export const getUserByEmail = async (email) => {
  return User.findOne({ email }).select('+password');
};

export const createUser = async (userData) => {
  return User.create(userData);
};

export const updateUser = async (id, data) => {
  return User.findByIdAndUpdate(id, data, { new: true, runValidators: true }).select('-password');
};
