import React from 'react';
import "./orderitem.scss";


const Orderitem = (product) => {

    return (
        <section className='container '  key={product.id}>
            <div className='order-item-wrapper'>
                <b>
                    1 Item in your order
                </b>
                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 aem-GridColumn--tablet--12 ">
                    <div className='aem-Grid aem-Grid--12'>
                        <div className='aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4 aem-GridColumn--phone--4 order-item'>
                            <figure>
                                <img className="order-img" src={require("../../../assests/tshirt.jpg")} width="100px" />
                            </figure>
                        </div>
                        <div className='aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--8 aem-GridColumn--phone--8'>
                            <h4>{product.title}</h4>
                            <div>Size: xs</div>
                            <div>Color: black</div>
                            <div>Quantity: 2</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Orderitem;