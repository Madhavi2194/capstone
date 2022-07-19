import React from 'react';
import "./button.scss"
import paypal from '../../assests/paypal.png';
import { useNavigate } from "react-router-dom";


const Button = () => {
    const navigate = useNavigate();
    const navigateTOCheckout=()=>{
        navigate("/checkout")
    }
    return (
        <div>
            <button className="checkout-btn" onClick={navigateTOCheckout}><i className="fa fa-user-o" aria-hidden="true" ></i>CHECKOUT</button>
                <div className="paypal-btn-img">
                    <img src={paypal} className="paypal-img" alt="paypal-link" />
                </div>
        </div>
    );
};

export default Button;