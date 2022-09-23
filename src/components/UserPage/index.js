import React from 'react';
import Form from '../Form';
import Header from '../Header';
import List from '../List';
import TotalMoney from '../TotalMoney';
import './style.css';

const UserPage = ({ listTransactions, setListTransactions, handleClick }) => {
  return (
    <>
      <Header handleClick={handleClick} />
      <div className="content container">
        <div>
          <Form setListTransactions={setListTransactions} />
          <TotalMoney listTransactions={listTransactions} />
        </div>
        <List
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      </div>
    </>
  );
};

export default UserPage;
