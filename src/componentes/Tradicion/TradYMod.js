import React from 'react'
import EstilosTrad from "./EstilosTrad.css"
import { Link } from "react-router-dom";
import trad1 from "../img/trad1.jpg"
import trad2 from "../img/trad2.jpg"
import logoiso from "../img/logoiso.png"

const TradYMod = () => {
  return (
    <div className='containerTrad'>
        <div className='tradImg1'>
          <img src={trad1}></img>
        </div>
        <div className='tradInfo'>
            <h2>Tradición y Modernidad</h2>
            <p className='textNew'>Lorem ipsum dolor sit amet consectetur adipiscing elit, senectus tempor habitant ligula dis eu mi vehicula, ultricies luctus nostra netus aliquam magnis. Taciti donec himenaeos aenean class ultrices maecenas sodales ad cursus.
            </p>
            <img src={logoiso}></img>
              <Link to="/nosotros">
              <button className='button66'>Info</button>
              </Link>
        </div>
        <div className='tradImg2'>
          <img src={trad2}></img>
        </div>
    </div>
  )
}

export default TradYMod