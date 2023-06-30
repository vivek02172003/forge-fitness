import React from 'react';
import './card.css';

const Card = ({ imageSrc, title, description, buttonText }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt="Card Image" className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <button className="card-button">{buttonText}</button>
    </div>
  );
};

export default Card;