import React from "react";

import Product from "./Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
};

function ProductCarousel({ products }) {
  return (
    <div className="row center carousel">
       <Slider {...settings}>
        {products.map((item) => (
          <div >
            <Product product={item}/>
          </div>
          ))}
       </Slider> 
    </div>
  );
}

export default ProductCarousel;
