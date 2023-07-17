import React, { useState } from 'react';
import './Nutrition.css';  

const NutritionSearch = ({ dietPlans, onSearch }) => {
  const [selectedFitnessGoals, setSelectedFitnessGoals] = useState([]);
  const [selectedDietaryRestrictions, setSelectedDietaryRestrictions] = useState([]);

  const handleFitnessGoalChange = (event) => {
    const { value } = event.target;
    if (selectedFitnessGoals.includes(value)) {
      setSelectedFitnessGoals(selectedFitnessGoals.filter((goal) => goal !== value));
    } else {
      setSelectedFitnessGoals([...selectedFitnessGoals, value]);
    }
  };

  const handleDietaryRestrictionChange = (event) => {
    const { value } = event.target;
    if (selectedDietaryRestrictions.includes(value)) {
      setSelectedDietaryRestrictions(selectedDietaryRestrictions.filter((restriction) => restriction !== value));
    } else {
      setSelectedDietaryRestrictions([...selectedDietaryRestrictions, value]);
    }
  };

  const filterDietPlans = () => {
    const filteredPlans = dietPlans.filter((plan) => {
      const fitnessGoalMatch = selectedFitnessGoals.length === 0 || selectedFitnessGoals.includes(plan.fitnessGoal);
      const dietaryRestrictionMatch = selectedDietaryRestrictions.length === 0 || selectedDietaryRestrictions.includes(plan.dietaryRestriction);
      return fitnessGoalMatch && dietaryRestrictionMatch;
    });

    onSearch(filteredPlans);
  };

  return (
    <div className="nutrition-search">
      <div>
        <h2 class="search-title" style={{ marginTop: 30 }}>Fitness Goal</h2>
        <div class="search-option">
          <label>
            <input
              type="checkbox"
              value="weight-loss"
              checked={selectedFitnessGoals.includes("weight-loss")}
              onChange={handleFitnessGoalChange}
            />
            Weight Loss
          </label>
        </div>
        <div class="search-option" style={{ paddingBottom: 20 }}>
          <label>
            <input
              type="checkbox"
              value="muscle-gain"
              checked={selectedFitnessGoals.includes("muscle-gain")}
              onChange={handleFitnessGoalChange}
            />
            Muscle Gain
          </label>
        </div>
      </div>
      <div>
        <h2 class="search-title">Dietary Restriction</h2>
        <div class="search-option">
        <label>
            <input
            type="checkbox"
            value="vegan"
            checked={selectedDietaryRestrictions.includes("vegan")}
            onChange={handleDietaryRestrictionChange}
            />
            Vegan
        </label>
        </div>
        <div class="search-option">
        <label>
            <input
            type="checkbox"
            value="vegetarian"
            checked={selectedDietaryRestrictions.includes("vegetarian")}
            onChange={handleDietaryRestrictionChange}
            />
            Vegetarian
        </label>
        </div>
        <div class="search-option">
        <label>
            <input
            type="checkbox"
            value="omnivore"
            checked={selectedDietaryRestrictions.includes("omnivore")}
            onChange={handleDietaryRestrictionChange}
            />
            Omnivore
        </label>
        </div>
        <div class="search-option">
        <label>
            <input
            type="checkbox"
            value="whole30"
            checked={selectedDietaryRestrictions.includes("whole30")}
            onChange={handleDietaryRestrictionChange}
            />
            Whole30
        </label>
        </div>
        <div class="search-option">
        <label>
            <input
            type="checkbox"
            value="paleo"
            checked={selectedDietaryRestrictions.includes("paleo")}
            onChange={handleDietaryRestrictionChange}
            />
            Paleo
        </label>
        </div>
        <div class="search-option">
        <label>
            <input
            type="checkbox"
            value="flexitarian"
            checked={selectedDietaryRestrictions.includes("flexitarian")}
            onChange={handleDietaryRestrictionChange}
            />
            Flexitarian
        </label>
        </div>
        <div class="search-option" style={{ paddingBottom: 20 }}>
        <label>
            <input
            type="checkbox"
            value="ketogenic"
            checked={selectedDietaryRestrictions.includes("ketogenic")}
            onChange={handleDietaryRestrictionChange}
            />
            Ketogenic
        </label>
        </div>

        {/* Add more checkbox options as needed */}
      </div>
      <button class="nutrition-button" onClick={filterDietPlans}>Search</button>
    </div>
  );
};

export default NutritionSearch;
