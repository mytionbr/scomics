import React from 'react'
import Rating from './Rating'
import {Link} from 'react-router-dom'

export default function Product({product,id}) {
    return (
        <div key={id} className="card">
          <div className="card-header">
            <Link to={`product/${product._id}`}>
            <img
              className="medium"
              src={product.image}
              alt="procuct"
            />
          </Link>
          </div>
        
        <div className="card-body">
          <Link to={`product/${product._id}`}>
            <h2>{product.name}</h2>
          </Link>
          <Rating rating={product.rating} hasNumReviews={false} />
          <div className="price">R$ {product.price}</div>
        </div>
      </div>
    )
}
