import React from 'react';
import './card.css';

const Card = ({ imageName, modelName, }) => {
  return (
    <div className="card">
      <a href="#">
        <img src={imageName} alt="Model" /> {/* agrego la img al slider */}
        <span className="model-name">{modelName}</span>
      </a>
    </div>
  );
};

export default Card;