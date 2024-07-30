import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar1 from './componentes/Navbar/Navbar1';
import Footer from './componentes/Footer/Footer';
import Inicio from './componentes/Inicio';
import Productos from "./componentes/Productos"
import Nosotros from "./Nosotros"
import Contacto from "./Contacto"
import Cart from './componentes/Cart/Cart';
import CartProvider from './componentes/Context/CartContext';

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <div className="App">
        <Navbar1 />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
