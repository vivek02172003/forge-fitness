import Navbar from './componenets/NavBar';
import Classes from './componenets/Classes';
import HomePage from './componenets/HomePage';
import Membership from './componenets/Membership';
import NutritionPage from './componenets/NutritionPage';
import TrainingHelpPage from './componenets/TrainingHelp';
import FitnessPlannerPage from './componenets/FitnessPlannerPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/nutrition" element={<NutritionPage />} />
        <Route path="/train" element={<TrainingHelpPage />} />
        <Route path="/fitness" element={<FitnessPlannerPage />} />
        <Route path="/membership" element={<FitnessPlannerPage />} />
      </Routes>
    </Router>
  );
}

export default App;