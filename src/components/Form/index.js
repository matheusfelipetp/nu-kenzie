import React from 'react';
import './style.css';
import Button from '../Button';
import { useState } from 'react';

const Form = ({ setListTransactions }) => {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [entrance, setEntrance] = useState('Entrada');

  const transaction = {
    description: description,
    value: entrance === 'Despesa' ? Number(value * -1) : Number(value),
    type: entrance,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setListTransactions((previous) => [...previous, transaction]);

    setDescription('');
    setValue('');
    setEntrance('Entrada');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__description">
        <label htmlFor="description">Descrição</label>
        <input
          type="text"
          id="description"
          value={description}
          placeholder="Digite aqui sua descrição"
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <span>Ex: Compra de roupas</span>
      </div>
      <div className="form__infos">
        <div className="info__value">
          <label htmlFor="valueInfo">Valor</label>
          <input
            type="number"
            id="valueInfo"
            value={value}
            placeholder="1"
            onChange={(e) => setValue(e.target.value)}
            required
          />
          <span>R$</span>
        </div>
        <div>
          <label htmlFor="typeValue">Tipo de valor</label>
          <div className="select">
            <select
              id="typeValue"
              onChange={(e) => setEntrance(e.target.value)}
              value={entrance}
              required
            >
              <option value="Entrada">Entrada</option>
              <option value="Despesa">Despesa</option>
            </select>
          </div>
        </div>
      </div>
      <Button type="submit" text="Inserir valor" btnClass="btn-default" />
    </form>
  );
};

export default Form;
