import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import TrackForm from './components/TrackForm';

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add-track">Add New Track</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-track" element={<TrackForm />} />
        <Route path="/edit-track/:trackId" element={<TrackForm />} />
      </Routes>
    </div>
  );
};

export default App;