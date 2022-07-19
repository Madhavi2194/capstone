import HorizontalBar from "Components/horizontalBar/horizontalbar";
import React from "react";
import "./homeBanner.scss";
import { NavLink } from "react-router-dom";


const HomeBanner = () => {
    return (
        <div className="container homeBanner-container">
            <div className="aem-Grid aem-Grid--12 position-relative">
                <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 image-sec-right">
                    <div className="banner-image-sec"></div>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 banner-content-sec">
                    <div className="display-xl-24- mb-8">
                        <div><b>Take off in the new</b></div>
                        <div><b>Signature Legging</b></div>
                    </div>
                    <div className="regular-heading-20 mb-16">Lorem Ipsum Dolor Tempor</div>
                    <div className="regualr-heading-16 mb-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna.</div>
                    <div className="button-wrapper">
                        <NavLink to={'/product'}>
                        <button className="btn button-shop">SHOP COLLECTION</button>
                        </NavLink>
                        <NavLink to={'/product'}>
                            <button className=" btn button-shopnow">SHOP NOW</button>
                        </NavLink>
                    </div>
                  
                      <HorizontalBar/>
                   
                    
                </div>


                
            </div>
            
        </div>
        
        
    )
}

export default HomeBanner;