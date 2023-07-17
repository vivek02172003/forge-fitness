import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Classes from './components/Classes';
import HomePage from './components/HomePage';
import Membership from './components/Membership';
import NutritionPage from './components/NutritionPage';
import TrainingHelpPage from './components/TrainingHelp';
import FitnessPlannerPage from './components/FitnessPlannerPage';
import Checkout from './components/Checkout';
import NotFoundPage from './components/notFoundPage';

function App() {
  return (
    <Router basename="/forge-fitness">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/nutrition" element={<NutritionPage />} />
        <Route path="/train" element={<TrainingHelpPage />} />
        <Route path="/fitness" element={<FitnessPlannerPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/*" element={<NotFoundPage />} /> {/* Add this line */}
      </Routes>
    </Router>
  );
}

export default App;
