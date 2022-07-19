import React from "react";
import '../PriceSummary/PriceSummary.scss';
import Button from "Components/Button/button";
import { useMatch} from "react-router-dom";

function PricingSummary() {
    
    const checkoutPage = useMatch('/checkout');
    
  

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
                        <p>$ 388.00</p>
                    </div>
                </div>
                <div className="pricing-content">
                    <div className="Coupon">
                        <p>Coupon</p>
                    </div>
                    <div className="Coupon-amt">
                        <p>- $ 77.60</p>
                    </div>
                </div>
                <div className="pricing-content">
                    <div className="Gift-Card">
                        <p>Gift Card</p>
                    </div>
                    <div className="Gift-Card-amt">
                        <p>- $ 100.00</p>
                    </div>
                </div>
                <div className="pricing-content">
                    <div className="Estimated-tax">
                        <p>Estimated tax</p>
                    </div>
                    <div className="Estimated-tax-amt">
                        <p>$ 23.28</p>
                    </div>
                </div>
                <div className="pricing-content">
                    <div className="Estimated-shipping">
                        <p>Estimated shipping</p>
                    </div>
                    <div className="Estimated-tax-amt">
                        <p>FREE</p>
                    </div>
                </div>
                <div className="pricing-content">
                    <div className="Estimated-Total">
                        <p>Estimated Total</p>
                    </div>
                    <div className="Estimated-Total-amt">
                        <p>$ 233.68</p>
                    </div>
                </div>
                {!checkoutPage &&  <Button ></Button> }
               
            </section>
        </section>
    )

}
export default PricingSummary;