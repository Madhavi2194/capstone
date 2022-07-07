import React, { Component } from "react";
import './breadcrum.scss';

class Breadcrum extends Component {
    render(){
        return(
           <div className="container">
           <div className="aem-Grid aem-Grid--12 ">
                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4 aem-GridColumn--phone--12 px-20">
                    clothing / Women's / Outwear
                </div>

                

                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4 aem-GridColumn--phone--12 text-center">
                    38 Results
                </div>

                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4 aem-GridColumn--phone--12 visible_lg_block text-right display-lg-block">
                    <select className="selectbox-wrapper ">
                        <option>Sort by latest</option>
                        <option>Latest</option>
                        <option>Best Match</option>
                    </select>
                </div>

  
                
           </div>
           
           </div>
        )

    }
}

export default Breadcrum;