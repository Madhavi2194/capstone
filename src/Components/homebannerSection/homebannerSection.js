import React from "react";
import "./homebannerSection.scss";
import HorizontalBar from "Components/horizontalBar/horizontalbar";
import mappin from "../../assests/map-pin.svg";


const HomebannerSection = () =>{
return(
    <div className="container position-relative">
        <div className="banner-wrapper ">
            <div className="homebanner-sider-content">
                <h2>
                    <div className="">Conquer your</div>
                    <div className="">next adventure</div>
                </h2>
                <p className="mb-32">Lorem Ipsum Dolor Tempor</p>
                <button className="banner-button">SHOP DEVICES</button>
            </div>
            
            
            <div className="homebanner-image mb-32"> </div>
        </div>
        <div className="mappin">
            <img src={mappin} className="mb-8"/>
            <HorizontalBar></HorizontalBar>
        </div>
        
    </div>
)
}

export default HomebannerSection;