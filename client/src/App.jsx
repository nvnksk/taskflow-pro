import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/templates/MainLayout';
import Dashboard from './components/organisms/Dashboard';
import './styles/index.scss';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* Add more routes here */}
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;