import React, { useState }  from "react";
import "./shippingMethod.scss";
import edit from '../../../assests/edit-orange.svg';
import { useForm} from 'react-hook-form';

    const ShippingMethod = (props) => {
    const [isEditMode , toggleEditMode] = useState(true);
    const {handleSubmit } = useForm({ shouldUnregister: false });

    const onSubmit = (data) => {
        toggleEditMode(false);
        props.clickContinue();
        console.log("b",data); 
    } 
    const onEdit =() =>{
        toggleEditMode(true);
    }
   
    return (
        <div className="mb-24">
           {isEditMode ? <section className="shipping-method-wrapper container mb-24">
                <div >
                    <div className="shipmethod-heading">
                        <h2><b>2. Shipping Method</b></h2>
                    </div>
                    <div className="radio-btn">
                        <form className="shipping-method-form-section" onSubmit={handleSubmit(onSubmit)}>
                            <div className="first-btn">
                                <input type="radio" id="html" name="fav_language" value="HTML" className="shipping-radio-btn" />
                                <label htmlFor="html" className="shipping-method-btn-txt">Standard Shipping (4-8 business days via USPS) FREE</label>
                            </div>
                            <div className="first-btn">

                                <input type="radio" id="html" name="fav_language" value="HTML" className="shipping-radio-btn" />
                                <label htmlFor="html" className="shipping-method-btn-txt">Express Delivery (2-5 business days via USPS) $17.95</label>
                            </div>
                            <div className="first-btn">

                                <input type="radio" id="html" name="fav_language" value="HTML" className="shipping-radio-btn" />
                                <label htmlFor="html" className="shipping-method-btn-txt">Next Day Delivery (Next business days via FedEx) $53.61</label>
                            </div>

                            <div className='text-btn-center'>
                                <button className="btn shipmethod-btn display-block-sm">Continue</button>
                                <button className="btn shipmethod-btn display-block-lg">Continue To Payment</button>
                            </div>
                        </form>
                    </div>
                    

                    <hr />
                </div>

            </section> :

            <section className='paymentinfo-Readonly container'>
                <div className=' paymentinfo-border'>
                    <div className="paymentreadonly-Heading  mb-16">
                        <div><h2><b>Shpping Method</b></h2></div>
                        <div>
                            <span><img src={edit} className="edit-image" alt="editicon" onClick={()=>onEdit()} /></span> &nbsp;
                            <span className="visible_sm_none">Edit</span>
                        </div>
                    </div>
                    <div className="aem-Grid aem-Grid--12 user-details-section">
                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                            <div>
                                Standard Shipping
                            </div>
                            <div>Est. delivery in 4-8 Business days</div>
                            <div>Free</div>
                        </div>

                    </div>
                </div>
            </section> }
        </div>
    );
};

export default ShippingMethod;