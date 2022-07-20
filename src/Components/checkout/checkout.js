import React, { useState } from 'react';
import PricingSummary from 'Components/Cart/PriceSummary/PriceSummary';
import ShippingInfo from 'Components/checkout/shippingInfo/shippingInfo';
import ShippingMethod from 'Components/checkout/shippingMethod/shippingMethod';
import PaymentInfo from 'Components/checkout/paymentInfo/paymentInfo';
import Orderitem from './orderItem/orderitem';
import "./checkout.scss";
import { useNavigate,NavLink } from "react-router-dom";
import HorizontalBar from 'Components/horizontalBar/horizontalbar';
const SHIPPING_INFO = 'SHIPPING_INFO';
const SHIPPING_METHOD = 'SHIPPING_METHOD';
const PAYMENT_INFO = 'PAYMENT_INFO';

const Checkout = () => {
    const navigate = useNavigate();

    const navigateTOordersummary=()=>{
        navigate("/Ordersummary")
    }

   const [activeView, toggleView] = useState({
        [SHIPPING_INFO]: true,
        [SHIPPING_METHOD]: false,
        [PAYMENT_INFO]: false
    })

    const handleView = (view) => {
        const data = {
         ...activeView,
            [view]: true
        }
        toggleView(data);
        
    }
    const ViewTab = ({ sNo, tabLabel }) => (
        
        <section className='container mb-20'>
            <div className='checkout-tab inactive'>
            
            {`${sNo}. ${tabLabel}`}
        </div>
        <hr/>
        </section>
    )


    return (
        <section className='container'>
            <div className='text-center'>
                <h2 className='display-l-36- text-center margin-heading-checkout '> <b>Checkout</b></h2>
                <div className='mb-32'><HorizontalBar></HorizontalBar></div>
            </div>
            <div className="aem-Grid aem-Grid--12">
                <div className='aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--8 aem-GridColumn--phone--12'>
                    <ShippingInfo clickContinue={() => handleView(SHIPPING_METHOD)} ></ShippingInfo>
                    
                    {activeView[SHIPPING_METHOD] ? (
                        <ShippingMethod clickContinue={() => handleView(PAYMENT_INFO)} ></ShippingMethod> ) :
                        (
                            <ViewTab sNo={2} tabLabel="Shipping Method" />
                        )}

                    {activeView[PAYMENT_INFO] ? ( 
                        <PaymentInfo  clickEditMode={() => handleView(SHIPPING_METHOD)}></PaymentInfo>) :
                        (
                            <ViewTab sNo={3} tabLabel="Payment Information" />
                        )}

                     {activeView[SHIPPING_METHOD] && activeView[SHIPPING_INFO] && activeView[PAYMENT_INFO]  && 
                        <Orderitem ></Orderitem> 
                        }

                        <div className='text-center mb-24'>
                            <button className='btn shipmethod-btn'  width={280} onClick={(navigateTOordersummary)} >PLACE ORDER</button>
                        </div>

                        <div className='text-center mb-125'>
                            By Clicking confirm order you agree to our&nbsp;&nbsp;
                            <NavLink to={'/capstone'}>Terms and Conditions</NavLink>
                        </div>
                 </div>

                <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--8 aem-GridColumn--phone--12'>
                {!activeView[SHIPPING_METHOD] && !activeView[PAYMENT_INFO] && <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--5 aem-GridColumn--phone--hide ">
                    <section className='sign-in-section'>
                        <div className='aem-Grid aem-Grid--12'>
                            <div className='aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--tablet--8 aem-GridColumn--phone--6'>
                                Sign in for Express Checkout
                            </div>
                            <div className='aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--tablet--4 aem-GridColumn--phone--6'>
                                <button type="secondary" className='signin-btn'>SIGN IN</button>
                            </div>
                        </div>
                    </section>
                </div> }
                <div className='mb-16'>
                   <PricingSummary></PricingSummary>
                </div>
                   
                </div>
            </div>
        </section>
    );
};

export default Checkout;