import React from "react";
import "./homebannerSection.scss";
import mappin from "../../assests/map-pin.svg";
import { NavLink } from "react-router-dom";



const HomebannerSection = () =>{
return(
   

    <div className="container">
        <div className="product-banner-wrapper">
          <div className="product-banner-image">
               <img alt="banner-img" src={require("../../assests/hikings.jpg")} width="100%" height="100%" />
            </div>
           <div className="product-banner-conquer">
            <h2> Conquer your Next Adventure</h2>
            <div className="subheading mb-32">lorem ipsum</div>
            <NavLink to={'/product'}>
                <button className="banner-button">SHOP DEVICES</button>
           </NavLink>

           </div>
            <div className="product-banner-mappin">
            <img src={mappin} className="mb-8" alt ="locationpin"/>
            <div className="product-horizontal-bar"></div>
            
            </div>
        </div>
    </div>
)
}

export default HomebannerSection;