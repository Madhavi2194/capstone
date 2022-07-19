import React from 'react';
import "./orderitem.scss";
import { useSelector } from 'react-redux';


const Orderitem = () => {
    const product = useSelector((state) => state.cart.cart);
    console.log(product,"ayui");

    return (
        <section className='container'>
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
        </section>
    );
};

export default Orderitem;