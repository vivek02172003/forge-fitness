
import React from 'react';
import './card.css';
import { Link, useLocation } from 'react-router-dom';

const Card = ({ title, price, description, buttonText }) => {
  const location = useLocation();
  const descriptionItems = description.map((item, index) => (
    <li key={index}>{item}</li>
  ));
  return (
    <div className="card2">
      <h2 className="card-title">{title}</h2>
      <h3 className="card-price">{price}</h3>
      <Link to="/checkout"><button className="card-button">{buttonText}</button></Link>
      <p className="card-description">{descriptionItems}</p>
    </div>
  );
};

export default Card;
