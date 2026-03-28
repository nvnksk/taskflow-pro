import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar__nav">
        <NavLink to="/" className="sidebar__link" end>
          Dashboard
        </NavLink>
        <NavLink to="/tasks" className="sidebar__link">
          All Tasks
        </NavLink>
        <NavLink to="/tasks/active" className="sidebar__link">
          Active
        </NavLink>
        <NavLink to="/tasks/completed" className="sidebar__link">
          Completed
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
