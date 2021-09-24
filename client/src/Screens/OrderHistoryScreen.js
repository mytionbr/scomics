import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listOrderMine } from '../actions/orderAction'
import LoadingBox from '../components/LoadingBox'
import LoadingOverlay from '../components/LoadingOverlay'
import MessageBox from '../components/MessageBox'

export default function OrderHistoryScreen(props) {
    const orderMineList = useSelector(state => state.orderMineList)
    const { loading, error, orders } = orderMineList    
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(listOrderMine())
    },[dispatch])
    return (   
        <div>
            <h1>Histórico de pedidos</h1>
            { loading ? <LoadingOverlay /> : 
              error? <MessageBox varient="danger">{error}</MessageBox>
              :(
                  <table className="table">
                      <thead>
                          <tr>
                              <th>ID</th>
                              <th>DATA</th>
                              <th>TOTAL</th>
                              <th>PAGO</th>
                              <th>ENTREGUE</th>
                              <th>AÇÕES</th>
                          </tr>
                      </thead>
                      <tbody>
                          {
                              orders.map((order)=>(
                                  <tr key={order._id}>
                                      <td>{order._id}</td>
                                      <td>{order.createdAt}</td>
                                      <td>R$ {order.totalPrice.toFixed(2)}</td>
                                      <td>{order.isPaid ? order.paidAt.substring(0,10) : 'No'}</td>
                                      <td>{order.isDelivered ? order.deliveredAt.substring(0,10) : 'No'}</td>
                                      <td>
                                          <button type="button" className="small"
                                           onClick={()=> {props.history.push(`/order/${order._id}`)}}>
                                             Detalhes   
                                            </button>
                                           </td>
                                  </tr>
                              ))
                          }
                      </tbody>
                  </table>
              )}
        </div>
    )
}
