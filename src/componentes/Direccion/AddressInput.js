import React, { useState } from 'react';
import EstilosDireccion from "./EstilosDireccion.css"

const AddressInput = ({ onAddressSubmit }) => {
  const [address, setAddress] = useState('');
  const [numero, setNumero] = useState('');
  const [departamento, setDepartamento] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // En lugar de pasar solo la dirección, ahora pasamos un objeto con todos los campos
    onAddressSubmit({ address, numero, departamento });
  };

  return (
    <div className='containerForm'>
        <div className='formDirec'>
        <form onSubmit={handleSubmit}>
        <label>
            Dirección:
            <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            />
        </label>
        <br/>
        <label>
            Número:
            <input
            type="text"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            />
        </label>
        <br/>
        <label>
            Departamento:
            <input
            type="text"
            value={departamento}
            onChange={(e) => setDepartamento(e.target.value)}
            />
        </label>
        <br />
        <button type="submit">Enviar dirección</button>
        </form>
        </div>
    </div>
  );
};

export default AddressInput;