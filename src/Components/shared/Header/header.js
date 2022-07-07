import React, { Component } from 'react';
import '../Header/header.scss';
import { useState } from 'react';


const Header = () =>   {
    const [show, setShow] =useState(false);
    
    return (
            <>
                <header className="container header-wrapper">
                    <nav className="">
                        <div className=" navbar visible_flex-display visible_lg_none">
                            <button className='' onClick={()=>setShow(!show)}>
                                <img className="Hamburger" alt="Hambuger" src={require("../../../assests/menu.png")} />
                            </button>
                            <div className="navbar-brand" >
                                <img className="logo-img" alt="LOGO" href="/venia" src={require("../../../assests/logo.png")} />
                            </div>

                           { show? <div className='navbar-toggle' >
                                <div className='close'>
                                    <p className="">Shop Categories</p>
                                    <img onClick={()=>setShow(!show)} src ={require("../../../assests/close.png")} alt="close-icon" />
                                </div>
                                
                                <div> 
                                    <ul className="navbar-nav display-block-sm">
                                        <li className="nav-item">
                                            Women
                                        </li>
                                        <li className="nav-item">
                                            Men 
                                        </li>
                                        <li className="nav-item">
                                            Smart Gear
                                        </li>
                                        <li className="nav-item">
                                            Accesories 
                                        </li>
                                    </ul>
                                </div>
                            </div>:null }

                            

                            <div className="nav-icons">
                                <ul>
                                    <li className="nav-icon">
                                       <img src={require("../../../assests/search.png")}  alt="search-icon"/> 
                                    </li>

                                    <li className="nav-icon">
                                       <img src={require("../../../assests/shopping-bag.png")} alt="shopbag-icon"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="visible_sm_none visible_lg_flex">
                         <div className="navbar-brand" >
                            <img className="logo-img"  href="/venia" alt="LOGO" src={require("../../../assests/logo.png")} />
                        </div>

                        <ul className="navbar-nav visible_sm">
                            <li className="nav-item">
                               Women
                            </li>
                            <li className="nav-item">
                                Men 
                            </li>
                            <li className="nav-item">
                                Smart Gear 
                            </li>
                            <li className="nav-item">
                                Accesories
                            </li>
                        </ul>

                        <div className="nav-icons">
                            <div><img src={require("../../../assests/search.png")}  alt="search"/> </div>
                            <div className=''><img src={require("../../../assests/user.png")} alt="user-icon"/> <b className='text_top'> Sign in</b></div>
                            <div><img src={require("../../../assests/shopping-bag.png")} alt="shoppingbag-icon"/></div>
                        </div>
                    </div>


                </header>
                <hr className='border-grey'></hr>
            </>
        );
    
}


export default Header;