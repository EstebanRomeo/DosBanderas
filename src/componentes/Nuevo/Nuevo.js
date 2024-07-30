import React from 'react'
import EstilosNuevo from "./EstilosNuevo.css"
import img3 from "../img/3.jpg"
import logoiso from "../img/logoiso.png"
import sintacc from "../img/sintacc.jpg"

const Nuevo = () => {
  return (
    <div className='containerNuevo'>
        <div className='containerProdNuevo'>
            <div>
                <img src={logoiso} className='logoNew'></img>
            </div>
            <div className='infoNew'>
                <p className='tNuevo'>NUEVO</p>
                <img src={sintacc} className='imgSin'></img>
                <h1>BARBIE SWEET TREAT</h1>
                <p className='textNew'>Disfruta de un delicioso momento con el combo "Barbie Sweet Treat". Este combo incluye un refrescante licuado de frutas y una deliciosa galletita temática de Barbie, perfecta para darte un capricho dulce.  ¡Haz tu día más dulce con Barbie Sweet Treat!</p>
                <button className='button66'>AGREGAR</button>
            </div>
            <div className='prodNew'>
                <img src={img3} className='imgNew'></img>
            </div>
        </div>
    </div>
  )
}

export default Nuevo