
import React from "react";
import "./footer.scss";
import facebook from "../../../assests/facebook.png"
import instagram from "../../../assests/instagram.png"
import twitter from "../../../assests/twitter.png"


class Footer extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <footer>
                <hr />
                <div className="footer-wrapper container">
                    <div className="footer-division-wrapper">
                        <div className="footer-division">
                            <h4>Account</h4>
                                <p>Sign In</p>
                                <p>Register</p>
                                <p>Order Status</p>
                            
                        </div>
                        <div className="footer-division">
                            <h4>About Us</h4>
                                <p>Our Story</p>
                                <p>Careers</p>
                                <p>Order Status</p>
                            
                        </div>
                        <div className="footer-division">
                            <h4>Help</h4>
                                <p>Contact Us</p>
                                <p>Order Status</p>
                                <p>Returns</p>
                            
                        </div>
                        <div className="footer-division">
                            <h4>Folloe Us !</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                    <div className="social_icon">
                                    <div className="icon"><img src={instagram}  className="insta"  alt="instagram-icon" /></div>
                                    <div className="icon"><img src={facebook} className="fcb"  alt="facebook-icon"/></div>
                                    <div className="icon"><img src={twitter} className="twt"  alt="twitter-icon"/></div>
                                </div>
                        </div>
                        
                        
                        
                    </div>
                </div>
                <hr className="copyright-line" />
                <section className="container">
                    <div className="copyright-wrapper">
                       <div className ="footer-logo"> 
                        <img src={require("../../../assests/logo.png")} alt="Logo-img" href="/venia" className="logo-img" />
                        </div>
                        <p className="copyright">© Company Name Address Ave, City Name, State ZIP</p>
                         <div className="term-policy">
                            <p className="terms"><a href="#">Terms of Use</a></p>
                            <p className="terms"><a href="#">Privacy Policy</a></p>
                        </div>
                    </div>
                </section>
               
            </footer>
        );
    }
}

export default Footer;
