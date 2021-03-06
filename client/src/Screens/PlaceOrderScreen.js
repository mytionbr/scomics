import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createOrder } from "../actions/orderAction";
import CheckoutSteps from "../components/CheckoutSteps";
import { ORDER_CREATE_RESET } from "../constants/orderConstants";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { moneyFormatter } from "../utils/moneyFormatter";

export default function PlaceOrderScreen(props) {
  const cart = useSelector((state) => state.cart);
  if (!cart.paymentMethod) {
    prompt.history.push("/payment");
  }
  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;

  const toPrice = (num) => Number(num.toFixed(2));

  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
  cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

  const dispatch = useDispatch();

  const placeOrderHandler = () => {
    dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
  };

  useEffect(() => {
    if (success) {
      props.history.push(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, props.history, success]);

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="row top">
        <div className="col-2  p-1">
          <ul>
            <li>
              <div className="card-simple paper flex column m-all">
                <h2>Envio</h2>
                <p>
                  <strong>Nome: </strong> {cart.shippingAddress.fullName}
                </p>
                <p>
                  <strong>Endereço: </strong>
                  {cart.shippingAddress.address},{cart.shippingAddress.city},{" "}
                  {cart.shippingAddress.postalCode},
                  {cart.shippingAddress.country}
                </p>
              </div>
            </li>
            <li>
              <div className="card-simple paper flex column m-all">
                <h2>Pagamento</h2>
                <p>
                  <strong>Método: </strong> {cart.paymentMethod}
                </p>
              </div>
            </li>
            <li>
              <div className="card-simple paper flex column  m-all">
                <h2>Lista de itens</h2>
                <ul>
                  {cart.cartItems.map((item) => (
                    <li key={item.product}>
                      <div className="row">
                        <div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          ></img>
                        </div>
                        <div className="min-30">
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>
                        <div>
                          {item.qty} x {moneyFormatter(item.price)} = {moneyFormatter(item.qty * item.price)}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-1 p-1">
          <div className="card-simple paper flex column">
            <ul>
              <li>
                <h2>Resumo do pedido</h2>
              </li>
              <li>
                <div className="row">
                  <div>Itens</div>
                  <div>{moneyFormatter(cart.itemsPrice)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Envio</div>
                  <div>{moneyFormatter(cart.shippingPrice)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Taxa</div>
                  <div>{moneyFormatter(cart.taxPrice)}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Total</div>
                  <div>
                    <strong>{moneyFormatter(cart.totalPrice)}</strong>
                  </div>
                </div>
              </li>
              <li>
                <button
                  type="button"
                  onClick={placeOrderHandler}
                  className="hover block"
                  disabled={cart.cartItems.length === 0}
                >
                  Faça a encomenda
                </button>
              </li>
              {loading && <LoadingBox></LoadingBox>}
              {error && <MessageBox variant="danger">{error}</MessageBox>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
