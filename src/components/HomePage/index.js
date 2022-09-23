import React from 'react';
import logoLight from '../../assets/logo-light.svg';
import imgHome from '../../assets/home.svg';
import './style.css';
import Button from '../Button';

const HomePage = ({ handleClick }) => {
  return (
    <main className="main">
      <div className="main__content container">
        <div className="main__info">
          <img className="logo" src={logoLight} alt="Logo NuKenzie" />
          <h1>Centralize o controle das suas finanças</h1>
          <p>de forma rápida e segura</p>
          <Button
            text="Iniciar"
            btnClass="btn-default"
            handleClick={handleClick}
          />
        </div>
        <img className="main__img" src={imgHome} alt="Ilustração Home Page" />
      </div>
    </main>
  );
};

export default HomePage;
