import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import { moneyFormatter } from "../utils/moneyFormatter";

export default function Product({ product }) {
  return (
    <Link to={`product/${product._id}`}>
      <div key={product._id} className="card">
        <div className="card-header">
          <img className="medium" src={product.image} alt="procuct" />
        </div>

        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <Rating rating={product.rating} showNumReviews={false}  numReviews={product.numReviews} />
          <div className="price">{moneyFormatter(product.price)}</div>
        </div>
      </div>
    </Link>
  );
}
