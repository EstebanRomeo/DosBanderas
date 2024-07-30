import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import EstilosNav from "./EstilosNav.css";

function Navbar1() {
  return (
    <div className='containerNav1'>
      <div className='containerEnvio'>
        <p>ENVIO GRATIS A PARTIR DE $25.000</p>
      </div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='container'>
        <Navbar.Brand as={Link} to="/">
          <img src='https://www.exportadoresdecordoba.com/images_db/logos/120px/21063_logo.jpg' className='logo' alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">INICIO</Nav.Link>
            <Nav.Link as={Link} to="/productos">PRODUCTOS</Nav.Link>
            <Nav.Link as={Link} to="/nosotros">NOSOTROS</Nav.Link>
            <Nav.Link as={Link} to="/contacto">CONTACTO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div className='iconoCarrrito'>
            <Nav.Link as={Link} to="/carrito"><button data-quantity="0" class="btn-cart">
          <img className='carritologo' src='https://static.vecteezy.com/system/resources/previews/012/414/422/non_2x/add-shopping-cart-icon-free-png.png'></img>
          <span class="quantity"></span>
        </button></Nav.Link>
      </div>
    </Navbar>
    </div>
  );
}

export default Navbar1;