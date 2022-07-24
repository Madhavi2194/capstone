import React, { useEffect, useState } from "react";
import '../PriceSummary/PriceSummary.scss';
import Button from "Components/Button/button";
import { useMatch} from "react-router-dom";
import {useSelector} from "react-redux";

function PricingSummary() {
    
    const checkoutPage = useMatch('/checkout');
   
    
    const  getPercentageValue = (discount, price) => {
        const discountedValue = price - (price * (discount/100));
        console.log("v",discountedValue);
        return discountedValue < 0 ? discountedValue : discountedValue;
     } 
     
     const [subTotal, setSubTotal] = useState(0);
    const [coupon, setCoupon] = useState(0);
    const [giftCard, setGiftCardValue] = useState(0);
    const [estimatedTax, setEstimatedTax] = useState(0);
    const [isFree, setIsFree] = useState(true);

    const cartItems = useSelector(store => store.cart.cart);


    useEffect(() => {
        let total = 0;
        cartItems.forEach(item => {
            total = total + (item.price*item.quantity);
        });

        setSubTotal(total);
        setCoupon(total - getPercentageValue(20, total));
        setGiftCardValue(total > 150 ? 100 : 0);
        setEstimatedTax(total - getPercentageValue(5, total));
        setIsFree(total > 500);

    }, [cartItems]);


    const getEstimatedTotal = () => {
        const es = isFree ? 0 : 50;
        return subTotal - coupon - giftCard + estimatedTax + es;
    }
   

    return (
        <section>
            <section className="price-summary-container">
                <div className="price-summary-section">
                    <h2>Pricing Summary</h2>
                </div>
                <div className="pricing-content">
                    <div className="Subtotal">
                        <p>Subtotal</p>
                    </div>
                    <div className="Subtotal-amt">
                        <p>$ {subTotal}</p>
                    </div>
                </div>
                <div className="pricing-content">
                    <div className="Coupon">
                        <p>Coupon</p>
                    </div>
                    <div className="Coupon-amt">
                        <p>$ {coupon.toFixed(2)}  </p>
                    </div>
                </div>
                <div className="pricing-content">
                    <div className="Gift-Card">
                        <p>Gift Card</p>
                    </div>
                    <div className="Gift-Card-amt">
                        <p>$ {giftCard} </p>
                    </div>
                </div>
                <div className="pricing-content">
                    <div className="Estimated-tax">
                        <p>Estimated tax</p>
                    </div>
                    <div className="Estimated-tax-amt">
                        <p>$ {estimatedTax.toFixed(2)}</p>
                    </div>
                </div>
                <div className="pricing-content">
                    <div className="Estimated-shipping">
                        <p>Estimated shipping</p>
                    </div>
                    <div className="Estimated-tax-amt">
                        <p>$ {isFree ? 0 : 50}</p>
                    </div>
                </div>
                <div className="pricing-content">
                    <div className="Estimated-Total">
                        <p>Estimated Total</p>
                    </div>
                    <div className="Estimated-Total-amt">
                        <p>$ {getEstimatedTotal().toFixed(2)}</p>
                    </div>
                </div>
                {!checkoutPage &&  <Button ></Button> }
               
            </section>
        </section>
    )

}
export default PricingSummary;