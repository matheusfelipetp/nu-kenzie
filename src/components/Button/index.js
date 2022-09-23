import React from 'react';
import './style.css';

const Button = ({ text, btnClass, handleClick }) => {
  return (
    <button className={btnClass} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
