import React, { useState } from 'react';
import NutritionSearch from './NutritionSearch';
import clean from './Images/cleanLean.jpg';
import musclemaximizer from './Images/musclemaximizer.jpg';
import keto from './Images/keto.jpg';
import protein from './Images/protein.jpg';
import fit from './Images/fit.jpg';
import paleo from './Images/paleo.jpg';
import loss from './Images/loss.jpg';
import vegetarian from './Images/vegetarian.png';
import Whole from './Images/Whole30.jpg';
import Mediterranean from './Images/Mediterranean.jpg';
import './Nutrition.css';  
const NutritionPage = () => {
    const dietPlans = [
        {
          name: 'Clean & Lean',
          fitnessGoal: 'weight-loss',
          dietaryRestriction: 'vegan',
          image: clean,
          description: 'A plant-based diet plan focused on clean eating to support weight loss goals.',
        },
        {
          name: 'Muscle Maximizer',
          fitnessGoal: 'muscle-gain',
          dietaryRestriction: 'omnivore',
          image: musclemaximizer,
          description: 'A balanced diet plan designed to maximize muscle growth and strength gains.',
        },
        {
          name: 'Keto Fuel',
          fitnessGoal: 'weight-loss',
          dietaryRestriction: 'ketogenic',
          image: keto,
          description: 'A high-fat, low-carb diet plan that promotes fat burning and ketosis.',
        },
        {
          name: 'Power Protein',
          fitnessGoal: 'muscle-gain',
          dietaryRestriction: 'omnivore',
          image: protein,
          description: 'A protein-rich diet plan to fuel muscle growth, repair, and recovery.',
        },
        {
          name: 'Flexi Fit',
          fitnessGoal: 'weight-loss',
          dietaryRestriction: 'flexitarian',
          image: fit,
          description: 'A flexible eating plan that combines plant-based meals with occasional lean proteins.',
        },
        {
          name: 'Paleo Performance',
          fitnessGoal: 'muscle-gain',
          dietaryRestriction: 'paleo',
          image: paleo,
          description: 'A diet plan based on the principles of the Paleolithic era, emphasizing whole foods and natural ingredients.',
        },
        {
          name: 'Balance Boost',
          fitnessGoal: 'weight-loss',
          dietaryRestriction: 'omnivore',
          image: loss,
          description: 'A well-balanced diet plan to support weight loss while maintaining overall health and nutrition.',
        },
        {
          name: 'Veggie Vitality',
          fitnessGoal: 'muscle-gain',
          dietaryRestriction: 'vegetarian',
          image: vegetarian,
          description: 'A vegetarian diet plan packed with plant-based protein sources and nutrient-dense foods.',
        },
        {
          name: 'Whole30 Reset',
          fitnessGoal: 'weight-loss',
          dietaryRestriction: 'whole30',
          image: Whole,
          description: 'A 30-day program focused on whole foods, eliminating common allergens and promoting a reset of eating habits.',
        },
        {
          name: 'Mediterranean Magic',
          fitnessGoal: 'muscle-gain',
          dietaryRestriction: 'omnivore',
          image: Mediterranean,
          description: 'A diet plan inspired by Mediterranean cuisine, rich in fruits, vegetables, whole grains, and healthy fats.',
        },
      ];

    const [filteredPlans, setFilteredPlans] = useState(dietPlans);

  const handleSearch = (filteredPlans) => {
    setFilteredPlans(filteredPlans);
  };

  const DietPlanCard = ({ plan }) => {
    return (
      <div className="card3">
        <img src={plan.image} alt={plan.name} className="card-image"/>
        <h3>{plan.name}</h3>
        <p>{plan.description}</p>
      </div>
    );
  };

  return (
    <div>
      <h1 className="nutrition-title">Nutrition</h1>
      <div className="nutrition-container">
        <div className="search-container">
          <NutritionSearch dietPlans={dietPlans} onSearch={handleSearch} />
        </div>
        <div className="filtered-plans">
            <h2 style={{ marginTop: 0 , justifyContent: 'left' , paddingLeft: 70}}>Matching Diet Plans</h2>
          <div className="card-container">
            {filteredPlans.length > 0 ? (
              filteredPlans.map((plan) => (
                <DietPlanCard key={plan.name} plan={plan} />
              ))
            ) : (
              <p>No matching diet plans found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default NutritionPage;
