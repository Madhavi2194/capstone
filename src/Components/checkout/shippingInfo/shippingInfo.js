import React, { useState } from 'react';
import "./shippingInfo.scss"
import edit from '../../../assests/edit-orange.svg';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { setshippingInfo } from 'redux/actions/shippingInfo';


const ShippingInfo = (props) => {
    const [isEditview, toggleEditMode] = useState(true);
    const shippingInfo_Store = useSelector((state) => state.shippingInfo.shippingInfo);
    const [FinalData, Set_FinalData] = useState(shippingInfo_Store);
    const [ShippingInfo_state, Set_ShippingInfo_state] = useState(shippingInfo_Store);


    let dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ mode: "all", defaultValues: ShippingInfo_state });

    const onSubmit = (data) => {

        toggleEditMode(false);
        props.clickContinue();

        Set_ShippingInfo_state((p) => {
            return { ...data }
        })
        dispatch(setshippingInfo(data))
    }

    const onEdit = () => {
        toggleEditMode(true);
    }

    return (
        <>

            <section className=' checkout-wrapper mb-24'>
                <div className='mb-20 display-m-24-'> <b>Guest Checkout</b></div>
                <h2><b>Contact Information</b></h2>
                <p className='mb-16'>
                    We'll use there details to keep you informed on your delivery.
                </p>
                {isEditview ? <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className='aem-Grid aem-Grid--12'>
                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                            <div className="form-group">
                                <label className="checkout-lable" htmlFor="email">E-mail Address</label>
                                <input type="text" className="checkout-input-box" id="email" placeholder="Enter  E-mail Address" name="email"
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: 'Enter Valid Email',

                                        },
                                    })}
                                />
                                <p className='error-msg'>{errors?.email?.message}</p>
                            </div>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                            <div className="form-group">
                                <label className="checkout-lable" htmlFor="phone">Phone Number</label>
                                <input type="number" className="checkout-input-box" id="phone" placeholder="Enter  Phone Number" name="phoneno"
                                    {...register('phoneno', {
                                        required: 'Phone Number is required',
                                        pattern: {
                                            value: /^[6-9]\d{9}$/,
                                            message: 'Enter Valid Phone No',
                                        },
                                    })} />
                                <p className='error-msg'>{errors?.phoneno?.message}</p>
                            </div>
                        </div>
                        <div>
                            <h2><b>1. Shipping Information</b></h2>
                        </div>

                        <div className='aem-GridColumn aem-GridColumn--default--12 '>
                            <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 w-50'>
                                <div className="form-group">
                                    <label htmlFor="" className='checkout-lable'> Country*</label>
                                    <select className="checkout-selectbox" id="country-select-box-id" name="country"
                                        {...register('country', {
                                            required: 'Country Name is required',
                                            pattern: {
                                                value: /^[A-Za-z ]+$/,
                                                message: 'Enter Country Name',
                                            },
                                        })} >
                                        <option value="" hidden="" disabled="">Select Country</option>
                                        <option value="India">India</option>
                                        <option value="United States">United States</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="United Arab Emirates">United Arab Emirates</option>
                                    </select>
                                    <p className='error-msg'>{errors?.country?.message}</p>
                                </div>
                            </div>

                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                            <div className="form-group">
                                <label className="checkout-lable">
                                    First Name
                                </label>
                                <input className="checkout-input-box" type="text" id="fname" placeholder="Enter  First Name" name="fname"
                                    {...register('fname', {
                                        required: 'First Name is Required',
                                        pattern: {
                                            value: /^[A-Za-z ]+$/,
                                            message: 'Enter First Name',
                                        },
                                    })}
                                />
                                <p className='error-msg'>{errors?.fname?.message}</p>
                            </div>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                            <div className="form-group">
                                <label className="checkout-lable">
                                    Last Name
                                </label>
                                <input className="checkout-input-box" type="text" id="lname" placeholder="Enter  Last Name" name="lname"
                                    {...register('lname', {
                                        required: 'Last Name is Required',
                                        pattern: {
                                            value: /^[A-Za-z ]+$/,
                                            message: 'Enter Last Name',
                                        },
                                    })} />

                                <p className='error-msg'>{errors?.lname?.message}</p>
                            </div>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                            <div className="form-group">
                                <label className="checkout-lable">
                                    Street Address
                                </label>
                                <input className="checkout-input-box" type="text" id="streetadr" placeholder="Enter  Street Address" name="streetadr"
                                    {...register('streetadr', {
                                        required: 'Street Address is Required',
                                        pattern: {
                                            value: /^[A-Za-z ]+$/,
                                            message: 'Enter Street Address',
                                        },
                                    })} />

                                <p className='error-msg'>{errors?.streetadr?.message}</p>

                            </div>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                            <div className="form-group">
                                <label className="checkout-lable">
                                    Street Address 2
                                </label>
                                <input className="checkout-input-box" type="text" id="streetadr2" placeholder="Enter Your Stret Address2" name="streetadr2"
                                    {...register('streetadr2', {
                                        required: 'Street Address is Required',
                                        pattern: {
                                            value: /^[A-Za-z ]+$/,
                                            message: 'Enter Street Address',
                                        },
                                    })} />
                                <p className='error-msg'>{errors?.streetadr2?.message}</p>
                            </div>
                        </div>

                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                            <div className="form-group">
                                <label className="checkout-lable">
                                    City
                                </label>
                                <input className="checkout-input-box" type="text" id="city" placeholder="Enter  City Name" name="city"
                                    {...register('city', {
                                        required: 'City Name is Required',
                                        pattern: {
                                            value: /^[A-Za-z ]+$/,
                                            message: 'Enter City Name',
                                        },
                                    })} />
                                <p className='error-msg'>{errors?.city?.message}</p>
                            </div>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4 aem-GridColumn--phone--12'>
                            <div className="form-group">
                                <label className="checkout-lable" htmlFor=""> State</label>
                                <select className="checkout-selectbox" id="state-id" name="state"
                                    {...register('state', {
                                        required: 'State Name is Required',
                                        pattern: {
                                            value: /^[A-Za-z ]+$/,
                                            message: 'Enter State Name',
                                        },
                                    })} >
                                    <option value="" hidden="" disabled="">Select State</option>
                                    <option value="AP">Andhra Pradesh</option>
                                    <option value="AN">Andaman and Nicobar Islands</option>
                                    <option value="AP">Andhra Pradesh</option>
                                    <option value="AR">Arunachal Pradesh</option>
                                    <option value="AS">Assam</option>
                                    <option value="BR">Bihar</option>
                                    <option value="CH">Chandigarh</option>
                                    <option value="CT">Chhattisgarh</option>
                                    <option value="DN">Dadra and Nagar Haveli</option>
                                    <option value="DD">Daman and Diu</option>
                                    <option value="DL">Delhi</option>
                                    <option value="GA">Goa</option>
                                    <option value="GJ">Gujarat</option>
                                    <option value="HR">Haryana</option>
                                    <option value="HP">Himachal Pradesh</option>
                                    <option value="JK">Jammu and Kashmir</option>
                                    <option value="JH">Jharkhand</option>
                                    <option value="KA">Karnataka</option>
                                    <option value="KL">Kerala</option>
                                    <option value="LA">Ladakh</option>
                                    <option value="LD">Lakshadweep</option>
                                    <option value="MP">Madhya Pradesh</option>
                                    <option value="MH">Maharashtra</option>
                                    <option value="MN">Manipur</option>
                                    <option value="ML">Meghalaya</option>
                                    <option value="MZ">Mizoram</option>
                                    <option value="NL">Nagaland</option>
                                    <option value="OR">Odisha</option>
                                    <option value="PY">Puducherry</option>
                                    <option value="PB">Punjab</option>
                                    <option value="RJ">Rajasthan</option>
                                    <option value="SK">Sikkim</option>
                                    <option value="TN">Tamil Nadu</option>
                                    <option value="TG">Telangana</option>
                                    <option value="TR">Tripura</option>
                                    <option value="UP">Uttar Pradesh</option>
                                    <option value="UT">Uttarakhand</option>
                                    <option value="WB">West Bengal</option>
                                </select>
                                <p className='error-msg'>{errors?.state?.message}</p>
                            </div>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--tablet--2 aem-GridColumn--phone--12'>
                            <div className="form-group">
                                <label className="checkout-lable" htmlFor=""> Zip</label>
                                <input className="checkout-input-box" type="number" id="zip" placeholder="Enter Zip Code" name="zip"
                                    {...register('zip', {
                                        required: 'Zip Code is Required',
                                        pattern: {
                                            value: /[1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{3}\\s[0-9]{3}/,
                                            message: 'Enter Valid Zip',
                                        },
                                    })} />
                                <p className='error-msg'>{errors?.zip?.message}</p>
                            </div>
                        </div>
                    </div>

                    <div className='text-btn-center'>
                        <button className="btn shopping-btn-mb display-block-sm">Continue</button>
                        <button className="btn shopping-btn display-block-lg" >Continue To shipping Method</button>
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
                                    {ShippingInfo_state.fname} <br />{ShippingInfo_state.streetadr}<br /> {ShippingInfo_state.streetadr2}<br />{ShippingInfo_state.city} &nbsp; {ShippingInfo_state.zip}<br /> {ShippingInfo_state.state}
                                </div>
                            </div>
                        </div>

                    </section>}

            </section>
        </>
    );
};

export default ShippingInfo;