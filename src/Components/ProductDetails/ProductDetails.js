import React from 'react';
import './ProductDetails.scss';
import { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, addTOCart } from '../../redux/actions/productsActions';
import { useEffect } from 'react';
import Gallery from '../Gallery/Gallery';
import loader from '../../assests/loader.gif'





function ProductDetails() {
    const navigate = useNavigate();
    const { productID } = useParams();
    let product = useSelector((state) => state.product);
    const { image, title, price, description } = product;
    const dispatch = useDispatch();
    const fetchProductDetail = async (id) => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(selectedProduct(response.data));
    };

    const navigateCart = () => {
        let item = { ...product, quantity: num }
        dispatch(addTOCart(item))
        navigate("/cart")
    }

    useEffect(() => {
        if (productID) {

            fetchProductDetail(productID);
        }


    }, [productID]);

    /* Increment decrement */
    let [num, setNum] = useState(1);
    let incNum = () => {
        if (num < 10) {
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }
    let handleChange = (e) => {
        setNum(e.target.value);
    }



    return (
        <>
            {image ?
                <div >
                    <div className='productdetails-wrapper'>


                        <div className='product-wrapper'>
                            <Gallery image={image}></Gallery>
                        </div>


                        <div className='product-description'>

                            <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 px-20">
                                clothing / Women's / Outwear
                            </div>
                            <div className='regular-heading-l-20- pt-16'><b>{title}</b></div>
                            <p className='display-s-20- mb-16'>$ {price}</p>

                            <span className='mb-16'><img src={require("../../assests/heart.png")} alt="wishlist-icon" /></span>
                            <p className='regular-heading-m-16- mb-16 border-line pt-18 '>{product.description}</p>
                            <p className='product-title-detail mb-16'>Color</p>

                            <div className="sidebar-colors-section  mb-24">
                                <div className="teal-blue"><img src={require("../../assests/Swatch 01.png")} alt="color-teal-box" /></div>
                                <div className="magento-color"><img src={require("../../assests/Swatch 02.png")} alt="color-magento-box" /></div>
                                <div className="darkblack-color"><img src={require("../../assests/Swatch 03.png")} alt="color-black-box" /></div>
                                <div className="grey-color"><img src={require("../../assests/Swatch 04.png")} alt="color-grey-box" /></div>
                            </div>

                            <p className='product-title-detail mb-16'>Size</p>
                            <div className="size-section  mb-24">
                                <div className="size"> X </div>
                                <div className="size"> S </div>
                                <div className="size"> M </div>
                                <div className="size"> L </div>
                                <div className="size"> XL </div>

                            </div>
                            <section>
                                <p className='product-title-detail mb-20'>Quantity</p>
                                <div className="quantity-wrapper">
                                    <button className="minus" onClick={decNum}> </button>
                                    <input type="text" className="form-control  quantity-btn" value={num} onChange={handleChange} />
                                    <button className="plus" onClick={incNum}></button>
                                </div>
                            </section>
                            <section className='block-header'>
                                <div>
                                    <button onClick={navigateCart} className='addcart_buttom'> ADD TO CART</button>
                                    <div className='flex-display'>
                                        <div className="desc-icon"><img src={require("../../assests/heart.png")} alt="wishlist-icon" />&nbsp; Save</div>
                                        <div className="desc-icon"><img src={require("../../assests/share-2.png")} alt="share-icon" />&nbsp; Share</div>
                                    </div>
                                </div>
                            </section>

                        </div>
                    </div>

                    <div className=''>
                        <div className="aem-Grid aem-Grid--12 product-info-section productdetails-wrapper">
                            <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 mb-32">
                                <div>
                                    <h2><b>{title}</b></h2>
                                </div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--12 aem-GridColumn--phone--12  product-info-description regular-body-s-14- mb-32 mr-32">
                                <div className="block-header mb-16">
                                    <div>
                                        <b className='regular-heading-l-20-'>Description</b>
                                    </div>
                                </div>
                                <div className='md-16 regular-heading-m-16-'>{description}</div>
                            </div>

                            <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--tablet--12 aem-GridColumn--phone--12  product-info-details regular-body-s-14- mb-16">
                                <div className="block-header mb-20 ">
                                    <div><b className='regular-heading-l-20- '>Details</b></div>
                                </div>
                                <div className="aem-Grid aem-Grid--12">
                                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--6">
                                        <div className='desc-img'><img className="img-details regular-heading-m-16-" src={require("../../assests/sweat.png")} alt="sweat-icon" />&nbsp;&nbsp;Sweat-wicking</div>
                                    </div>
                                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--6">
                                        <div className='desc-img'><img className="img-details regular-heading-m-16-" src={require("../../assests/breathable.png")} alt="braethable-icon" />&nbsp;&nbsp;Breathable</div>
                                    </div>
                                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--6">
                                        <div className='desc-img'><img className="img-details regular-heading-m-16-" src={require("../../assests/feather.png")} alt="feather-icon" />&nbsp;&nbsp;Lightweight fabric</div>
                                    </div>
                                    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--6">
                                        <div className='desc-img'><img className="img-details regular-heading-m-16-" src={require("../../assests/materials.png")} alt="material-icon" />&nbsp;&nbsp;69% nylon, 31% lycra</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='bar-padding '>
                            <div className="horizontal-bar"></div>
                        </div>

                    </div>
                </div> : <center><span><img src={loader} className="loader-img" alt="loader" /></span></center>
            }
        </>
    );

}



export default ProductDetails;



