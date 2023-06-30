import React from 'react';
import './GoogleFormButton.css';

const GoogleFormButton = () => {
  return (
    <div className="contact-trainer-button">
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfW6H5EHeEv-X6vd3M6G55RvAMXhbtInZ9lhVHUtpzqHSO-dA/viewform?usp=sf_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact a Trainer
      </a>
    </div>
  );
};

export default GoogleFormButton;
