import React from 'react'
import EstilosProdIn from "./EstilosProdIn.css"
import sandwich from "../img/sandwich.jpg"
import medialuna from "../img/medialuna.jpg"
import torta from "../img/torta.jpg"
import sintacc from "../img/sintacc.jpg"

const ProdInic = () => {
  return (
    <div className='containerProdIn1'>
        <div className='containerProdIn'>
        <div class="card">
         <img src={medialuna}></img>
        </div>

        <div class="card">
            <img src={torta}></img>
        </div>

        <div class="card">
            Masas y Alfajores
        </div>

        <div class="card">
            <img src={sandwich}></img>
        </div>

        <div class="card">
            Galletitas
        </div>

        <div class="card">
        <img src={sintacc}></img>
        </div>
        </div>
    </div>
  )
}

export default ProdInic