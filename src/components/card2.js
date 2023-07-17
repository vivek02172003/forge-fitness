
import React from 'react';
import './card.css';
import { Link, useLocation } from 'react-router-dom';

const Card = ({ title, price, description, buttonText }) => {
  const location = useLocation();
  return (
    <div className="card2">
      <h2 className="card-title">{title}</h2>
      <h3 className="card-price">{price}</h3>
      <Link to="/checkout"><button className="card-button">{buttonText}</button></Link>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
