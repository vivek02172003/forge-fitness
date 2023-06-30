import React from 'react';
import './Classes.css';  
import Card from './card';
import cardio from './Images/cardio.jpg';
import strength from './Images/strength.jpg';
import cycling from './Images/cycling.jpg';
import dance from './Images/dance.jpg';
import GoogleFormButton from './GoogleFormButton';
function Classes() {
    return (
        <div className="classes-page">
          <div className="background-image"></div>
          <div className="content">
          <h1 className="classes-title">CLASSES</h1>
          <div className="container">
          <div className="section">
            <Card
              imageSrc={cardio}
              title="Cardio"
              description="Revitalize your fitness with our Cardio Class! Join us for a dynamic workout led by motivating instructors, suitable for all levels (beginner or expert). Elevate your endurance and burn calories today!"
              buttonText="Learn More"
            />
          </div>
          <div className="section">
            <Card
              imageSrc={strength}
              title="Strength"
              description="Build strength and reach your fitness goals with our empowering Strength Class! Led by expert trainers, this dynamic class focuses on resistance training. Join us and unlock your full potential!"
              buttonText="Learn More"
            />
          </div>
          <div className="section">
            <Card
              imageSrc={cycling}
              title="Cycling"
              description="Experience the thrill of our Cycling Class! Led by passionate instructors, this high-energy class combines intense cardio with exhilarating music. Join us and pedal your way to a stronger, fitter you!"
              buttonText="Learn More"
            />
          </div>
          <div className="section">
            <Card
              imageSrc={dance}
              title="Dance"
              description="Get your groove on with our Dance Class! Led by talented instructors, this energetic class combines fun choreography with upbeat music. Join us and let loose on the dance floor!"
              buttonText="Learn More"
            />
          </div>
        </div>
        </div>
        <GoogleFormButton />
        </div>
      );
}


export default Classes;