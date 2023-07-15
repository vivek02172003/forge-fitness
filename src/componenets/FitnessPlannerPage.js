import React, { useState } from 'react';
import FitnessCalendar from './calendar'
import GoogleFormButton from './GoogleFormButton';
import './FitnessPlannerPage.css'; 

const FitnessPlannerPage = () => {
  const [progress, setProgress] = useState(0);
  const [milestones, setMilestones] = useState([]);

  return (
    <div>
      <div className="background-image-planner"></div>
      <div className="title">
        <h1>FITNESS PLANNER</h1>
      </div>
      <FitnessCalendar></FitnessCalendar>
    </div>
    
  );
};

export default FitnessPlannerPage;
