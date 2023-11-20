import React from 'react';
import './aboutB.css'

const ServiceItem = ({ titulo, frase, icono }) => {
  return (
    <div className="service-item">
      <i className={`fas fa-${icono} fa-3x`} />
      <h3>{titulo}</h3>
      <p>{frase}</p>
    </div>
  );
};

const AboutB = () => {
  const servicios = [
    { titulo: "Financial Empowerment Hub", frase: "Unlock your dreams with our tailored loan solutions. Empowering your financial journey, one step at a time.", icono: "key" },
    { titulo: "Secure Funding Partner", frase: "Your trusted ally in financial growth. Secure the funds you need with our reliable loan options.", icono: "lock" },
    { titulo: "SwiftLoan Innovations", frase: "Experience financial agility with our innovative loan services. Swift, seamless, and tailored just for you.", icono: "arrow-up" },
    { titulo: "Prime Lending Solutions", frase: "Elevate your aspirations with prime lending options. We redefine banking for a brighter financial future.", icono: "star" },
  ];

  return (
    <section className="services-section">
      <div className="container-aboutB">
        <h2></h2>
        <div className="services-grid">
          {servicios.map((servicio, index) => (
            <ServiceItem key={index} titulo={servicio.titulo} frase={servicio.frase} icono={servicio.icono} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutB;