import React from "react";
import { useState } from 'react'

const Form = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setErrorMessage('');
    setSuccessMessage('');
    if (e.target.name === 'name') {
      setNombre(e.target.value);
    } else if (e.target.name === 'email') {
      setEmail(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.length <= 5) {
      setErrorMessage('Por favor, ingrese un nombre válido.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Por favor, ingrese un correo electrónico válido.');
      return;
    }

    setSuccessMessage(`Gracias ${nombre}, te contactaremos lo antes posible vía correo electrónico.`);
    setNombre('');
    setEmail('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre completo:
          <input
            type="text"
            name="name"
            value={nombre}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};

export default Form;


