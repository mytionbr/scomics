import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Livros from "../assets/images/Livros.mp4"
import hqs from "../assets/images/hqs.jpg"
import mangas from "../assets/images/mangas.jpg"
var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    autoplaySpeed: 5000,
    autoplay: true,
  };

function PresentationCarousel() {
    return (
        <div className="row center carousel">
            <Slider {...settings}>
            <div className="carousel-container">
                    <video className="w-full" autoPlay loop  src={Livros} alt="hqs" />
                </div>
                <div className="carousel-container">
                    <img className="w-full"  src={hqs} alt="hqs" />
                </div>
                <div className="carousel-container">
                    <img className="w-full"  src={mangas} alt="mangás" />
                </div>
            </Slider>
        </div>
    )
}

export default PresentationCarousel
