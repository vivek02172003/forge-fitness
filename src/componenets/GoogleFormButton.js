import React from 'react';
import './GoogleFormButton.css';
import { initReactI18next, useTranslation } from 'react-i18next';

const GoogleFormButton = ({ selectedLanguage }) => {
  const buttonText = selectedLanguage === 'fr' ? 'Contacter un formateur' : 'Contact a Trainer';
  const { t } = useTranslation();
  return (
    <div className="contact-trainer-button">
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfW6H5EHeEv-X6vd3M6G55RvAMXhbtInZ9lhVHUtpzqHSO-dA/viewform?usp=sf_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("googleFormButton")}
      </a>
    </div>
  );
};

export default GoogleFormButton;
