import React, { useState } from 'react';
import "./shippingInfo.scss"
import edit from '../../../assests/edit-orange.svg';
import { useForm } from 'react-hook-form';
import { useSelector ,useDispatch} from 'react-redux';
import { setshippingInfo } from 'redux/actions/shippingInfo'; 


const ShippingInfo = (props) => {
    const [isEditMode, toggleEditMode] = useState(true);
    const shippingInfo_Store = useSelector((state) => state.shippingInfo.shippingInfo);
    const [ShippingInfo_state,Set_ShippingInfo_state]  = useState(shippingInfo_Store);
    let dispatch = useDispatch();
    const { handleSubmit } = useForm({ shouldUnregister: false });

    const onSubmit = (data) => {
        toggleEditMode(false);
        props.clickContinue();
        console.log("a", data);
        dispatch(setshippingInfo(ShippingInfo_state))
    }

    const onEdit = () => {
        toggleEditMode(true);
    }
    const setFormdata = (ev) =>{
        let {value, name} = ev.target;
        Set_ShippingInfo_state(
            (pre) => {
                return{
                    ...pre ,
                    [name] : value,
                }
             
            }
        )
    }



    return (
        <>

            <section className=' checkout-wrapper mb-24'>
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
                                <input type="text" className="checkout-input-box" id="email" placeholder="Enter Your E-mail Address" name="email" value= {ShippingInfo_state.email} onChange ={setFormdata}/>
                            </div>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                            <div className="form-group">
                                <label className="checkout-lable" htmlFor="phone">Phone Number</label>
                                <input type="number" className="checkout-input-box" id="phone" placeholder="Enter Your Phone Number" name="phoneno" value ={ShippingInfo_state.phoneno} onChange ={setFormdata}/>
                            </div>
                        </div>

                        <h2><b>1. Shipping Information</b></h2>
                        <div className='aem-GridColumn aem-GridColumn--default--12 '>
                            <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 w-50'>
                                <div className="form-group">
                                    <label htmlFor="" className='checkout-lable'> Country*</label>
                                    <select className="checkout-selectbox" id="country-select-box-id" name="country" value ={ShippingInfo_state.country} onChange ={setFormdata}>
                                        <option value="" hidden="" disabled="">select</option>
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
                                <input className="checkout-input-box" type="text" id="fname" name="fname" value ={ShippingInfo_state.fname} onChange ={setFormdata} />
                            </div>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                            <div className="form-group">
                                <label className="checkout-lable">
                                    Last Name
                                </label>
                                <input className="checkout-input-box" type="text" id="lname" name="lname" value ={ShippingInfo_state.lname} onChange ={setFormdata} />
                            </div>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                            <div className="form-group">
                                <label className="checkout-lable">
                                    Street Address
                                </label>
                                <input className="checkout-input-box" type="text" id="streetadr" name="streetadr" value ={ShippingInfo_state.streetadr} onChange ={setFormdata} />
                            </div>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                            <div className="form-group">
                                <label className="checkout-lable">
                                    Street Address 2
                                </label>
                                <input className="checkout-input-box" type="text" id="streetadr2" name="streetadr2" value ={ShippingInfo_state.streetadr2} onChange ={setFormdata} />
                            </div>
                        </div>

                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                            <div className="form-group">
                                <label className="checkout-lable">
                                    City
                                </label>
                                <input className="checkout-input-box" type="text" id="city" name="city"  value ={ShippingInfo_state.city} onChange ={setFormdata} />
                            </div>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4 aem-GridColumn--phone--12'>
                            <div className="form-group">
                                <label className="checkout-lable" htmlFor=""> State</label>
                                <select className="checkout-selectbox" id="state-id" name="state" value ={ShippingInfo_state.state} onChange ={setFormdata} >
                                    <option value="" hidden="" disabled="">select</option>
                                    <option value="India">Maharashtra</option>
                                    <option value="United States of America">Uttrakhand</option>
                                    <option value="United Arab Emirates">Bihar</option>
                                </select>
                            </div>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--tablet--2 aem-GridColumn--phone--12'>
                            <div className="form-group">
                                <label className="checkout-lable" htmlFor=""> Zip</label>
                                <input className="checkout-input-box" type="number" id="zip"  name="zip" value ={ShippingInfo_state.zip} onChange ={setFormdata} />
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
                                <span><img src={edit} className="edit-image" alt="editicon" onClick={() => onEdit()} /></span> &nbsp;
                                <span className="visible_sm_none">Edit</span>
                            </div>
                        </div>
                        <div className="aem-Grid aem-Grid--12 user-details-section">
                            <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                                <div>
                                   {ShippingInfo_state.email}
                                </div>
                                <div>{ShippingInfo_state.phoneno}</div>
                            </div>
                            <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                                <div>
                                    {ShippingInfo_state.fname} <br />{ShippingInfo_state.streetadr}<br /> {ShippingInfo_state.streetadr2}<br/>{ShippingInfo_state.city} &nbsp; {ShippingInfo_state.zip}<br /> {ShippingInfo_state.state}
                                </div>
                            </div>
                        </div>

                    </section>}

            </section>
        </>
    );
};

export default ShippingInfo;