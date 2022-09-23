import './style.css';
import Button from '../Button';
import Card from '../Card';
import ImageDefault from '../ImageDefault';
import React, { useState } from 'react';

const List = ({ listTransactions, setListTransactions }) => {
  const [itemFilter, setItemFilter] = useState('Todos');
  const [listFilter, setListFilter] = useState([]);

  const check = (value) => {
    setItemFilter(value);

    if (value === 'Entrada') {
      const entry = listTransactions.filter((elem) => elem.type === value);
      setListFilter(entry);
    } else if (value === 'Despesa') {
      const out = listTransactions.filter((elem) => elem.type === value);
      setListFilter(out);
    }
  };

  const removeItem = (item) => {
    setListTransactions((list) => list.filter((elem) => elem !== item));
    setListFilter((list) => list.filter((elem) => elem !== item));
  };

  const renderList = () => {
    if (itemFilter === 'Todos' && !listTransactions.length) {
      return (
        <>
          <h2>Você ainda não possui nenhum lançamento</h2>
          <ImageDefault />
        </>
      );
    } else if (itemFilter === 'Todos') {
      return listTransactions.map((elem, index) => (
        <Card
          removeItem={removeItem}
          key={index}
          transaction={elem}
          cardClass={elem.type === 'Entrada' ? 'card entry' : 'card'}
        />
      ));
    } else if (itemFilter === 'Entrada' && listFilter.length) {
      return listFilter.map((elem, index) => (
        <Card
          removeItem={removeItem}
          key={index}
          transaction={elem}
          cardClass={elem.type === 'Entrada' ? 'card entry' : 'card'}
        />
      ));
    } else if (itemFilter === 'Despesa' && listFilter.length) {
      return listFilter.map((elem, index) => (
        <Card
          removeItem={removeItem}
          key={index}
          transaction={elem}
          cardClass={elem.type === 'Entrada' ? 'card entry' : 'card'}
        />
      ));
    } else {
      return (
        <>
          <h2>Você ainda não possui nenhuma {itemFilter.toLowerCase()}</h2>
          <ImageDefault />
        </>
      );
    }
  };

  return (
    <section className="section">
      <div className="section__summary">
        <h3>Resumo financeiro</h3>
        <div className="summary__btns">
          <Button
            text="Todos"
            btnClass={
              itemFilter === 'Todos' ? 'btn-default' : 'btn-default btn-grey'
            }
            handleClick={() => check('Todos')}
          />
          <Button
            text="Entradas"
            btnClass={
              itemFilter === 'Entrada' ? 'btn-default' : 'btn-default btn-grey'
            }
            handleClick={() => {
              check('Entrada');
            }}
          />
          <Button
            text="Despesas"
            btnClass={
              itemFilter === 'Despesa' ? 'btn-default' : 'btn-default btn-grey'
            }
            handleClick={() => {
              check('Despesa');
            }}
          />
        </div>
      </div>

      <ul>{renderList()}</ul>
    </section>
  );
};

export default List;
