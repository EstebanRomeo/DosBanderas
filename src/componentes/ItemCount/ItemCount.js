import React, { useEffect, useState } from "react";
import EstilosItemCount from "./EstilosItemCount.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));

  const decrease = () => {
    setCount(count - 1);
  };

  const increase = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  useEffect(() => {
    onAdd(count); // Actualizar el estado de la cantidad en el componente principal
  }, [count, onAdd]);

  return (
    <div className="counter">
      <button disabled={count <= 1} onClick={decrease} className="button">
        -
      </button>
      <span><h2>{count}</h2></span>
      <button disabled={count >= stock} onClick={increase} className="button">
        +
      </button>
      <div>
      </div>
    </div>
  );
};

export default ItemCount;
