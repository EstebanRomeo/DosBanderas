import React from 'react';

const DetalleProducto = ({ producto, onClose }) => {
  if (!producto) {
    return null; // No mostrar nada si no hay producto seleccionado
  }

  return (
    <div className="detalle-producto">
      <div className="detalle-header">
        <h2>{producto.nombre}</h2>
        <button onClick={onClose}>Cerrar</button>
      </div>
      <div className="detalle-body">
        <img src={producto.imagen} alt={producto.nombre} />
        <p>{producto.descripcionDetallada}</p>
        {/* Agrega más información detallada según tus necesidades */}
      </div>
    </div>
  );
};

export default DetalleProducto;
