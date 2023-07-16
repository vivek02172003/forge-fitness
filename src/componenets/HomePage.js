import React from 'react';
import './HomePage.css';  
import GoogleFormButton from './GoogleFormButton';
import { Link, useLocation } from 'react-router-dom';
import { initReactI18next, useTranslation } from 'react-i18next';

function HomePage() {
  const { t } = useTranslation();
    return (
        <div className="home-page">
          <div className="background-image-home"></div>
          <div className="content">
            <h1 className="site-title">Forge Fitness</h1>
            <Link to="membership"><button className="get-started-button">{t("signUpToday")}</button></Link>
          </div>
          <GoogleFormButton />
        </div>
      );
}


export default HomePage;