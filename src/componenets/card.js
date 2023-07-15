import React from 'react';
import './card.css';
import { Link, useLocation } from 'react-router-dom';

const Card = ({ imageSrc, title, description, buttonText, altText}) => {
  const location = useLocation();
  return (
    <div className="card">
      <img src={imageSrc} alt={altText} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <Link to="/checkout"><button className="card-button">{buttonText}</button></Link>
    </div>
  );
};

export default Card;