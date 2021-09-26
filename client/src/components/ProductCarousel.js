import React from "react";

import Product from "./Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const items = [
  {
    _id:1,
    name: 'item',
    price:300,
    image: 'https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SY300_SX300_.jpg'
  },
  {
    _id:1,
    name: 'item',
    price:300,
    image: 'https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SY300_SX300_.jpg'
  },
  {
    _id:1,
    name: 'item',
    price:300,
    image: 'https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SY300_SX300_.jpg'
  },
  {
    _id:1,
    name: 'item',
    price:300,
    image: 'https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SY300_SX300_.jpg'
  },
  {
    _id:1,
    name: 'item',
    price:300,
    image: 'https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SY300_SX300_.jpg'
  },
  {
    _id:1,
    name: 'item',
    price:300,
    image: 'https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SY300_SX300_.jpg'
  },
  {
    _id:1,
    name: 'item',
    price:300,
    image: 'https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SY300_SX300_.jpg'
  },
  
]
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 4,
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
