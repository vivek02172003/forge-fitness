import React from 'react';
import './HomePage.css';  
import GoogleFormButton from './GoogleFormButton';

function HomePage() {
    return (
        <div className="home-page">
          <div className="background-image"></div>
          <div className="content">
            <h1 className="site-title">Fitness Forge</h1>
            <button className="get-started-button">Get Started Today</button>
          </div>
          <GoogleFormButton />
        </div>
      );
}


export default HomePage;