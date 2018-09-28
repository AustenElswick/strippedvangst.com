import Link from "next/link";
import MailChimpForm from "./MailChimpForm.js";

const Footer = () => (
  <footer>
    <div className="footer-container">
      <div className="col-12 col-lg-4 footer-logo-container">
        <img src="/static/images/logos/logo.png" />
      </div>
      <div className="col-12 col-lg-8 footer-content">
        <div>
          <div className="text-white footer-input-title text-center">
            Sign up for our newsletter and stay in the know
          </div>
          <div className="mailchimp-form">
            <MailChimpForm />
          </div>
        </div>
        <div className="row footer-links-container col-xl-10">
          <ul id="footer-list-1" className="footer-link-group">
            <li>
              <Link href="/about-vangst-talent">
                <a className="nav-link text-white">ABOUT VANGST</a>
              </Link>
            </li>
            <li>
              <Link href="/vangst-internal-positions">
                <a className="nav-link text-white">WORK FOR VANGST</a>
              </Link>
            </li>
            <li>
              <a
                className="nav-link text-white"
                href="https://blog.vangst.com/"
              >
                BLOG
              </a>
            </li>
            <li className="nav-link footer-copyright">&#169; 2018 VANGST</li>
          </ul>
          <ul className="footer-link-group">
            <li className="nav-link text-white">DENVER, CO</li>
            <li className="nav-link text-white">SANTA MONICA, CA</li>
            <li className="nav-link text-white">
              <a id="email-link" href="mailto:customersuccess@vangst.com">
                CUSTOMERSUCCESS@VANGST.COM
              </a>
            </li>
            <li className="nav-link text-white">
              <a id="email-link" href="tel:+18444826478">
                (844)-482-6478
              </a>
            </li>
          </ul>
          <div className="footer-social-icons">
            <a
              href="https://www.instagram.com/vangsttalent/?hl=en"
              target="_blank"
            >
              <img src="static/images/social/insta-white.png" />
            </a>
            <a href="https://www.facebook.com/Vangsttalent/" target="_blank">
              <img src="static/images/social/facebook-white.png" />
            </a>
            <a href="https://www.linkedin.com/company/vangst/" target="_blank">
              <img src="static/images/social/linked-in-white.png" />
            </a>
            <a href="https://twitter.com/vangsttalent?lang=en" target="_blank">
              <img src="static/images/social/twitter-white.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
