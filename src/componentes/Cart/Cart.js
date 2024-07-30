import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';
import EstilosCart from "./EstilosCart.css"
import AddressInput from '../Direccion/AddressInput';
import DisplayAddress from '../Direccion/DisplayAddress';
import Logotipox from "../img/Logotipox.png"

const Cart = () => {
  const { cart, totalPrice } = useCartContext();
  const [submittedAddress, setSubmittedAddress] = useState('');

  const handleAddressSubmit = (address) => {
    setSubmittedAddress(address);
  };
 
 
  if (!cart || cart.length === 0) {
    return (
      <div className='cartContainer'>
        <div className='nElement'>
          <h1>NO HAY PRODUCTOS EN TU PEDIDO</h1>
          <Link to="/">VOLVER</Link>
        </div>
      </div>
    );
  }

  return (
    <div className='containerCarrito'>
      <div className='logoCart'>
        <div>
      <img src={Logotipox}></img>
      </div>
      </div>
      <div className='cartContainerFinal'>
        <div>
        <h1>TU PEDIDO</h1>
        {cart.map((product) => (
          <ItemCart key={product.id} product={product} />
        ))}
        </div>
        <div className='resumenCart'>
          <div className='tituloResumen'>
          <h6>RESUMEN DE TU PEDIDO</h6>
          <hr></hr>
          </div>
          <p>SubTotal: ${totalPrice()}</p>
          <p>Envio: $0</p>
          {submittedAddress && <DisplayAddress address={submittedAddress} />}
          <p className='info'>El pago se hará efectivo en el momento del envío, excepto en los casos de los productos DIY cuyo importe total se cargará en el momento de cursar el pedido.</p>
        <h3 className='total'>Total: $ {totalPrice()}</h3>
    
        <Link to="/checkout">
          {' '}
          <button className="btn-total">Finalizar Compra</button>
        </Link>
        </div>
      </div>
      <div className='destino'>
        <h2>INFORMACION DE DESTINO</h2>
        <div>
      <AddressInput onAddressSubmit={handleAddressSubmit} />
      
    </div>
      </div>
    </div>
  );
};

export default Cart;
