import React from 'react';
import '../Header/header.scss';
import { useState } from 'react';
import { useSelector } from "react-redux";
import shoppingBag from '../../../assests/shopping-bag-white.svg';
import { NavLink ,Link} from "react-router-dom";


const Header = () =>   {
    const [show, setShow] =useState(false);
    let cart = useSelector((state) => state.cart.cart);
    return (
            <>
                <header className="container header-wrapper">
                    <nav className="">
                        <div className=" navbar visible_flex-display visible_lg_none">
                            <button className='' onClick={()=>setShow(!show)}>
                                <img className="Hamburger" alt="Hambuger" src={require("../../../assests/hambuger-white.png")} />
                            </button>
                            <div className="navbar-brand" >
                            <NavLink to={'/capstone'}>
                                <img className="logo-img" alt="LOGO" href="/venia" src={require("../../../assests/venia-white-logo.png")} />
                            </NavLink>
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

                            <Link to="/cart" >
                                <div className="nav-icons">
                                    <ul>
                                        <li className="nav-icon">
                                        <img src={shoppingBag} alt="shoppingBag"/>
                                        </li>
                                    </ul>
                                {cart.length > 0 &&  <span className='cart-counter'>{cart.length}</span>}
                            </div>
                            </Link>

                            

                        </div>
                    </nav>

                    <div className="visible_sm_none visible_lg_flex">
                         <div className="navbar-brand" >
                         <NavLink to={'/capstone'}>
                            <img className="logo-img"  href="/venia" alt="LOGO" src={require("../../../assests/venia-white-logo.png")} />
                        </NavLink>
                        </div>

                        <ul className="navbar-nav visible_sm">
                            <li className="nav-item">
                               Home
                            </li>
                            <li className="nav-item">
                               Women
                            </li>
                            <li className="nav-item">
                                Men 
                            </li>
                            <li className="nav-item">
                                Electronic 
                            </li>
                            <li className="nav-item">
                                Jwellary
                            </li>
                        </ul>

                        <Link to="/cart" > <div className="nav-icons">
                            <img src={shoppingBag} className="cart-bag" alt="shoppingBag"/>
                            {cart.length > 0 &&  <span className='cart-counter'>{cart.length}</span>}
                        </div>
                        </Link>
                    </div>


                </header>
            </>
        );
    
}


export default Header;