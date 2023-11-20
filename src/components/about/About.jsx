import React, { useState } from 'react';
import './about.css';

const About = ({ descripcion }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  const images = [
    'portada.jpg',
    'portada2.jpg',
    'portada3.jpg',
    'portada4.jpg',
  ];

  const handleDotClick = (index) => {
    setActiveIndex(index);
    setTranslateValue(index * -100); 
  };

  return (
    <section className="about">
      <h2>About Us</h2>
      <p>{descripcion}</p>

      <div className="slider-container">
        <div className="slider" style={{ transform: `translateX(${translateValue}%)` }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={index === activeIndex ? 'active' : ''}
            />
          ))}
        </div>
      </div>

      <div className="controls">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === activeIndex ? 'active' : ''}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default About;