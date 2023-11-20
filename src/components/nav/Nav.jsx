import React, { useState } from 'react';
import './nav.css';
{/*import LoanQuote from '../loan/LoanQuote'; // No puedo importar el componente "LoanQuote"*/}

const Nav = ({ nombre }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header>
      <h1 className='tituloPrincipal'>{nombre}</h1>
      <div className='iconoMenu' onClick={toggleMenu}>
        <div className={`linea ${menuVisible ? 'abierta' : ''}`}></div>
        <div className={`linea ${menuVisible ? 'abierta' : ''}`}></div>
        <div className={`linea ${menuVisible ? 'abierta' : ''}`}></div>
      </div>
      {menuVisible && (
        <div className='iconoMenu' onclick={toggleMenu}>
          <ul className='nav'>
            <li className='navItem'><a href="#">Home</a></li>
            <li className='navItem'><a href="#">About Us</a></li>
            <li className='navItem'><a href="#">Services</a></li>
            <li className='navItem'><a href="#">Loan Quote</a>
              
              {/*<LoanQuote />*/}
            </li>
            <li className='navItem'><a href="#">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;