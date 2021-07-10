import React from 'react'
import Rating from './Rating'

export default function Product({product,id}) {
    return (
        <div key={id} className="card">
        <a href={`product/${product._id}`}>
          <img
            className="medium"
            src={product.image}
            alt="procuct"
          />
        </a>
        <div className="card-body">
          <a href={`product/id/${product._id}`}>
            <h2>{product.name}</h2>
          </a>
          <Rating rating={product.rating} numReviews={product.numReviews} />
          <div className="price">R$ {product.price}</div>
        </div>
      </div>
    )
}
