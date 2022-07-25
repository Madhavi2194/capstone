import HorizontalBar from 'Components/horizontalBar/horizontalbar';
import React from 'react';
import Twitter from "../../../assests/twitter-white.svg";
import Facebook from "../../../assests/facebook-white.svg";
import Instagram from "../../../assests/instagram-white.svg";
import Orderitem from '../orderItem/orderitem';
import "./ordersummary.scss";
import { useSelector } from 'react-redux';

const Ordersummary = () => {
    const ProductshipData = useSelector((state) => state.shippingInfo.shippingInfo);
    const ProductshipMethoddata = useSelector((state) => state.shippingMethod.shippingMethod);
    const productpaymentData = useSelector((state) => state.paymentInfo.paymentInfo);


    return (
        <div className="container order">
            <div className='text-center'>
                <h1> Order Successful! </h1>
                <HorizontalBar />
            </div>

            <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                <div className="order__details aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--1">
                    <h2>Order Number #1700834</h2>

                    <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--1">
                            <h3><b>Shipping Information</b></h3>
                            <p>{ProductshipData.email} <br />
                                {ProductshipData.phoneno}</p>
                            <p>
                                {ProductshipData.streetadr} &nbsp; {ProductshipData.streetadr2} &nbsp;  {ProductshipData.city}<br />  {ProductshipData.zip}
                            </p>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--1">
                            <h3><b>Shipping Method</b></h3>
                            <p>{ProductshipMethoddata.shippingtype}</p>

                            <h3><b>Payment Information</b></h3>
                            <p>Credit Card Visa ending in {productpaymentData.cardno}</p>
                        </div>

                    </div>

                    <div>
                        <Orderitem />
                    </div>

                    <article>
                        <p>
                            You will also receive an email with the details and we will let you know when your order has shipped.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. For assistance call Support at 1-800-867-5309, M - F, 9am - 8pm EST.
                        </p>

                    </article>

                </div>

                <div className="adds__section aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--1">
                    <section className="aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                        <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--1">
                            <div class="ad-heading">Give us a follow to SAVE 20% on your next order.</div>
                            <div className='social__links'>

                                <img src={Instagram} />
                                <img src={Facebook} />
                                <img src={Twitter} />

                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Ordersummary;