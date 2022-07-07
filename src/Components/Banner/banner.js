import React, { Component } from "react";
import './banner.scss';

class Banner extends Component {
    render() {
        return (
             <div className="banner-container ">
                <div className="banner-wrapper visible_sm_none ">
                    
                    <div className="banner-sider-content">
                        <h2>
                        <div className="">Women's</div> <br/>
                        <div className="">Outwear</div>
                        </h2>
                    </div>
                    <div className="banner-image mb-32"> </div>
                    
               </div>
               <div className="banner-wrapper ">
                     <div className="banner-image mb-32"> </div>
                    <div className="banner-sider-content">
                        <h2>
                        <div className="">Women's</div>
                        <div className="">Outwear</div>
                        </h2>
                    </div>
                  
                    
               </div>
            </div>
        )
    }

}

export default Banner;

