import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const FitnessCalendar = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [selectedWorkout, setSelectedWorkout] = useState('');
  const [scheduledEvents, setScheduledEvents] = useState([]);
  const [showInfoBox, setShowInfoBox] = useState(false);
  const [validationError, setValidationError] = useState('');

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
      if (selectedDateTime) {
        const time = selectedDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const newDateTime = new Date(date);
        const [hours, minutes] = time.split(':');
        newDateTime.setHours(parseInt(hours, 10));
        newDateTime.setMinutes(parseInt(minutes, 10));
        setSelectedDateTime(newDateTime);
      } else {
        setSelectedDateTime(date);
      }
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
  
      if (newDateTime < selectedDateTime) {
        setValidationError('Please select a time after the selected date.');
        return;
      }
  
      setSelectedDateTime(newDateTime);
    }
    setValidationError('');
  };
  

  const handleWorkoutChange = (event) => {
    setSelectedWorkout(event.target.value);
  };

  const scheduleEvent = () => {
    if (!selectedDateTime) {
      setValidationError('Please select a date and time.');
      return;
    }

    if (!selectedWorkout) {
      setValidationError('Please enter a workout.');
      return;
    }

    const newEvent = {
      dateTime: selectedDateTime,
      workout: selectedWorkout,
    };
    setScheduledEvents([...scheduledEvents, newEvent]);
    setSelectedDateTime(null);
    setSelectedWorkout('');
    setShowInfoBox(false);
    setValidationError('');
  };

  const closeInfoBox = () => {
    setSelectedDateTime(null);
    setSelectedWorkout('');
    setShowInfoBox(false);
    setValidationError('');
  };

  const renderTileContent = ({ date }) => {
    const eventsForDate = scheduledEvents.filter(
      (event) => event.dateTime.toDateString() === date.toDateString()
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
      <div className="item" style={{ backgroundColor: '#e66465' }}>
        <div className="tooltip">
          <span className="tooltiptext">
            <FontAwesomeIcon icon={faInfoCircle} />
            Select a date
          </span>
          <h1>
            Calendar <FontAwesomeIcon icon={faInfoCircle} />
          </h1>
        </div>
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
        <br />
        <br />
        <br />
        <br />
        <div className="form-container">
          <h2>Schedule a Workout </h2>
          <div className="form-row">
            <label>Time:</label>
            <select
              value={
                selectedDateTime
                  ? selectedDateTime.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })
                  : ''
              }
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
            <button className="sbutton" onClick={scheduleEvent}>Schedule</button>
          </div>
          {validationError && <p className="error-message">{validationError}</p>}
        </div>
      </div>
      {showInfoBox && (
        <div className="info-box">
          <h2 style={{ margin: 0 }}>Workout Information</h2>
          <br></br>
          <br></br>
          <p style={{ margin: 0 }}>
            <strong>Date and Time:</strong> {selectedDateTime && selectedDateTime.toLocaleString()}
          </p>
          <br></br>
          <br></br>
          <strong><p style={{ margin: 0 }}>Workout: {selectedWorkout}</p></strong>
          <br></br>
          <br></br>
          <button className="sbutton" onClick={closeInfoBox}>Close</button>
        </div>
      )}
    </div>
  );
};

export default FitnessCalendar;
