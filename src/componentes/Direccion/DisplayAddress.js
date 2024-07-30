import React from 'react';

const DisplayAddress = ({ address }) => {
  return (
    <div>
      <p>Dirección: {address.address}, {address.numero}, {address.departamento}</p>
    </div>
  );
};

export default DisplayAddress;