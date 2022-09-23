import React from 'react';
import './style.css';
import trash from '../../assets/trash.svg';

const Card = ({ transaction, cardClass, removeItem }) => {
  return (
    <li className={cardClass}>
      <div className="card__info">
        <h3>{transaction.description}</h3>
        <div className="info__div">
          <span>R$ {transaction.value.toFixed(2)}</span>
          <button type="button" onClick={() => removeItem(transaction)}>
            <img src={trash} alt="Lixeira" />
          </button>
        </div>
      </div>
      <span>{transaction.type}</span>
    </li>
  );
};

export default Card;
