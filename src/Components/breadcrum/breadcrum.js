import React, { Component } from "react";
import "./breadcrum.scss";
import { useSelector } from "react-redux";

function Breadcrum() {
    const productsMain = useSelector(store => store.productlistlength);
  

    return (
        <div className="container">
            <div className="aem-Grid aem-Grid--12 ">
                {window.location.href.split("/")[
                    window.location.href.split("/").length - 1
                ] == "all" && (
                        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4 aem-GridColumn--phone--12 px-20">
                            All
                        </div>
                    )}
                {window.location.href.split("/")[
                    window.location.href.split("/").length - 1
                ] == "women" && (
                        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4 aem-GridColumn--phone--12 px-20">
                            clothing / Women's / Outwear
                        </div>
                    )}
                {window.location.href.split("/")[
                    window.location.href.split("/").length - 1
                ] == "men" && (
                        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4 aem-GridColumn--phone--12 px-20">
                            clothing / Men's / Outwear
                        </div>
                    )}
                {window.location.href.split("/")[
                    window.location.href.split("/").length - 1
                ] == "electronic" && (
                        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4 aem-GridColumn--phone--12 px-20">
                            Electronic's
                        </div>
                    )}
                {window.location.href.split("/")[
                    window.location.href.split("/").length - 1
                ] == "jewellery" && (
                        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4 aem-GridColumn--phone--12 px-20">
                            Jewellery
                        </div>
                    )}
                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4 aem-GridColumn--phone--12 text-center">
                    {productsMain} Results
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
    );

}
export default Breadcrum;