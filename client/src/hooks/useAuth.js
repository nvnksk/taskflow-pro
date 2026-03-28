import { useSelector, useDispatch } from 'react-redux';
import { loginUser, registerUser, logout } from '../store/slices/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, token, loading, error } = useSelector((state) => state.auth);

  const login = (credentials) => {
    dispatch(loginUser(credentials));
  };

  const register = (userData) => {
    dispatch(registerUser(userData));
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  return { user, token, loading, error, login, register, logoutUser };
};
