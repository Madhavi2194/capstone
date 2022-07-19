
import React, { useState } from 'react';
import "./paymentInfo.scss";
import edit from '../../../assests/edit-orange.svg';
import { useForm} from 'react-hook-form';


const PaymentInfo = (props) => {
    const [isEditMode , toggleEditMode] = useState(true); 
   
    const {handleSubmit } = useForm({ shouldUnregister: false });

    const onSubmit = (data) => {
        toggleEditMode(false);
        
        console.log("a",data); 
    }

    const onEdit= () =>{
        toggleEditMode(true);
    }
    
    return (
        <div className='mb-24'>
            {isEditMode ? <section className="payment-method-wrapper container">

                <div className="shipmethod-heading">
                    <h2><b> 2. Payment Information </b></h2>
                </div>

                <div className="payment-information-Form-Section">
                    <form name="payment-information-Form" className="payment-information-Form" onSubmit={handleSubmit(onSubmit)}>
                        <div className='aem-Grid aem-Grid--12'>
                            <div className="payment-selection">
                                <input type="radio" id="credit-payment" name="credit-payment"
                                    value="credit-payment" className='payment-input-btn ' />
                                <label htmlFor="credit-payment" className="payment-info-Labels">Credit</label><br></br>
                            </div>

                            <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                                <div className="form-group">
                                    <label className="checkout-lable">
                                        Name on Card
                                    </label>
                                    <input className="checkout-input-box" type="text" id="lname" name="lname" />
                                </div>
                            </div>

                            <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                                <div className="form-group">
                                    <label className="checkout-lable">
                                        Credit Card Number
                                    </label>
                                    <input className="checkout-input-box" type="text" id="lname" name="lname" />
                                </div>
                            </div>

                            <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4 aem-GridColumn--phone--12'>
                                <div className="form-group">
                                    <label className="checkout-lable" htmlFor=""> Expiration Date</label>
                                    <input className="checkout-input-box" type="text" id="lname" name="lname" />
                                </div>
                            </div>

                            <div className='aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--tablet--2 aem-GridColumn--phone--12'>
                                <div className="form-group">
                                    <label className="checkout-lable" htmlFor=""> CVV</label>
                                    <input className="checkout-input-box" type="text" id="lname" name="lname" />
                                </div>
                            </div>

                            <div className='aem-GridColumn aem-GridColumn--default--12 '>
                                <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                                    <div className="visible_flex-display mb-32">
                                        <input type="checkbox" id="billing-address" name="billing-address" value="Bill Address" className="payment-input-btn" checked />
                                        <label htmlFor="billing-address" className="payment-info-Labels">Billing adress same as shipping address</label><br></br>
                                    </div>
                                </div>
                            </div>

                        </div>
                   
                    <div className="checkout-shipping_payment-method"></div>
                    <hr />
                    <div className="visible_flex-display margin-24">
                        <input type="radio" id="credit-payment" name="paypal-payment"
                            value="paypal-payment" className='payment-input-btn ' />
                        <label htmlFor="paypal-payment" className="payment-info-Labels">Paypal</label><br></br>

                    </div>
                    <hr />
                    <div className='text-btn-center'>
                        <button className="btn shipmethod-btn display-block-sm" >Continue</button>
                        <button className="btn shipmethod-btn display-block-lg"  >Continue To Review Order</button>
                    </div>
                    </form>
                </div>



            </section> :

            <section className='paymentinfo-Readonly container'>
                <div className=' paymentinfo-border'>
                <div className="paymentreadonly-Heading ">
                    <div><h2><b>Payment Information</b></h2></div>
                    <div>
                        <span><img src={edit} className="edit-image" alt="editicon" onClick={()=>onEdit()}/></span> &nbsp;
                        <span className="visible_sm_none">Edit</span>
                    </div>
                </div>
                <div className="aem-Grid aem-Grid--12 user-details-section">
                    <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                        <div>
                           Credit Card
                        </div>
                        <div>Visa end with 3654</div>
                    </div>
                    
                </div>
                </div>
            </section> }

        </div>

    );
};

export default PaymentInfo;