import React, { useState } from 'react';
import "./shippingInfo.scss"
import edit from '../../../assests/edit-orange.svg';
import { useForm } from 'react-hook-form';
import { useSelector ,useDispatch} from 'react-redux';
import { setshippingInfo } from 'redux/actions/shippingInfo'; 


const ShippingInfo = (props) => {
    const [isEditview, toggleEditMode] = useState(true);
    const shippingInfo_Store = useSelector((state) => state.shippingInfo.shippingInfo);
    const [FinalData,Set_FinalData] = useState(shippingInfo_Store);
    const [ShippingInfo_state,Set_ShippingInfo_state]  = useState(FinalData);
    const [formErrors,setFormErrors]  = useState();

    let dispatch = useDispatch();
    const { handleSubmit } = useForm({ shouldUnregister: false });

    const onSubmit = (data) => {
       
        if(isFormfill()){
        
        toggleEditMode(false);
        props.clickContinue();
        console.log("a", data);
        dispatch(setshippingInfo(ShippingInfo_state))
        setFormErrors(validate(ShippingInfo_state));
        }
        
    }

    const onEdit = () => {
        toggleEditMode(true);
    }
 
    const isFormfill = () => {
        let flag = true;
        for (let key in FinalData) {
            if (key !== "streetadr2" && !FinalData[key]) {
                flag = false;
                break;
             }
        }
         return flag;

    }

    const validate = (ev) =>{
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        let StringRegExp = /^[A-Za-z ]+$/;
        let phoneNumRegExp = /^[6-9]\d{9}$/;
        let zipcodeExp = /[1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{3}\\s[0-9]{3}/
        
        let {value, name} = ev.target;
    
        Set_ShippingInfo_state(
            (pre) => {
                return{
                    ...pre ,
                    [name] : value,
                }
             
            }
        )
        
        if ((name === "email" && regex.test(value)) ||
        (name === "phoneno" && phoneNumRegExp.test(value)) ||
        (name === "zip" && zipcodeExp.test(value)) ||
        ((name === "fname" || name === "lname" || name === "city" || name ==="country" || name ==="streetadr" || name ==="streetadr2"  || name ==="state" ) && StringRegExp.test(value))) {
            setFormdata(ev);
        }
        else{
            ev.target.value = "";
            setFormdata(ev) 
        }

        setFormdata(ev) 
    }

    const setFormdata = (ev) =>{
        let {value, name} = ev.target;
        Set_FinalData(
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
                {isEditview ? <form action="" onSubmit={handleSubmit(onSubmit)}  >
                    <div className='aem-Grid aem-Grid--12'>
                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                            <div className="form-group">
                                <label className="checkout-lable" htmlFor="email">E-mail Address</label>
                                <input type="text" className="checkout-input-box" id="email" placeholder="Enter  E-mail Address" name="email" value= {ShippingInfo_state.email} onChange ={validate}/>
                                <div className='erroe-msg'>{FinalData.email ? "" : "Enter Valid email"}</div>
                            </div>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                            <div className="form-group">
                                <label className="checkout-lable" htmlFor="phone">Phone Number</label>
                                <input type="number" className="checkout-input-box" id="phone" placeholder="Enter  Phone Number" name="phoneno" value ={ShippingInfo_state.phoneno} onChange ={validate}/>
                                <div className='erroe-msg'>{FinalData.phoneno ? "" : "Enter Valid Phone Number"}</div>
                            </div>
                        </div>
                        <div>
                           <h2><b>1. Shipping Information</b></h2>
                        </div>
                        
                        <div className='aem-GridColumn aem-GridColumn--default--12 '>
                            <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 w-50'>
                                <div className="form-group">
                                    <label htmlFor="" className='checkout-lable'> Country*</label>
                                    <select className="checkout-selectbox" id="country-select-box-id" name="country" value ={ShippingInfo_state.country} onChange ={validate}>
                                        <option value="" hidden="" disabled="">Select Country</option>
                                        <option value="India">India</option>
                                        <option value="United States of America">United States of America</option>
                                        <option value="United Arab Emirates">United Kingdom</option>
                                    </select>
                                    <div className='erroe-msg'>{FinalData.country ? "" : "Enter Valid Country Name"}</div>
                                </div>
                            </div>

                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                            <div className="form-group">
                                <label className="checkout-lable">
                                    First Name
                                </label>
                                <input className="checkout-input-box" type="text" id="fname" placeholder="Enter  First Name" name="fname" value ={ShippingInfo_state.fname} onChange ={validate} />
                                <div className='erroe-msg'>{FinalData.fname ? "" : "Enter Valid First Name"}</div>
                            </div>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                            <div className="form-group">
                                <label className="checkout-lable">
                                    Last Name
                                </label>
                                <input className="checkout-input-box" type="text" id="lname" placeholder="Enter  Last Name" name="lname" value ={ShippingInfo_state.lname} onChange ={validate} />
                                <div className='erroe-msg'>{FinalData.lname ? "" : "Enter Valid Last Name"}</div>
                            </div>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                            <div className="form-group">
                                <label className="checkout-lable">
                                    Street Address
                                </label>
                                <input className="checkout-input-box" type="text" id="streetadr" placeholder="Enter  Street Address" name="streetadr" value ={ShippingInfo_state.streetadr} onChange ={validate} />
                                <div className='erroe-msg'>{FinalData.streetadr ? "" : "Enter Valid Street Address"}</div>
                            </div>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                            <div className="form-group">
                                <label className="checkout-lable">
                                    Street Address 2
                                </label>
                                <input className="checkout-input-box" type="text" id="streetadr2" placeholder="Enter Your Stret Address2"  name="streetadr2" value ={ShippingInfo_state.streetadr2} onChange ={validate} />
                                <div className='erroe-msg'>{FinalData.streetadr2 ? "" : "Enter Valid Street Address"}</div>
                            </div>
                        </div>

                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                            <div className="form-group">
                                <label className="checkout-lable">
                                    City
                                </label>
                                <input className="checkout-input-box" type="text" id="city" placeholder="Enter  City Name" name="city"  value ={ShippingInfo_state.city} onChange ={validate} />
                                <div className='erroe-msg'>{FinalData.city ? "" : "Enter Valid City Name"}</div>
                            </div>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4 aem-GridColumn--phone--12'>
                            <div className="form-group">
                                <label className="checkout-lable" htmlFor=""> State</label>
                                <select className="checkout-selectbox" id="state-id" name="state" value ={ShippingInfo_state.state} onChange ={validate} >
                                    <option value="" hidden="" disabled="">Select State</option>
                                    <option value="India">Maharashtra</option>
                                    <option value="United States of America">Uttrakhand</option>
                                    <option value="United Arab Emirates">Bihar</option>
                                </select>
                                <div className='erroe-msg'>{FinalData.state ? "" : "Enter Valid State Name"}</div>
                            </div>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--tablet--2 aem-GridColumn--phone--12'>
                            <div className="form-group">
                                <label className="checkout-lable" htmlFor=""> Zip</label>
                                <input className="checkout-input-box" type="number" id="zip" placeholder="Enter Zip Code" name="zip" value ={ShippingInfo_state.zip} onChange ={validate} />
                                <div className='erroe-msg'>{FinalData.zip ? "" : "Enter Valid Zip Code"}</div>
                            </div>
                        </div>




                    </div>
                    <div className='text-btn-center'>
                        <button className="btn shopping-btn-mb display-block-sm" disabled={!isFormfill()}>Continue</button>
                        <button className="btn shopping-btn display-block-lg" disabled={!isFormfill()}>Continue To shipping Method</button>
                    </div>


                </form> :

                    <section className='Shippinginfo-Readonly shippinginfor-border'>
                        <div className="shippingreadonly-Heading  ">
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