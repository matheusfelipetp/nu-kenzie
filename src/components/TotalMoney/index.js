import React from 'react';
import './style.css';

const TotalMoney = ({ listTransactions }) => {
  return (
    <div className="totalMoney">
      <div className="totalMoney__info">
        <h2>Valor total:</h2>
        <span>
          R${' '}
          {listTransactions
            .reduce((acc, act) => {
              return acc + act.value;
            }, 0)
            .toFixed(2)}
        </span>
      </div>
      <p>O valor se refere ao saldo</p>
    </div>
  );
};

export default TotalMoney;
