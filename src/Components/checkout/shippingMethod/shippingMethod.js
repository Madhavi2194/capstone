import React, { useState }  from "react";
import "./shippingMethod.scss";
import edit from '../../../assests/edit-orange.svg';
import { useForm} from 'react-hook-form';
import { useDispatch,useSelector } from "react-redux";
import { setshippingMethod } from "redux/actions/shippingMethod";

    const ShippingMethod = (props) => {
    const [isEditview , toggleEditMode] = useState(true);
    const {handleSubmit } = useForm({ shouldUnregister: false });

    const shippingMethod_Store = useSelector((state) => state.shippingMethod.shippingMethod);
    const [ShippingMethod_state,Set_ShippingMethod_state]  = useState(shippingMethod_Store);
    let dispatch = useDispatch();

    const onSubmit = (data) => {
        toggleEditMode(false);
        props.clickContinue();
        console.log("b",data); 
        dispatch(setshippingMethod(ShippingMethod_state))
    } 

    const setFormdata = (ev) =>{
        
        let {value, name} = ev.target;
        Set_ShippingMethod_state(
            (pre) => {
                return{
                    ...pre ,
                    [name] : value,
                }
                

            }
        )
    }
    const onEdit =() =>{
        toggleEditMode(true);
    }

   
    return (
        <div className="mb-24">
           {isEditview ? <section className="shipping-method-wrapper  mb-24">
                <div >
                    <div className="shipmethod-heading">
                        <h2><b>2. Shipping Method</b></h2>
                    </div>
                    <div className="radio-btn">
                        <form className="shipping-method-form-section" onSubmit={handleSubmit(onSubmit)}>
                            <div className="first-btn">
                                <input type="radio" id="stdshipping" className="shipping-radio-btn" name="shippingtype" checked={ShippingMethod_state.shippingtype ===  "Standard Shipping (4-8 business days via USPS) FREE"} value = "Standard Shipping (4-8 business days via USPS) FREE"  onChange ={setFormdata} />
                                <label htmlFor="html" className="shipping-method-btn-txt">Standard Shipping (4-8 business days via USPS) FREE</label>
                            </div>
                            <div className="first-btn">

                                <input type="radio" id="expdelivery"  className="shipping-radio-btn" name="shippingtype"  value="Express Delivery (2-5 business days via USPS) $17.95"   onChange ={setFormdata}/>
                                <label htmlFor="html" className="shipping-method-btn-txt">Express Delivery (2-5 business days via USPS) $17.95</label>
                            </div>
                            <div className="first-btn">

                                <input type="radio" id="nextdaydelivery" className="shipping-radio-btn" name="shippingtype"  value= "Next Day Delivery (Next business days via FedEx) $53.61"   onChange ={setFormdata}/>
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

            <section className='paymentinfo-Readonly '>
                <div className=' paymentinfo-border'>
                    <div className="paymentreadonly-Heading ">
                        <div><h2><b>Shpping Method</b></h2></div>
                        <div>
                            <span><img src={edit} className="edit-image" alt="editicon" onClick={()=>onEdit()} /></span> &nbsp;
                            <span className="visible_sm_none">Edit</span>
                        </div>
                    </div>
                    <div className="aem-Grid aem-Grid--12 user-details-section">
                        <div className='aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12'>
                            <div>
                              {ShippingMethod_state.shippingtype}
                            </div>
                            
                        </div>

                    </div>
                </div>
            </section> }
        </div>
    );
};

export default ShippingMethod;