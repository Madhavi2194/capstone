import React, { useState } from 'react';
import "./shippingInfo.scss"
import edit from '../../../assests/edit-orange.svg';
import { useForm} from 'react-hook-form';

    const ShippingInfo = (props) => {
    const [isEditMode , toggleEditMode] = useState(true); 

    const {handleSubmit } = useForm({ shouldUnregister: false });

    const onSubmit = (data) => {
        toggleEditMode(false);
        props.clickContinue();
        console.log("a",data); 
    }
    const onEdit= () =>{
        toggleEditMode(true);
    }
   

    
    return (
        <>
        
        <section className='container checkout-wrapper mb-24'>
            <div className='mb-20 display-m-24-'> <b>Guest Checkout</b></div>
            <h2><b>Contact Information</b></h2>
            <p className='mb-16'>
                We'll use there details to keep you informed on your delivery.
            </p>
           {isEditMode ? <form action="" onSubmit={handleSubmit(onSubmit)} >
                <div className='aem-Grid aem-Grid--12'>
                    <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                        <div className="form-group">
                            <label className="checkout-lable" htmlFor="email">E-mail Address</label>
                            <input type="text" className="checkout-input-box" id="email" placeholder="Enter Your E-mail Address"
                            />
                        </div>
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                        <div className="form-group">
                            <label className="checkout-lable" htmlFor="phone">Phone Number</label>
                            <input type="text" className="checkout-input-box" id="phone" placeholder="Enter Your Phone Number" />
                        </div>
                    </div>

                    <h2><b>1. Shipping Information</b></h2>
                    <div className='aem-GridColumn aem-GridColumn--default--12 '>
                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 w-50'>
                            <div className="form-group">
                                <label htmlFor="" className='checkout-lable'> Country*</label>
                                <select className="checkout-selectbox" id="country-select-box-id" name="country"><option value="" hidden="" disabled="">select</option>
                                    <option value="India">India</option>
                                    <option value="United States of America">United States of America</option>
                                    <option value="United Arab Emirates">United Kingdom</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                        <div className="form-group">
                            <label className="checkout-lable">
                                First Name
                            </label>
                            <input className="checkout-input-box" type="text" id="lname" name="lname" />
                        </div>
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                        <div className="form-group">
                            <label className="checkout-lable">
                                Last Name
                            </label>
                            <input className="checkout-input-box" type="text" id="lname" name="lname" />
                        </div>
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                        <div className="form-group">
                            <label className="checkout-lable">
                                Street Address
                            </label>
                            <input className="checkout-input-box" type="text" id="lname" name="lname" />
                        </div>
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                        <div className="form-group">
                            <label className="checkout-lable">
                                Street Address 2
                            </label>
                            <input className="checkout-input-box" type="text" id="lname" name="lname" />
                        </div>
                    </div>

                    <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                        <div className="form-group">
                            <label className="checkout-lable">
                                City
                            </label>
                            <input className="checkout-input-box" type="text" id="lname" name="lname" />
                        </div>
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4 aem-GridColumn--phone--12'>
                        <div className="form-group">
                            <label className="checkout-lable" htmlFor=""> State</label>
                            <select className="checkout-selectbox" id="country-select-box-id" name="country"><option value="" hidden="" disabled="">select</option>
                                <option value="India">Maharashtra</option>
                                <option value="United States of America">Uttrakhand</option>
                                <option value="United Arab Emirates">Bihar</option>
                            </select>
                        </div>
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--tablet--2 aem-GridColumn--phone--12'>
                        <div className="form-group">
                            <label className="checkout-lable" htmlFor=""> Zip</label>
                            <input className="checkout-input-box" type="text" id="lname" name="lname" />
                        </div>
                    </div>




                </div>
                <div className='text-btn-center'>
                    <button className="btn shopping-btn-mb display-block-sm" >Continue</button>
                    <button className="btn shopping-btn display-block-lg" >Continue To shipping Method</button>
                </div>


            </form> : 

            <section className='Shippinginfo-Readonly shippinginfor-border'>
                <div className="shippingreadonly-Heading  mb-16">
                    <div><h2><b>Shipping Information</b></h2></div>
                    <div>
                        <span><img src={edit} className="edit-image" alt="editicon" onClick={()=>onEdit()} /></span> &nbsp;
                        <span className="visible_sm_none">Edit</span>
                    </div>
                </div>
                <div className="aem-Grid aem-Grid--12 user-details-section">
                    <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                        <div>
                            q_farhan@gmail.com
                        </div>
                        <div>+1 (555) 229-3367</div>
                    </div>
                    <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                        <div>
                            Qadim Farhan <br />1098 Wapello Street<br /> Altadena, California 91001<br /> United States
                        </div>
                    </div>
                </div>

            </section> }
           
        </section>
        </>
    );
};

export default ShippingInfo;