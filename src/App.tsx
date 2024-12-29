import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ListCarButton from './components/ListCarButton';
import HomePage from './pages/HomePage';
import ListCarPage from './pages/ListCarPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list-car" element={<ListCarPage />} />
        </Routes>
        <ListCarButton />
      </div>
    </Router>
  );
}

export default App;