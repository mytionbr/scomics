import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Livros from "../assets/images/Livros.mp4"
import hqs from "../assets/images/hqs.jpg"
import mangas from "../assets/images/mangas.jpg"
import { Link } from 'react-router-dom';
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
                    <Link to="/search/category/livros">
                        <video className="w-full" autoPlay loop  src={Livros} alt="hqs" />
                    </Link>
                </div>
                <div className="carousel-container">
                    <Link to="/search/category/hqs">
                         <img className="w-full"  src={hqs} alt="hqs" />
                    </Link>
                </div>
                <div className="carousel-container">
                    <Link to="/search/category/mangás">
                        <img className="w-full"  src={mangas} alt="mangás" />
                    </Link>
                </div>
            </Slider>
        </div>
    )
}

export default PresentationCarousel
