import Link from "next/link";

const Footer = () => (
    <footer>
        <div className="footer-container">
            <div className="col-12 col-lg-4 footer-logo-container">
                <img src="/static/images/logos/logo.png"></img>
            </div>
            <div className="col-12 col-lg-8 footer-content">
                <div className="footer-signup-input">
                <p className="text-white">Sign up for our newsletter and stay in the know</p>
                <div class="input-group input-group-sm">
                    <input type="text" class="form-control" placeholder="Email" aria-label="Recipient's email" aria-describedby="basic-addon2" />
                    <input type="number" class="form-control" placeholder="Zip" aria-label="Recipient's zip code" aria-describedby="basic-addon2" />
                    <div class="input-group-append">
                        <button class="btn btn-outline text-white" type="button">Sign Up</button>
                    </div>
                </div>
                <div className="row footer-links-container">
                <div>
                    <div className="nav-link text-white">SUPPORT</div>
                    <div className="nav-link text-white">ABOUT VANGST</div>
                    <div className="nav-link text-white">TEAM</div>
                    <div className='nav-link text-white'>WORK FOR VANGST</div>
                </div>
                <div>
                    <div className="nav-link text-white">DENVER, COLORADO</div>
                    <div className="nav-link text-white">SANTA MONICA, CALIFORNIA</div>
                    <div className="nav-link text-white">INFO@VANGSTTALENT.COM</div>
                    <div className="nav-link footer-copyright">&#169; 2018 VANGST</div>
                </div>
                <div className="footer-social-icons">
                    <a href="https://www.instagram.com/vangsttalent/?hl=en" target="_blank"><img src="static/images/social/insta-white.png"></img></a>
                    <a href="https://www.facebook.com/Vangsttalent/" target="_blank"><img src="static/images/social/facebook-white.png"></img></a>
                    <a href="https://www.linkedin.com/company/vangst/" target="_blank"><img src="static/images/social/linked-in-white.png"></img></a>
                    <a href="https://twitter.com/vangsttalent?lang=en" target="_blank"><img src="static/images/social/twitter-white.png"></img></a>
                </div>
                </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
