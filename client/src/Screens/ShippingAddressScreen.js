import React, { useState } from 'react'
import CheckoutSteps from '../components/CheckoutSteps'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddress } from '../actions/cartActions'

export default function ShippingAddressScreen(props) {
    
    const userSignin = useSelector(state => state.userSignin)
    const { userInfo } = userSignin
    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart

    if(!userInfo){
        props.history.push('/signin')
    }
    
    const [fullName,setFullName] = useState(shippingAddress.fullName)
    const [address,setAddress] = useState(shippingAddress.address)
    const [city,setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country,setCountry] = useState(shippingAddress.country)
    
    const dispatch = useDispatch(saveShippingAddress())

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(
            saveShippingAddress({fullName,address,city,postalCode,country})
        )
        props.history.push('/payment')
    }
    return (
        <div>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>
                        Endereço para envio
                    </h1>
                </div>
                    <div>
                        <label htmlFor="fullName">Nome completo</label>
                        <input
                            type="text"
                            id="fullName"
                            placeholder="Digite o seu nome completo"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="address">Endereço</label>
                        <input
                            type="text"
                            id="address"
                            placeholder="Digite o seu endereço"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="city">Cidade</label>
                        <input
                            type="text"
                            id="city"
                            placeholder="Digite a sua cidade"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="postalCode">Código postal</label>
                        <input
                            type="text"
                            id="postalCode"
                            placeholder="Digite o seu código postal"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                            required
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="country">País</label>
                        <input
                            type="text"
                            id="country"
                            placeholder="Digite o seu país"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                        ></input>
                    </div>
                    <div>
                        <lavel />
                        <button className="primary" type="submit">
                            Continue
                        </button>
                    </div>
            </form>
        </div>
    )
}
