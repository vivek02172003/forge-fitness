import React, { Suspense, useTransition } from 'react';
import './NavBar.css';
import logo from './Images/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function NavBar() {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <Suspense fallback="loading...">
    <nav>
      <div className="logo">
        <Link to="/home">
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/classes">
            <button className="nav-button">{t('navClass')}</button>
          </Link>
        </li>
        <li>
          <Link to="/membership">
            <button className="nav-button">{t('navMembership')}</button>
          </Link>
        </li>
        <li>
          <Link to="/nutrition">
            <button className="nav-button">{t('navNutrition')}</button>
          </Link>
        </li>
        <li>
          <Link to="/train">
            <button className="nav-button">{t('navTrainingHelp')}</button>
          </Link>
        </li>
        <li>
          <Link to="/fitness">
            <button className="nav-button">{t('navFitnessPlan')}</button>
          </Link>
        </li>
      </ul>
    </nav>
    </Suspense>
  );
}

export default NavBar;
