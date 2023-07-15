import React from 'react';
import './TrainingHelp.css'

const TrainingSearch = ({ muscleGroups, onChange, selectedMuscleGroups }) => {
  return (
    <div className="training-search">
      <h2 class="search-title">Select Muscle Groups</h2>
      {muscleGroups.map((group) => (
        <div key={group}>
          <label>
            <input
              type="checkbox"
              value={group}
              checked={selectedMuscleGroups.includes(group)}
              onChange={onChange}
            />
            {group}
          </label>
        </div>
      ))}
    </div>
  );
};



export default TrainingSearch;
