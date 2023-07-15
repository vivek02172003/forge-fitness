import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css'; 

const FitnessCalendar = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [selectedWorkout, setSelectedWorkout] = useState('');
  const [scheduledEvents, setScheduledEvents] = useState([]);
  const [showInfoBox, setShowInfoBox] = useState(false);

  useEffect(() => {
    const storedEvents = localStorage.getItem('scheduledEvents');
    if (storedEvents) {
      setScheduledEvents(JSON.parse(storedEvents));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('scheduledEvents', JSON.stringify(scheduledEvents));
  }, [scheduledEvents]);

  const handleDateTimeChange = (date) => {
    if (date instanceof Date && !isNaN(date)) {
      setSelectedDateTime(date);
      setShowInfoBox(true);
    } else {
      setSelectedDateTime(null);
    }
  };

  const handleTimeChange = (event) => {
    const selectedTime = event.target.value;
    if (selectedDateTime) {
      const [hours, minutes] = selectedTime.split(':');
      const newDateTime = new Date(selectedDateTime);
      newDateTime.setHours(parseInt(hours, 10));
      newDateTime.setMinutes(parseInt(minutes, 10));
      setSelectedDateTime(newDateTime);
    }
  };

  const handleWorkoutChange = (event) => {
    setSelectedWorkout(event.target.value);
  };

  const scheduleEvent = () => {
    if (selectedDateTime && selectedWorkout) {
      const newEvent = {
        dateTime: selectedDateTime,
        workout: selectedWorkout,
      };
      setScheduledEvents([...scheduledEvents, newEvent]);
      setSelectedDateTime(null);
      setSelectedWorkout('');
      setShowInfoBox(false);
    }
  };

  const closeInfoBox = () => {
    setSelectedDateTime(null);
    setSelectedWorkout('');
    setShowInfoBox(false);
  };

  const renderTileContent = ({ date }) => {
    const eventsForDate = scheduledEvents.filter(
      (event) =>
        event.dateTime.toDateString() === date.toDateString()
    );

    return (
      <div className="event-marker">
        {eventsForDate.map((event, index) => (
          <div key={index}>
            <p>{event.dateTime.toLocaleTimeString()}</p>
            <p>{event.workout}</p>
          </div>
        ))}
      </div>
    );
  };
  const customTileClassName = ({ date, view }) => {
    if (view === 'month') {
      return 'custom-tile';
    }
    return null;
  };


  const generateTimeOptions = () => {
    const options = [];
    const startTime = new Date();
    startTime.setHours(8, 0, 0); // Set start time to 8:00 AM

    const endTime = new Date();
    endTime.setHours(23, 0, 0); // Set end time to 11:00 PM

    const timeIncrement = 30; // Set time interval to 30 minutes

    let currentTime = new Date(startTime);

    while (currentTime <= endTime) {
      const timeString = currentTime.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
      options.push(
        <option key={timeString} value={timeString}>
          {timeString}
        </option>
      );
      currentTime.setMinutes(currentTime.getMinutes() + timeIncrement);
    }

    return options;
  };

  return (
    
      <div className="container">
      <div className="item" style={{backgroundColor: '#e66465'}}>
        <h1 style={{color: 'white'}}>Select a Date</h1>
        <div className="calendar-container">
        <Calendar
          value={selectedDateTime}
          onChange={handleDateTimeChange}
          minDetail="month"
          tileContent={renderTileContent}
          tileClassName={customTileClassName}
        />
      </div>
      </div>
      <div className="item">
      <br></br>
        <br></br>
        <br></br>
        <br></br>
      <div className="form-container">
        <div className="form-row">
          <label>Time:</label>
          <select
            value={selectedDateTime ? selectedDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
            onChange={handleTimeChange}
          >
            <option value="">Select a time</option>
            {generateTimeOptions()}
          </select>
        </div>
        <div className="form-row">
          <label>Workout:</label>
          <input
            type="text"
            value={selectedWorkout}
            onChange={handleWorkoutChange}
          />
        </div>
        <div className="button-container">
          <button onClick={scheduleEvent}>Schedule</button>
        </div>
      </div>
      {showInfoBox && (
        <div className="info-box">
          <h2 style={{margin: 0}}>Information</h2>
          <p style={{margin: 0}}>Date and Time: {selectedDateTime && selectedDateTime.toLocaleString()}</p>
          <p style={{margin: 0}}>Workout: {selectedWorkout}</p>
          <button onClick={closeInfoBox}>Close</button>
        </div>
      )}
      </div>
    </div>
  );
};

export default FitnessCalendar;
