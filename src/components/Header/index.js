import React from 'react';
import Button from '../Button';
import logoDark from '../../assets/logo-dark.svg';
import './style.css';

const Header = ({ handleClick }) => {
  return (
    <header className="header">
      <div className="header__content container">
        <img src={logoDark} alt="Logo NuKenzie" />
        <Button
          text="Início"
          btnClass="btn-default btn-grey"
          handleClick={handleClick}
        />
      </div>
    </header>
  );
};

export default Header;
