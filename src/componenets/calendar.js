import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const FitnessCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
  
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  
    return (
      <div>
        <h1>Workout Schedule</h1>
        <Calendar onChange={handleDateChange} value={selectedDate} />
      </div>
    );
  };
  export default FitnessCalendar;
