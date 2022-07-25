import React from 'react';
import "./orderitem.scss";
import { useSelector } from 'react-redux';
import { useNavigate, NavLink } from "react-router-dom";


const Orderitem = (prop) => {
    const product = useSelector((state) => state.cart.cart);
    const navigate = useNavigate();

    const navigateTOordersummary = () => {
        navigate("/Ordersummary")
    }

    return (
        <section className=''>
            <div className='order-item-wrapper'>
                <b>
                    1 Item in your order
                </b>
                {product.map((val) => <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 aem-GridColumn--tablet--12 ">
                    <div className='aem-Grid aem-Grid--12'>
                        <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4 aem-GridColumn--phone--4 order-item'>
                            <figure>
                                <img className="order-img" src={val.image} width="100px" />
                            </figure>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--8 aem-GridColumn--phone--8'>
                            <h4>{val.title}</h4>
                            <div>Size: xs</div>
                            <div>Color: black</div>
                            <div>{val.quantity}</div>
                        </div>
                    </div>
                </div>)}

            </div>
            <div className='text-center mb-24'>
                <button className='btn shipmethod-btn' width={280} onClick={(navigateTOordersummary)} >PLACE ORDER</button>
            </div>

            <div className='text-center mb-125'>
                By Clicking confirm order you agree to our&nbsp;&nbsp;
                <NavLink to={'/capstone'}>Terms and Conditions</NavLink>
            </div>
        </section>
    );
};

export default Orderitem;