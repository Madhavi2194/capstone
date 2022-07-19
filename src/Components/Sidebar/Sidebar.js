import React from "react";
import './Sidebar.scss';
import { useState } from "react";

 const Sidebar = () => {
    const [show, setShow] =useState(false);
  
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
                                <label htmlFor="option1">X-small</label>
                            </li>
                            <li>
                                <input type="checkbox" id="option2" name="option2" value="Option2" />
                                <label htmlFor="option2">Small</label>
                            </li>
                            <li>
                                <input type="checkbox" id="option3" name="option3" value="Option3" />
                                <label htmlFor="option3">Medium</label>
                            </li>
                            <li>
                                <input type="checkbox" id="option4" name="option4" value="Option4" />
                                <label htmlFor="option4">Large</label>
                            </li>
                            <li>
                                <input type="checkbox" id="option5" name="option5" value="Option5" />
                                <label htmlFor="option5">X-Large</label>
                            </li>
                        </ul>

                        <p className="border-line">
                            <a href="#">Show More</a>
                        </p>
                    </div>
                    <div className="filter-section">
                        <p>Style</p>
                        <ul>
                            <li>
                                <input type="checkbox" id="option6" name="option6" value="Option6" />
                                <label htmlFor="option6">Outdoor</label>
                            </li>
                            <li>
                                <input type="checkbox" id="option7" name="option7" value="Option7" />
                                <label htmlFor="option7">Casual</label>
                            </li>
                            <li>
                                <input type="checkbox" id="option8" name="option8" value="Option8" />
                                <label htmlFor="option8">Option</label>
                            </li>
                            <li>
                                <input type="checkbox" id="option9" name="option9" value="Option9" />
                                <label htmlFor="option9">Option</label>
                            </li>
                            <li>
                                <input type="checkbox" id="option10" name="option10" value="Option10" />
                                <label htmlFor="option10">Option</label>
                            </li>
                            <li className="border-line">
                                <input type="checkbox" id="option11" name="option11" value="Option11" />
                                <label htmlFor="option11" className="option-text ">Option</label>
                            </li>
                        </ul>
                    </div>
                    <div className="sidebar-colors-wrapper">
                        <p>Color</p>
                        <div className="sidebar-colors-section border-line">
                            <div className="black-color"></div>
                            <div className="white-color"></div>
                            <div className="teal-green"></div>
                            <div className="mustard-color"></div>
                            <div className="blue-color"></div>
                            <div className="red-color"></div>
                            <div className="lavender-color"></div>
                            <div className="pink-color"></div>
                            <div className="dark-yellow"></div>
                            <div className="multi-color"></div>                      
                        </div>
                    </div>
                    <div className="filter-section">
                        <p>Brand</p>
                        <ul>
                            <li>
                                <input type="checkbox" id="option12" name="option12" value="Option12" />
                                <label htmlFor="option12">Veramoda</label>
                            </li>
                            <li>
                                <input type="checkbox" id="option13" name="option13" value="Option13" />
                                <label htmlFor="option13">Prada</label>
                            </li>
                            <li>
                                <input type="checkbox" id="option14" name="option14" value="Option14" />
                                <label htmlFor="option14">Gucci</label>
                            </li>
                            <li>
                                <input type="checkbox" id="option15" name="option15" value="Option15" />
                                <label htmlFor="option15">Dior</label>
                            </li>
                            <li>
                                <input type="checkbox" id="option16" name="option16" value="Option16" />
                                <label htmlFor="option16">Marni</label>
                            </li>
                            <li>
                                <input type="checkbox" id="option17" name="option17" value="Option17" />
                                <label htmlFor="option17">Calvein Klein</label>
                            </li>
                            <li>
                                <input type="checkbox" id="option18" name="option18" value="Option18" />
                                <label htmlFor="option18">Rag & Bone</label>
                            </li>
                        </ul>
                    </div>
                </div>:null }

           <div className="desktop display-block-lg">
           <div className="filter-heading">Filters</div>
                     <div className="filter-section">                   
                        <p>Size</p>
                        <ul>
                            <li>
                                <input type="checkbox" id="option19" name="option19" value="Option19" />
                                <label htmlFor="option19">X-small</label>
                            </li>
                            <li>
                                <input type="checkbox" id="option20" name="option20" value="Option20" />
                                <label htmlFor="option20">Small</label>
                            </li>
                            <li>
                                <input type="checkbox" id="option21" name="option21" value="Option21" />
                                <label htmlFor="option21">Medium</label>
                            </li>
                            <li>
                                <input type="checkbox" id="option22" name="option22" value="option22" />
                                <label htmlFor="option22">Large</label>
                            </li>
                            <li>
                                <input type="checkbox" id="option23" name="option23" value="option23" />
                                <label htmlFor="option23">X-Large</label>
                            </li>
                        </ul>

                        <p className="border-line">
                            <a href="#">Show More</a>
                        </p>
                    </div>
                    <div className="filter-section">
                        <p>Style</p>
                        <ul>
                            <li>
                                <input type="checkbox" id="option24" name="option24" value="option24" />
                                <label htmlFor="option24">Outdoor</label>
                            </li>
                            <li>
                                <input type="checkbox" id="option25" name="option25" value="option25" />
                                <label htmlFor="option25">Casual</label>
                            </li>
                            <li>
                                <input type="checkbox" id="option26" name="option26" value="option26" />
                                <label htmlFor="option26">Option</label>
                            </li>
                            <li>
                                <input type="checkbox" id="option27" name="option27" value="option27" />
                                <label htmlFor="option27">Option</label>
                            </li>
                            <li>
                                <input type="checkbox" id="option28" name="option28" value="option28" />
                                <label htmlFor="option28">Option</label>
                            </li>
                            <li className="border-line">
                                <input type="checkbox" id="option29" name="option29" value="Option29" />
                                <label htmlFor="option29" className="option-text ">Option</label>
                            </li>
                        </ul>
                    </div>
                    <div className="sidebar-colors-wrapper">
                        <p>Color</p>
                        <div className="sidebar-colors-section border-line">
                            <div className="black-color"></div>
                            <div className="white-color"></div>
                            <div className="teal-green"></div>
                            <div className="mustard-color"></div>
                            <div className="blue-color"></div>
                            <div className="red-color"></div>
                            <div className="lavender-color"></div>
                            <div className="pink-color"></div>
                            <div className="dark-yellow"></div>
                            <div className="multi-color"></div>                      
                        </div>
                    </div>
                    <div className="filter-section">
                        <p>Brand</p>
                        <ul>
                            <li>
                                <input type="checkbox" id="option30" name="option30" value="Option30" />
                                <label htmlFor="option30">Veramoda</label>
                            </li>
                            <li>
                                <input type="checkbox" id="option31" name="option31" value="Option31" />
                                <label htmlFor="option31">Prada</label>
                            </li>
                            <li>
                                <input type="checkbox" id="option32" name="option32" value="Option32" />
                                <label htmlFor="option32">Gucci</label>
                            </li>
                            <li>
                                <input type="checkbox" id="option33" name="option33" value="Option33" />
                                <label htmlFor="option33">Dior</label>
                            </li>
                            <li>
                                <input type="checkbox" id="option34" name="option34" value="Option34" />
                                <label htmlFor="option34">Marni</label>
                            </li>
                            <li>
                                <input type="checkbox" id="option35" name="option35" value="Option35" />
                                <label htmlFor="option35">Calvein Klein</label>
                            </li>
                            <li>
                                <input type="checkbox" id="option36" name="option36" value="option36" />
                                <label htmlFor="option36">Rag & Bone</label>
                            </li>
                        </ul>
                    </div>
                </div>  
            </section>
        )
    
}

export default Sidebar;