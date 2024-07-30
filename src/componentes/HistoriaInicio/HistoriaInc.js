import React from 'react'
import { Link } from "react-router-dom";
import EstilosHistP from "./EstilosHistP.css"


const HistoriaInc = () => {
  return (
    <div className='containerHistIn'>
        <div className='containerInfo'>
            <div className='imgHistI'>
                <img src='https://www.cafeturco.cl/wp-content/uploads/2020/03/historia.jpg'></img>
            </div>
            <div className='textHistoria'>
                <h2>Una historia diferente</h2>
                <p className='textNew'>Lorem ipsum dolor sit amet consectetur adipiscing elit velit habitasse libero nulla, augue gravida condimentum vivamus pellentesque tempor sociosqu justo duis per, nostra phasellus maecenas pretium eleifend odio enim massa fusce non. Pharetra posuere tortor habitant ac, primis nulla tempor integer, viverra arcu venenatis. Sociosqu pulvinar venenatis magna donec potenti lacinia purus, vulputate enim nec duis risus mus platea, vivamus bibendum hendrerit commodo ullamcorper ridiculus.
                Class orci condimentum est aliquet praesent scelerisque potenti suspendisse cursus malesuada etiam, laoreet conubia magnis fermentum venenatis quis urna tempor in erat. Nostra parturient himenaeos arcu aptent commodo ornare tortor, duis montes per eget cursus accumsan, tempus facilisi curae ultrices cum posuere. Eu fermentum semper euismod suspendisse dictum leo turpis nostra sociosqu ultricies, quisque iaculis mattis vitae lobortis lectus laoreet bibendum curabitur, nec scelerisque torquent magnis imperdiet elementum dignissim sagittis quis.</p>
                <Link to="/nosotros">
                <button className='button66'>Info</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HistoriaInc