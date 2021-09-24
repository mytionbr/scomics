import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { detailsOrder, payOrder } from '../actions/orderAction'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import {PayPalButton} from 'react-paypal-button-v2'
import { ORDER_PAY_RESET } from '../constants/orderConstants'

export default function OrderScreen(props) {
    
    const orderId = props.match.params.id
    const [sdkReady,setSdkReady] = useState(false)
    const orderDetails = useSelector(state => state.orderDetails)
    const { order,loading,error} = orderDetails
    const dispatch = useDispatch()

    const orderPay = useSelector(state => state.orderPay)

        const { 
        loading: loadingPay, 
        error: errorPay, 
        success: successPay 
    } = orderPay;

    useEffect(()=>{
        const addPayPalScript = async () =>{
            const { data } = await axios.get('/api/config/paypal')
            const script = document.createElement('script')
            script.type="text/javascript"
            script.src=`https://www.paypal.com/sdk/js?client-id=${data}`
            script.async = true
            script.onload = () =>{
                setSdkReady(true)
            }
            document.body.appendChild(script)
        }
        if(!order || successPay || (order && order._id !== orderId)){
            dispatch({type:ORDER_PAY_RESET})
            dispatch(detailsOrder(orderId))
        } else {
            if(!order.isPaid){
                if(!window.paypal){
                    addPayPalScript()
                } else {
                    setSdkReady(true)
                }
            }
        }
    },[dispatch, order, orderId, sdkReady, successPay])

    const successPaymentHandler = (paymentResult)=>{
        dispatch(payOrder(order,paymentResult))
    }

    return  loading 
        ? (<LoadingBox></LoadingBox>) 
        : error
        ? (<MessageBox varient="danger">{error}</MessageBox>)
        : (
        <div>
            <h1>Order {order._id}</h1>
            <div className="row top">
                <div className="col-2 p-1">
                    <ul>
                        <li>
                            <div className="card-simple paper flex column m-all">
                                <h2>Envio</h2>
                                <p>
                                    <strong>Nome: </strong> {order.shippingAddress.fullName}
                                </p>
                                <p>
                                <strong>Endereço: </strong>{order.shippingAddress.address},
                                    {order.shippingAddress.city}, {order.shippingAddress.postalCode},
                                    {order.shippingAddress.country}
                                </p>
                                {order.isDelivered ? (
                                    <MessageBox variant="success">
                                        Entregue em {order.deliveredAt}
                                    </MessageBox>
                                ): (
                                    <MessageBox variant="danger">Não entregue</MessageBox>
                                )
                                }
                            </div>
                        </li>
                        <li>
                            <div className="card-simple paper flex column m-all">
                                <h2>Pagamento</h2>
                                <p>
                                    <strong>Método: </strong> {order.paymentMethod}                                   
                                </p>
                                {order.isPaid ? (
                                    <MessageBox variant="success">
                                        Pago em {order.paidAt}
                                    </MessageBox>
                                ): (
                                    <MessageBox variant="danger">Não pago</MessageBox>
                                )
                                }
                            </div>
                        </li>
                        <li>
                            <div className="card-simple paper flex column m-all">
                                <h2>Lista de itens</h2>
                                <ul>
                        {
                            order.orderItems.map((item)=>(
                                <li key={item.product}>
                                    <div className="row">
                                        <div>
                                            <img 
                                                src={item.image}
                                                alt={item.name}
                                                className="small"></img>
                                        </div>
                                        <div className="min-30">
                                            <Link to={`/product/${item.product}`}>
                                                {item.name}
                                            </Link>
                                        </div>
                                        <div>
                                            {item.qty} x R$ {item.price} = R$ {item.qty * item.price}
                                    </div>
                                    </div>
                                  
                                </li>
                            ))
                        }
                    </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-1 p-1">
                    <div className="card-simple paper flex column m-all">
                        <ul>
                            <li>
                                <h2>Pedido</h2>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Itens</div>
                                    <div>R$ {order.itemsPrice.toFixed(2)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Envio</div>
                                    <div>R$ {order.shippingPrice.toFixed(2)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Taxa</div>
                                    <div>R$ {order.taxPrice.toFixed(2)}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Preço total</div>
                                    <div>
                                        <strong>R$ {order.totalPrice.toFixed(2)}</strong>
                                    </div>
                                </div>
                            </li>
                            {
                                !order.isPaid && (
                                    <li>
                                        {!sdkReady ? (<LoadingBox></LoadingBox>):
                                            (   <>
                                                {errorPay && (
                                                    <MessageBox variant="danger">{errorPay}</MessageBox>
                                                )}
                                                {loadingPay && <LoadingBox></LoadingBox>}
                                                <PayPalButton 
                                                    amount={order.totalPrice}
                                                    onSuccess={successPaymentHandler}>
                                                </PayPalButton>
                                                </>
                                            )
                                        }
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
