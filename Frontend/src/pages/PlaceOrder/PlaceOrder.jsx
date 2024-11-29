import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const PlaceOrder = () => {

    const [payment, setPayment] = useState("cod")
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: ""
    })

    const { getTotalCartAmount, token, food_list, cartItems, url, setCartItems,currency,deliveryCharge } = useContext(StoreContext);

    const navigate = useNavigate();

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({ ...data, [name]: value }))
    }

    const placeOrder = async (e) => {
        e.preventDefault()
        let orderItems = [];
        food_list.map(((item) => {
            if (cartItems[item._id] > 0) {
                let itemInfo = item;
                itemInfo["quantity"] = cartItems[item._id];
                orderItems.push(itemInfo)
            }
        }))
        let orderData = {
            address: data,
            items: orderItems,
            amount: getTotalCartAmount() + deliveryCharge,
        }
        if (payment === "stripe") {
            let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });
            if (response.data.success) {
                const { session_url } = response.data;
                window.location.replace(session_url);
            }
            else {
                toast.error("Algo Salió Mal")
            }
        }
        else{
            let response = await axios.post(url + "/api/order/placecod", orderData, { headers: { token } });
            if (response.data.success) {
                navigate("/myorders")
                toast.success(response.data.message)
                setCartItems({});
            }
            else {
                toast.error("Algo Salió Mal")
            }
        }

    }

    useEffect(() => {
        if (!token) {
            toast.error("Para realizar un pedido, inicia sesión primero")
            navigate('/cart')
        }
        else if (getTotalCartAmount() === 0) {
            navigate('/cart')
        }
    }, [token])

    return (
        <form onSubmit={placeOrder} className='place-order'>
            <div className="place-order-left">
                <p className='title'>Información de entrega</p>
                <div className="multi-field">
                    <input type="text" name='firstName' onChange={onChangeHandler} value={data.firstName} placeholder='Nombre' required />
                    <input type="text" name='lastName' onChange={onChangeHandler} value={data.lastName} placeholder='Apellido' required />
                </div>
                <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Correo electrónico' required />
                <input type="text" name='street' onChange={onChangeHandler} value={data.street} placeholder='Calle' required />
                <div className="multi-field">
                    <input type="text" name='city' onChange={onChangeHandler} value={data.city} placeholder='Ciudad' required />
                    <input type="text" name='state' onChange={onChangeHandler} value={data.state} placeholder='Estado' required />
                </div>
                <div className="multi-field">
                    <input type="text" name='zipcode' onChange={onChangeHandler} value={data.zipcode} placeholder='Código postal' required />
                    <input type="text" name='country' onChange={onChangeHandler} value={data.country} placeholder='País' required />
                </div>
                <input type="text" name='phone' onChange={onChangeHandler} value={data.phone} placeholder='Teléfono' required />
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Total</h2>
                    <div>
                        <div className="cart-total-details"><p>Subtotal</p><p>{currency}{getTotalCartAmount()}</p></div>
                        <hr />
                        <div className="cart-total-details"><p>Tarifa de envío</p><p>{currency}{getTotalCartAmount() === 0 ? 0 : deliveryCharge}</p></div>
                        <hr />
                        <div className="cart-total-details"><b>Total</b><b>{currency}{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + deliveryCharge}</b></div>
                    </div>
                </div>
                <div className="payment">
                    <h2>Método de pago</h2>
                    <div onClick={() => setPayment("cod")} className="payment-option">
                        <img src={payment === "cod" ? assets.checked : assets.un_checked} alt="" />
                        <p>COD ( Pago contra entrega )</p>
                    </div>
                    <div onClick={() => setPayment("stripe")} className="payment-option">
                        <img src={payment === "stripe" ? assets.checked : assets.un_checked} alt="" />
                        <p>Stripe (Tarjeta de crédito/débito)</p>
                    </div>
                </div>
                <button className='place-order-submit' type='submit'>{payment==="cod"?"Realizar Pedido" : "Proceder al Pago"}</button>
            </div>
        </form>
    )
}

export default PlaceOrder