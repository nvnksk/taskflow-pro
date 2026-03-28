import React from 'react';
import Sidebar from '../organisms/Sidebar';
import Header from '../molecules/Header';

function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Header />
      <div className="layout-container">
        <Sidebar />
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;