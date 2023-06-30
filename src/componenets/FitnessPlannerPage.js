import React from 'react';
import FitnessCalendar from './calendar'


const FitnessPlannerPage = () => {
  const [workoutSchedule, setWorkoutSchedule] = React.useState([]);
  const [reminders, setReminders] = React.useState([]);
  const [progress, setProgress] = React.useState([]);

  const addWorkoutSession = (session) => {
    setWorkoutSchedule([...workoutSchedule, session]);
  };

  const setReminder = (reminder) => {
    setReminders([...reminders, reminder]);
  };

  const trackProgress = (achievement) => {
    setProgress([...progress, achievement]);
  };

  return (
    <div>

      <h3>Reminders</h3>
      <ul>
        {reminders.map((reminder, index) => (
          <li key={index}>{reminder}</li>
        ))}
      </ul>
      <button onClick={() => setReminder('Upcoming Workout Reminder')}>
        Set Workout Reminder
      </button>

      <h3>Progress Tracking</h3>
      <ul>
        {progress.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
      <button onClick={() => trackProgress('Achievement Unlocked')}>Track Progress</button>
      <FitnessCalendar />
    </div>
  );
};

export default FitnessPlannerPage;
