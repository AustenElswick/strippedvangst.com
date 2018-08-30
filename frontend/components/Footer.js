import Link from "next/link";
import MailChimpForm from "./MailChimpForm.js";

const Footer = () => (
    <footer>
        <div className="footer-container">
            <div className="col-12 col-lg-4 footer-logo-container">
                <img src="/static/images/logos/logo.png"></img>
            </div>
            <div className="col-12 col-lg-8 footer-content">
                {/* <div className="footer-signup">
                    <div className="text-white footer-input-title">
                        Sign up for our newsletter and stay in the know
                    </div>
                    <div>
                        <div class="input-group input-group-sm footer-signup-input">
                            <input type="text" id="email-input-footer" className="email-input" placeholder="Email" aria-label="Recipient's email" aria-describedby="basic-addon2" />
                            <input type="number" id="zip-code-input-footer" className="zip-code-input" placeholder="Zip" aria-label="Recipient's zip code" aria-describedby="basic-addon2" />
                            <div class="input-group-append">
                                <button id="footer-signup-button" class="btn btn-outline text-white" type="button">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="footer-signup*">
                    <div className="text-white footer-input-title text-center">
                        Sign up for our newsletter and stay in the know
                    </div>
                    <div className="mailchimp-form">
                        <MailChimpForm />
                    </div>
                            
                        
                    
                </div>
                <div className="row footer-links-container col-xl-10">
                    <ul id="footer-list-1" className="footer-link-group">
                        <li className="nav-link text-white">SUPPORT</li>
                        <li className="nav-link text-white">ABOUT VANGST</li>
                        <li className="nav-link text-white">TEAM</li>
                        <li className='nav-link text-white'>WORK FOR VANGST</li>
                    </ul>
                    <ul className="footer-link-group">
                        <li className="nav-link text-white">DENVER, CO</li>
                        <li className="nav-link text-white">SANTA MONICA, CA</li>
                        <li className="nav-link text-white">
                            <a id="email-link" href="mailto:info@vangst.com">INFO@VANGST.COM</a>
                        </li>
                        <li className="nav-link footer-copyright">&#169; 2018 VANGST</li>
                    </ul>
                    <div className="footer-social-icons">
                        <a href="https://www.instagram.com/vangsttalent/?hl=en" target="_blank"><img src="static/images/social/insta-white.png"></img></a>
                        <a href="https://www.facebook.com/Vangsttalent/" target="_blank"><img src="static/images/social/facebook-white.png"></img></a>
                        <a href="https://www.linkedin.com/company/vangst/" target="_blank"><img src="static/images/social/linked-in-white.png"></img></a>
                        <a href="https://twitter.com/vangsttalent?lang=en" target="_blank"><img src="static/images/social/twitter-white.png"></img></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
