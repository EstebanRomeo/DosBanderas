import React, { useEffect, useState } from 'react';
import DetalleProducto from "./DetalleProducto";
import EstilosProductos from "./EstilosProductos.css"
import { useCartContext } from '../componentes/Context/CartContext';
import a11 from "../componentes/img/a11.jpg";
import a22 from "../componentes/img/a22.jpg";
import a33 from "../componentes/img/a33.jpg";
import a44 from "../componentes/img/a44.jpg";
import a55 from "../componentes/img/a55.jpg";
import a66 from "../componentes/img/a66.jpg";
import a77 from "../componentes/img/a77.jpg";
import a88 from "../componentes/img/a88.jpg";
import dia from "../componentes/img/365010562_1750769798755901_2907513444731861546_n.jpg"
import sintacc from "../componentes/img/sintacc.jpg"
import ItemCount from './ItemCount/ItemCount';

const Productos = ({producto}) => {
  const { addProduct } = useCartContext();
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(1);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  

  const productos = [
    { id: 1, nombre: 'Pepas', descripcionDetallada: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nostra semper maecenas.', imagen: "https://panaderiasdosbanderas.com/wp-content/uploads/2024/07/galletitas_Mesa-de-trabajo-1.png", precio: 500, stock: 20, categoria: "Galletitas", ingredientes: "Manteca, Azúcar, Huevos, Esencia de vainilla, Harina leudante, Sal, Membrillo"},
    { id: 2, nombre: 'Pepitos', descripcionDetallada: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nostra semper maecenas.', imagen: "https://panaderiasdosbanderas.com/wp-content/uploads/2024/07/galletitas-06.png", precio: 600, categoria: "Galletitas", ingredientes: "Manteca, Azúcar, Huevos, Esencia de vainilla, Harina leudante, Sal, Chips de chocolate" },
    { id: 3, nombre: 'Pre Pizzas', descripcionDetallada: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nostra semper maecenas.', imagen: a33, precio: 800, stock: 20, categoria: "Comida", ingredientes: "Harina de trigo, Azúcar, Grasa vegetal, Cacao procesado con álcali, Bicarbonato de sodio, Sal, Polvo para hornear" },
    { id: 4, nombre: 'Pastelitos', descripcionDetallada: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nostra semper maecenas.', imagen: a44, precio: 200, stock: 20, categoria: "Facturas", ingredientes: "Hojaldre, Azúcar, Canela" },
    { id: 5, nombre: 'Combo Barbie', descripcionDetallada: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nostra semper maecenas.', imagen: a55, precio: 520, stock: 20, categoria: "Combos", ingredientes: "Manteca, Azúcar, Huevos, Esencia de vainilla, Harina leudante, Sal, Chips de chocolate" },
    { id: 6, nombre: 'Torta chocolate', descripcionDetallada: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nostra semper maecenas.', imagen: "https://panaderiasdosbanderas.com/wp-content/uploads/2024/07/tortas-18.jpg", precio: 570, stock: 20, categoria: "Tortas", ingredientes: "Azúcar, Huevos, Esencia de vainilla, Harina leudante, Sal, Chips de chocolate" },
    { id: 7, nombre: 'Chipa', descripcionDetallada: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nostra semper maecenas.', imagen: a77, precio: 1800, stock: 20, categoria: "Facturas", ingredientes: "Manteca, Azúcar, Huevos, Esencia de vainilla, Harina leudante, Sal, Chips de chocolate" },
    { id: 8, nombre: 'Chocotorta', descripcionDetallada: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nostra semper maecenas.', imagen: "https://panaderiasdosbanderas.com/wp-content/uploads/2024/07/tortas-17.jpg", precio: 800, stock: 20, categoria: "Tortas", ingredientes: "Manteca, Azúcar, Huevos, Harina leudante, Sal, Chips de chocolate" },
    { id: 8, nombre: 'Café', descripcionDetallada: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nostra semper maecenas.', imagen: "https://panaderiasdosbanderas.com/wp-content/uploads/2024/07/galletitas-07.png", precio: 800, stock: 20, categoria: "Galletitas", ingredientes: "Harina de trigo, Azúcar, Grasa vegetal, Cacao procesado con álcali, Bicarbonato de sodio, Sal, Polvo para hornear" },
    { id: 9, nombre: 'Coco', descripcionDetallada: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nostra semper maecenas.', imagen: "https://panaderiasdosbanderas.com/wp-content/uploads/2024/07/galletitas-12.png", precio: 800, stock: 20, categoria: "Galletitas", ingredientes: "Hojaldre, Azúcar, Canela" },
    { id: 10, nombre: 'Medialunas', descripcionDetallada: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nostra semper maecenas.', imagen: a88, precio: 800, stock: 20, categoria: "Facturas", ingredientes: "Manteca, Azúcar, Huevos, Esencia de vainilla, Harina leudante, Sal, Chips de chocolate" },
    { id: 11, nombre: 'Tortita Negra', descripcionDetallada: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nostra semper maecenas.', imagen: a88, precio: 800, stock: 20, categoria: "Facturas", ingredientes: "Manteca, Azúcar, Huevos, Esencia de vainilla, Harina leudante, Sal, Chips de chocolate" },
    { id: 12, nombre: 'ChocoOreo', descripcionDetallada: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nostra semper maecenas.', imagen: a88, precio: 800, stock: 20, categoria: "Tortas", ingredientes: "Manteca, Azúcar, Huevos, Esencia de vainilla, Harina leudante, Sal, Chips de chocolate" },
    { id: 13, nombre: 'Selva Negra', descripcionDetallada: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nostra semper maecenas.', imagen: a88, precio: 800, stock: 20, categoria: "Tortas", ingredientes: "Manteca, Azúcar, Huevos, Esencia de vainilla, Harina leudante, Sal, Chips de chocolate" },
    { id: 14, nombre: 'Lentejas Con Salsa', descripcionDetallada: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nostra semper maecenas.', imagen: a88, precio: 800, stock: 20, categoria: "Comida", ingredientes: "Manteca, Azúcar, Huevos, Esencia de vainilla, Harina leudante, Sal, Chips de chocolate" },
    { id: 15, nombre: 'Sandwich de jamon Crudo', descripcionDetallada: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nostra semper maecenas.', imagen: a88, precio: 800, stock: 20, categoria: "Comida", ingredientes: "Manteca, Azúcar, Huevos, Esencia de vainilla, Harina leudante, Sal, Chips de chocolate" },
    { id: 16, nombre: 'Chocolatosas', descripcionDetallada: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nostra semper maecenas.', imagen: a88, precio: 800, stock: 20, categoria: "Masas", ingredientes: "Manteca, Azúcar, Huevos, Esencia de vainilla, Harina leudante, Sal, Chips de chocolate" },
    { id: 17, nombre: 'Citricas', descripcionDetallada: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nostra semper maecenas.', imagen: a88, precio: 800, stock: 20, categoria: "Masas", ingredientes: "Manteca, Azúcar, Huevos, Esencia de vainilla, Harina leudante, Sal, Chips de chocolate" },
    { id: 18, nombre: 'Tradicionales', descripcionDetallada: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nostra semper maecenas.', imagen: a88, precio: 800, stock: 20, categoria: "Masas", ingredientes: "Manteca, Azúcar, Huevos, Esencia de vainilla, Harina leudante, Sal, Chips de chocolate" },
    { id: 19, nombre: 'Chajá', descripcionDetallada: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nostra semper maecenas.', imagen: "https://panaderiasdosbanderas.com/wp-content/uploads/2024/07/tortas-13.jpg", precio: 800, stock: 20, categoria: "Tortas", ingredientes: "Manteca, Azúcar, Huevos, Esencia de vainilla, Harina leudante, Sal, Chips de chocolate" },
    { id: 20, nombre: 'Barcelona', descripcionDetallada: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nostra semper maecenas.', imagen: "https://panaderiasdosbanderas.com/wp-content/uploads/2024/07/tortas-14.jpg", precio: 800, stock: 20, categoria: "Tortas", ingredientes: "Manteca, Azúcar, Huevos, Esencia de vainilla, Harina leudante, Sal, Chips de chocolate" },
    { id: 21, nombre: 'Lemon Pie', descripcionDetallada: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nostra semper maecenas.', imagen: "https://panaderiasdosbanderas.com/wp-content/uploads/2024/07/tortas-15.jpg", precio: 800, stock: 20, categoria: "Tortas", ingredientes: "Manteca, Azúcar, Huevos, Esencia de vainilla, Harina leudante, Sal, Chips de chocolate" },
    { id: 22, nombre: 'Pepas Integrales', descripcionDetallada: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nostra semper maecenas.', imagen: "https://panaderiasdosbanderas.com/wp-content/uploads/2024/07/galletitas-04.png", precio: 800, stock: 20, categoria: "Galletitas", ingredientes: "Manteca, Azúcar, Huevos, Esencia de vainilla, Harina leudante, Sal, Chips de chocolate" },
    { id: 23, nombre: 'Integrales de Frutilla', descripcionDetallada: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nostra semper maecenas.', imagen: "https://panaderiasdosbanderas.com/wp-content/uploads/2024/07/galletitas-08.png", precio: 800, stock: 20, categoria: "Galletitas", ingredientes: "Manteca, Azúcar, Huevos, Esencia de vainilla, Harina leudante, Sal, Chips de chocolate" },
    { id: 24, nombre: 'Criollitos', descripcionDetallada: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nostra semper maecenas.', imagen: "https://panaderiasdosbanderas.com/wp-content/uploads/2024/07/galerias-28.jpg", precio: 800, stock: 20, categoria: "SinTacc", ingredientes: "Manteca, Azúcar, Huevos, Esencia de vainilla, Harina leudante, Sal, Chips de chocolate" },
    { id: 25, nombre: 'Facturas', descripcionDetallada: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nostra semper maecenas.', imagen: "https://panaderiasdosbanderas.com/wp-content/uploads/2024/07/galerias-30.jpg", precio: 800, stock: 20, categoria: "SinTacc", ingredientes: "Manteca, Azúcar, Huevos, Esencia de vainilla, Harina leudante, Sal, Chips de chocolate" },
    { id: 26, nombre: 'Empanadas', descripcionDetallada: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nostra semper maecenas.', imagen: "https://panaderiasdosbanderas.com/wp-content/uploads/2024/07/galerias-34.jpg", precio: 800, stock: 20, categoria: "SinTacc", ingredientes: "Manteca, Azúcar, Huevos, Esencia de vainilla, Harina leudante, Sal, Chips de chocolate" },
    { id: 27, nombre: 'Medialunas', descripcionDetallada: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nostra semper maecenas.', imagen: "https://panaderiasdosbanderas.com/wp-content/uploads/2024/07/galerias-27.jpg", precio: 800, stock: 20, categoria: "SinTacc", ingredientes: "Manteca, Azúcar, Huevos, Esencia de vainilla, Harina leudante, Sal, Chips de chocolate" },
  ];

  
  const productosFiltrados = categoriaSeleccionada
  ? productos.filter(producto => producto.categoria.toLowerCase() === categoriaSeleccionada.toLowerCase())
  : productos;

  //Funcionalidad de la seccion de productos por categoroa
  const productosPorCategoria = productos.reduce((acc, producto) => {
    if (!acc[producto.categoria]) {
      acc[producto.categoria] = [];
    }
    acc[producto.categoria].push(producto);
    return acc;
  }, {});

  let cantidad = 0;
  //Intento de seleccionar producto
  const handleProductoClick = (producto) => {
    setProductoSeleccionado(producto);
  };

  //Cierra los detalles delt producto
  const handleCloseDetalle = () => {
    setProductoSeleccionado(null);
  };

  //Agrega el prod. y la cantidad
  const handleAddToCart = (producto, cantidad) => {
    addProduct(productoSeleccionado, cantidadSeleccionada); 
    setProductoSeleccionado(null);
    setCantidadSeleccionada(1); 
  };





  return (
    <div>
      {productoSeleccionado && (
        <div className='conta'>
          <div className='imglogo'>
          <img src='https://panaderiasdosbanderas.com/wp-content/uploads/2021/08/Logotipo@2x.png'></img>
          </div>
        <div className='prodSelec'>
          <div className='imgDeco'>
            <img src='https://panaderiasdosbanderas.com/wp-content/uploads/2023/05/elementos-05-1-min.png'></img>
          </div>
        <div className="descripcionDetallada">
        <button onClick={handleCloseDetalle} class="button5">
            <span class="X"></span>
            <span class="Y"></span>
            <div class="close">Close</div>
          </button>
          <div className='infoSelec'>
          <h1>{productoSeleccionado.nombre}</h1>
          <p>INGREDIENTES: <br></br>{productoSeleccionado.ingredientes}</p>
          </div>
          <div class="rating">
            <input value="5" name="rate" id="star5" type="radio"></input>
            <label title="text" for="star5"></label>
            <input value="4" name="rate" id="star4" type="radio"></input>
            <label title="text" for="star4"></label>
            <input value="3" name="rate" id="star3" type="radio" checked=""></input>
            <label title="text" for="star3"></label>
            <input value="2" name="rate" id="star2" type="radio"></input>
            <label title="text" for="star2"></label>
            <input value="1" name="rate" id="star1" type="radio"></input>
            <label title="text" for="star1"></label>
          </div>

          <h5>${productoSeleccionado.precio}</h5>
          <div className='botones'>
          </div>
          <ItemCount initial={cantidadSeleccionada} stock={10} onAdd={setCantidadSeleccionada} />
            <button onClick={handleAddToCart} className='button99'>Agregar</button>
         
        </div>
        <img className='decoRa' src='https://panaderiasdosbanderas.com/wp-content/uploads/2023/05/elementos-02.png'></img>
          <div className='imgSelec'>
            <img src={productoSeleccionado.imagen} className='imgSelec'></img>
          </div>
      </div>
      </div>
      )}
    <div className="containerProductos">
    
<div className='containerFiltros'>
      <div className='filtros'>
            <h2>FILTROS</h2>
            <div class="wrapper" onChange={(e) => setCategoriaSeleccionada(e.target.value)}>
      <div class="option">
        <input class="input" type="radio" name="btn" value="" checked=""></input>
        <div class="btn">
          <span class="span">Todas</span>
        </div>
      </div>
      <div class="option">
        <input class="input" type="radio" name="btn" value="Facturas"></input>
        <div class="btn">
          <span class="span">Facturas</span>
        </div>  </div>
      <div class="option">
        <input class="input" type="radio" name="btn" value="Galletitas"></input>
        <div class="btn">
          <span class="span">Galletitas</span>
        </div>  
      </div>
      <div class="option">
        <input class="input" type="radio" name="btn" value="Tortas"></input>
        <div class="btn">
          <span class="span">Tortas</span>
        </div>  
      </div>
      <div class="option">
        <input class="input" type="radio" name="btn" value="Comida"></input>
        <div class="btn">
          <span class="span">Comida</span>
        </div>  
      </div>
      <div class="option">
        <input class="input" type="radio" name="btn" value="Combos"></input>
        <div class="btn">
          <span class="span">Combos</span>
        </div>  
      </div>
      <div class="option">
        <input class="input" type="radio" name="btn" value="SinTacc"></input>
        <div class="btn">
          <span class="span">SinTacc</span>
        </div>  
      </div>
    </div>
    
    <div class="card-conteiner">
  <div class="card-content">
    <div class="card-title">Rango de <span>Precio</span></div>
    <div class="values">
      <div>$<span id="first">735</span></div> -
      <div>$<span id="second">6 465</span></div>
    </div>
    <small class="current-range">
      Rango seleccionado:
      <div><p>$<span id="third">7200</span></p></div>
    </small>
    <div data-range="#third" data-value-1="#second" data-value-0="#first" class="slider">
      <label class="label-min-value">1</label>
      <label class="label-max-value">10 000</label>
    </div>
    <div class="rangeslider">
      <input class="min input-ranges" name="range_1" type="range" min="1" max="10000" value="735"></input>
      <input class="max input-ranges" name="range_1" type="range" min="1" max="10000" value="6465"></input>
    </div>
  </div>
</div>


      </div>
</div>
  
      {categoriaSeleccionada ? (
        <div className="categoriaContainer">
          <h1 className="1">{categoriaSeleccionada}</h1>
          <div className="categoriaProductos">
            {productosPorCategoria[categoriaSeleccionada]?.map((producto) => (
              <div key={producto.id} className="promo-card5" onClick={() => handleProductoClick(producto)}>
                <div className="discount-label5">30% OFF</div>
                    <div className="card-content5">
                        <div className="text-content5">
                          <h3 className="card-title5">{producto.nombre}</h3>
                          <p className="card-description5">{producto.ingredientes}</p>
                            <div className="price5">
                              <span className="new-price5">${producto.precio}</span>
                              <span className="old-price5">$13.000</span>
                            </div>
                        </div>
                        <div className="image-content5">
                          <img src={producto.imagen} alt={`Producto ${producto.id}`} />
                        </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (

        <div className="categoriaContainer">


<h1>NUESTROS PRODUCTOS</h1>
          {Object.keys(productosPorCategoria).map((categoria) => (
            <div key={categoria} className="categoriaProductos">
              {productosPorCategoria[categoria].map((producto) => (
                <div key={producto.id} className="promo-card5" onClick={() => handleProductoClick(producto)}>
                  <div className="discount-label5">30% OFF</div>
                    <div className="card-content5">
                        <div className="text-content5">
                          <h3 className="card-title5">{producto.nombre}</h3>
                          <p className="card-description5">{producto.ingredientes}</p>
                            <div className="price5">
                              <span className="new-price5">${producto.precio}</span>
                              <span className="old-price5">$13.000</span>
                            </div>
                        </div>
                        <div className="image-content5">
                          <img src={producto.imagen} alt={`Producto ${producto.id}`} />
                        </div>
                </div>
              </div>
              
          
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
}


export default Productos;
