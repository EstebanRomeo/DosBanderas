import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
import info1 from "./img/1.jpg"
import info2 from "./img/2.jpg"
import info3 from "./img/3.jpg"
import info4 from "./img/4.jpg"

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '500',
      };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className='containerImgC'>
          <img src={info1} alt="Imagen 1" />
        </div>
        <div className='containerImgC'>
          <img src={info2} alt="Imagen 2" />
        </div>
        <div className='containerImgC'> 
          <img src={info3} alt="Imagen 2" />
        </div>
        <div className='containerImgC'>
          <img src={info4} alt="Imagen 2" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
