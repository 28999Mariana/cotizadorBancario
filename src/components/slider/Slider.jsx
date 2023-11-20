import React from 'react';
import Card from '../card/Card'; 
import './slider.css';

const Slider = () => {
  const cardData = [
    {
      imageName: 'hogar.jpg', 
      modelName: 'HOME',
      
    },
    {
        imageName: 'auto.jpg', 
        modelName: 'CAR',
        
    },
    {
        imageName: 'celular.jpg',
        modelName: 'CELL',
       
    },
    {
        imageName: 'accidente.jpg', 
        modelName: 'ACCIDENT',
        
    },
    {
        imageName: 'tarjetas.jpg', 
        modelName: 'CARD',
        
    },
    {
        imageName: 'vida.jpg', 
        modelName: 'LIFE',
        
    },
    
  ];

  return (
    <div className="slider-container">
    <div className="void">
      <div className="crop">
        <ul id="card-list" style={{ '--count': cardData.length }}>
          {cardData.map((data, index) => (
            <li key={index}>
              <Card {...data} />
            </li>
          ))}
        </ul>
        <div className="last-circle"></div>
        <div className="second-circle"></div>
      </div>
      <div className="mask"></div>
      <div className="center-circle"></div>
    </div>
    </div>
  );
};

export default Slider;