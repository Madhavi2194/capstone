import HorizontalBar from "Components/horizontalBar/horizontalbar";
import React from "react";
import "./homeBanner.scss";
import { NavLink } from "react-router-dom";

const HomeBanner = () => {
    return (
        <div className=" homeBanner-container ">
            <div className="aem-Grid aem-Grid--12 position-relative container ">
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 image-sec-right">
                    <div className="banner-image-sec"></div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 banner-content-sec">
                    <section className="">
                    {/* <div className="display-xl-24- mb-8">
                        <div><b>Take off in the new</b></div>
                        <div><b>Signature Legging</b></div>
                    </div> */}
                    <h2>Take off in the new Signature Legging</h2>
                    <div className="regular-heading-20 mb-16">Get the main strategu ready</div>
                    <div className="regualr-heading-16 mb-24">An exclusive collection that will turn your style Upside Down.</div>
                   </section> 
                   <div className="button-wrapper">
                        <NavLink to={'/product/all'}>
                            <button className="btn button-shop">SHOP COLLECTION</button>
                        </NavLink>
                        <NavLink to={'/product/all'}>
                            <button className=" btn button-shopnow">SHOP NOW</button>
                        </NavLink>
                        <HorizontalBar />
                    </div>

                   
                </div>
            </div>
        </div>
    )
}

export default HomeBanner;