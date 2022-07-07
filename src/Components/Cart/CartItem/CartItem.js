import React from "react";
import { useSelector } from "react-redux/es/exports";
import { useState } from "react";
import '../CartItem/CartItem.scss';
import minus from '../../../assests/minus-circle.png';
import plus from '../../../assests/plus-circle.png';
import save from '../../../assests/heart.png';
import edit from '../../../assests/edit-2.png';
import trash from '../../../assests/trash-2.png';
import elipsis from '../../../assests/more-horizontal.png';
import PricingSummary from "../PriceSummary/PriceSummary";
import Accordion from "../Accordion/accordion";


function CartItem() {

    const addCart = useSelector((state) => state.cart.cart);
    //Quantity IncDec start
    const [num, setQuantity] = useState(1);

    const handleDecrement = () => {
        if (num > 1) {
            setQuantity(prevCount => prevCount - 1);

        }
    }

    const handleIncrement = () => {
        if (num < 10) {
            setQuantity(prevCount => prevCount + 1);
        }
    }


    const accordionData = [
        {
          title: 'Estimate your Shipping ',
          content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`,
          subcontent:`Shipping to 91001`
        },
        {
          title: 'Enter a Coupon Code ',
          content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
          reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
          quaerat iure quos dolorum accusantium ducimus in illum vero commodi
          pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
          quidem maiores doloremque est numquam praesentium eos voluptatem amet!
          Repudiandae, mollitia id reprehenderit a ab odit!`,
          subcontent:`20% discount applied`
        },
        {
          title: 'Apply Gift Card ',
          content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`
          
        }
      ];

    const ProductList = (product) => {
        let total = +(product.price * product.quantity);

        return (
            <section key={product.id}>
                <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                    <div  className="cart-section  aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--1 ">
                        <img src={product.image} className="cartimg" alt={product.title} />
                        <div >
                            <h5>{product.title}</h5>
                            <p> Size: Medium</p>
                            <p> Color: Black</p>
                            <p>Total: ${total}</p>
                            <div className="quantity-cart display-block-sm">
                                <div className="visible_flex-display margin-cart">
                                    <span type="button" onClick={handleDecrement} className="input-grp-txt"><img src={minus} className="minuscount-img-cart" alt="decrement" /></span>
                                    <div className="count-box">
                                        <input type="text" className="form-control quantity-button-mobile" value={product.quantity} />
                                    </div>
                                    <span type="button" onClick={handleIncrement} className="input-grp-txt"><img src={plus} className="pluscount-img-cart" alt="incerement-icon" /></span>
                                </div>
                            </div>
                        </div>
                        <div className="action-section-mobile display-block-sm">
                            <img src={elipsis} alt="elipsis" />
                        </div>

                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--1 cart-quantity-details">
                        <div className="quantity-cart visible_lg_block">
                            <span type="button" onClick={handleDecrement} className="input-grp-txt"><img src={minus} className="minuscount-img-cart" alt="decrement" /></span>
                            <div className="count-box">
                                <input type="text" className="form-control  quantity-btn" value={product.quantity} />
                            </div>
                            <span type="button" onClick={handleIncrement} className="input-grp-txt"><img src={plus} className="pluscount-img-cart" alt="increment-icon" /></span>
                        </div>

                        <div className="action-section display-block-lg">
                            <div className="action-edit">
                                <span><img src={edit} className="edit-img" alt="edit-icon" /></span>  &nbsp;
                                <span>Edit</span>
                            </div>
                            <div className="action-delete">
                                <span><img src={trash} className="edit-img" alt="delete-icon" /></span> &nbsp;
                                <span>Delete</span>
                            </div>
                            <div className="action-wishlist">
                                <span><img src={save} className="edit-img" alt="delete-icon" /></span> &nbsp;
                                <span>Save for later</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        );
    };

    return (
        <section className="ui grid container">
            <div className="shopping-cart-container">
                <>
                    <section>
                        <div className="mb-16">
                            <div className="display-l-36- text-center">Your Shopping Bag</div>
                            <div className="horizontal-bar"></div>
                        </div>
                        <div className="cart-section-details aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                            <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--1">
                                {addCart.map(ProductList)}


                                <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
                                    
                                    <div className="accordion">
                                    {accordionData.map(({ title, content, subcontent }) => (
                                    <Accordion title={title} content={content}subcontent={subcontent} />
                                    ))}
                                </div>
                                </div>
                            </div>

                            <div className=" aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--1">
                                <div className="pricing">
                                    <PricingSummary />
                                </div>
                            </div>
                        </div>

                    </section>

                </>
            </div>
        </section>
    );




}
export default CartItem;