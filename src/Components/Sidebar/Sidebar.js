import React from "react";
import './Sidebar.scss';
import { useState } from "react";

 const Sidebar = () => {
    const [show, setShow] =useState(false);
    // const products = useSelector((state) => state.allProducts.products);
  
        return (
            <section className="sidebar">
                <div>
                <div className="pd-32 aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4 aem-GridColumn--phone--12 text-center  visible_lg_none " >
                    <span onClick={()=>setShow(!show)}><img alt="slider-image" className = "sort_arrow" src={require("../../assests/sliders.png")}/> Filter Results</span> &nbsp; &nbsp;
                    <span><img alt="arrow-icon" src= {require("../../assests/arrow-up.png")}/> <img  alt="arrowdown-icon" src= {require("../../assests/arrow-down.png")}/> Sort Products </span>
                </div>

                <div className="pd-32 aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--4 aem-GridColumn--phone--12 text-center visible_sm_none ">
                    <span><img alt="slider-image" className = "sort_arrow" src={require("../../assests/sliders.png")}/> Filter Results</span> &nbsp; &nbsp;
                    <span><img alt="arrow-icon" src= {require("../../assests/arrow-up.png")}/> <img alt="arrowdown-icon" src= {require("../../assests/arrow-down.png")}/> Sort Products </span>
                </div>

                </div>

                { show? <div className="mobile display-block-sm">
                     <div className="filter-heading">Filters</div>
                     <div className="filter-section">                   
                        <p>Size</p>
                        <ul>
                            <li>
                                <input type="checkbox" id="option1" name="option1" value="Option1" />
                                <label htmlFor="option1">Jewellery</label>
                            </li>
                            <li>
                                <input type="checkbox" id="option2" name="option2" value="Option2" />
                                <label htmlFor="option2">Electronics</label>
                            </li>
                            <li>
                                <input type="checkbox" id="option3" name="option3" value="Option3" />
                                <label htmlFor="option3">Men's Clothing </label>
                            </li>
                            <li>
                                <input type="checkbox" id="option4" name="option4" value="Option4" />
                                <label htmlFor="option4">Women's Clothing</label>
                            </li>
                           
                        </ul>

                        
                    </div>
                    
                </div>:null }

           <div className="desktop display-block-lg">
           <div className="filter-heading">Filters</div>
                     <div className="filter-section">                   
                        <p>Category</p>
                        <ul>
                            <li>
                                <input type="checkbox" id="option19" name="option19" value="Option19" />
                                <label htmlFor="option19">Jewellery</label>
                            </li>
                            <li>
                                <input type="checkbox" id="option20" name="option20" value="Option20" />
                                <label htmlFor="option20">Electronics</label>
                            </li>
                            <li>
                                <input type="checkbox" id="option21" name="option21" value="Option21" />
                                <label htmlFor="option21">Men's Clothing</label>
                            </li>
                            <li>
                                <input type="checkbox" id="option22" name="option22" value="option22" />
                                <label htmlFor="option22">Women's Clothing</label>
                            </li>
                            
                        </ul>

                    </div>
                   
                </div>  
            </section>
        )
    
}

export default Sidebar;