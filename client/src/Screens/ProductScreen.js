import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsProducts } from "../actions/productsActions";
import LoadingBox from "../components/LoadingBox";
import LoadingOverlay from "../components/LoadingOverlay";
import MessageBox from "../components/MessageBox";
import Rating from "../components/Rating";

export default function ProductScreen(props) {
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty,setQty] = useState(1)

  useEffect(() => {
    dispatch(detailsProducts(productId));
  }, [dispatch, productId]);

  const addToCartHandler = ()=>{
      props.history.push(`/cart/${productId}?qty=${qty}`)
  }

  return (
    <div>
      {loading ? (
        <LoadingOverlay />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className ="paper">
          <Link to="/">Voltar</Link>
          <div className="row top">
            <div className="col-2 row center">
              <img className="large" src={product.image} alt={product.name} />
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1 className="font-3 weight-700">{product.name}</h1>
                </li>
                <li>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  ></Rating>
                </li>
                <li>Preço : R$ {product.price}</li>
                <li>
                  Descrição :
                  <p>{product.description}</p>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card-simple">
                <ul>
                  <li>
                    <div className="row">
                      <div>Preço: </div>
                      <div className="price">R${product.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status: </div>
                      <div>
                        {product.countInStock > 0 ? (
                          <span className="success">No estoque</span>
                        ) : (
                          <span className="danger">Em falta</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {product.countInStock > 0 && (
                    <>
                      <li>
                          <div className="row">
                            <div>Qtd: </div>
                            <div>
                                <select value={qty} onChange={e => setQty(e.target.value)}>
                                    {[...Array(product.countInStock).keys()].map(
                                        (x) =>(
                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                        )
                                    )}
                                </select>
                            </div>
                          </div>
                      </li>
                      <li>
                        <button onClick={addToCartHandler} className="primary hover block">Adicionar no Carrinho</button>
                        </li>
                    </>
                  )}
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
