import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/slices/authSlice';
import Button from '../atoms/Button';

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <div className="header__brand">
        <Link to="/" className="header__logo">TaskFlow Pro</Link>
      </div>
      <nav className="header__nav">
        {user ? (
          <>
            <span className="header__user">Welcome, {user.name}</span>
            <Button variant="secondary" onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Link to="/login" className="header__link">Login</Link>
            <Link to="/register" className="header__link">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
