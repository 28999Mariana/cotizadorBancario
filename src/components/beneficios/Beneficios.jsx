import React, { useState, useEffect } from 'react';
import './beneficios.css';

const Beneficios = () => {
  const [datosBeneficios, setDatosBeneficios] = useState(null);

  useEffect(() => {
    fetch('beneficios.json')
      .then((res) => res.json())
      .then((data) => setDatosBeneficios(data))
      .catch(error => console.error("Error fetching beneficios data:", error));
  }, []);

  if (!datosBeneficios) {
    return <h1>cargando...</h1>;
  }

  const { titulo, frase, beneficios } = datosBeneficios;

  return (
    <section className="beneficios">
      <h2>{titulo}</h2>
      <p>{frase}</p>

      <div className="beneficios-images">
        {beneficios.map((beneficio) => (
          <div className="beneficio-item" key={beneficio.id}>
            <img src={beneficio.imagen} alt={`Beneficio ${beneficio.id}`} />
            <button>{beneficio.textoBoton}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Beneficios;