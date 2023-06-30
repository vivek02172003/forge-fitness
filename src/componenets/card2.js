
import React from 'react';
import './card.css';

const Card = ({ title, price, description, buttonText }) => {
  const descriptionItems = description.map((item, index) => (
    <li key={index}>{item}</li>
  ));
  return (
    <div className="card2">
      <h2 className="card-title">{title}</h2>
      <h3 className="card-price">{price}</h3>
      <button className="card-button">{buttonText}</button>
      <p className="card-description">{descriptionItems}</p>
    </div>
  );
};

export default Card;
