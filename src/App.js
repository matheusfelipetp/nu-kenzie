import React from 'react';
import HomePage from './components/HomePage';
import UserPage from './components/UserPage';
import { useState } from 'react';

const App = () => {
  const [page, setPage] = useState(false);
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <>
      {page ? (
        <UserPage
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
          handleClick={() => setPage(!page)}
        />
      ) : (
        <HomePage handleClick={() => setPage(!page)} />
      )}
    </>
  );
};

export default App;
