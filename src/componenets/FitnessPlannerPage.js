import React, { useState } from 'react';
import FitnessCalendar from './calendar'
import GoogleFormButton from './GoogleFormButton';
import './FitnessPlannerPage.css'; 
import { initReactI18next, useTranslation } from 'react-i18next';

const FitnessPlannerPage = () => {
  const [progress, setProgress] = useState(0);
  const [milestones, setMilestones] = useState([]);
  const { t } = useTranslation();
  return (
    <div>
      <div className="background-image-planner"></div>
      <div className="title">
        <h1>{t("fitnessPlanner")}</h1>
      </div>
      <FitnessCalendar></FitnessCalendar>
      <GoogleFormButton />
    </div>
    
  );
};

export default FitnessPlannerPage;
