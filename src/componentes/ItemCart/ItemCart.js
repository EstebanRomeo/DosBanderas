import React from 'react';
import { useCartContext } from '../Context/CartContext';
import EstilosCart from "../Cart/EstilosCart.css";

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
      <div className='containerCart'>
        <hr></hr>
      
      <div className="discount-label5">30% OFF</div>
                    <div className="card-content5">
                        <div className="text-content5">
                          <h3 className="card-title5">{product.nombre}</h3>
                          <p className="card-description5">{product.ingredientes}</p>
                            <div className="price5">
                            <span className="new-price56" id='priceCart'>Cantidad: {product.quantity}</span>
                              <span className="new-price5" id='priceCart'>${product.precio}</span>
                              <span className="old-price5" id='priceCart'>$13.000</span>
                              <span className="new-price5" id='priceCart'><p>Subtotal: ${product.quantity * product.precio}</p></span>
                            </div>
                            <button onClick={() => removeProduct(product.id)} className='button22'>  <svg viewBox="0 0 448 512" class="svgIcon22"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg></button>
                        </div>
                        <div className="imgProdCar">
                          <img src={product.imagen} alt={`Producto ${product.id}`} />
                        </div>
                </div>
      </div>
    );
};

export default ItemCart;
