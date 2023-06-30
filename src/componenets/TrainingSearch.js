import React from 'react';

const TrainingSearch = ({ muscleGroups, onChange, selectedMuscleGroups }) => {
  return (
    <div className="training-search">
      <h2 class="search-title" style={{paddingRight:10}}>Select Muscle Groups</h2>
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
