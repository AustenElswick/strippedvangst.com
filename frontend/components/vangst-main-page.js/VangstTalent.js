import React, { Component } from "react";

class VangstTalent extends Component {
  render() {
    return (
      <section className="section vangst-talent-section">
        <div className="container">
          <div className="vangst-talent-title-container">
            <div className="vangst-talent-title">
              <img
                src="/static/images/social/instagram-gray.png"
                className="insta-logo-talent"
              />
              <h3 className="text-dark">VANGST TALENT</h3>
            </div>
            <hr id="talent-line" className="section-title-line" />
          </div>
          <a
            href="https://www.instagram.com/vangsttalent/?hl=en"
            target="_blank"
          >
            <section className="instagram-slider">
              <div className="instagram-post">
                <img src="/static/images/vangst-main-page/instagram/insta-1.png" />
              </div>
              <div className="instagram-post">
                <img src="/static/images/vangst-main-page/instagram/insta-2.png" />
              </div>
              <div className="instagram-post">
                <img src="/static/images/vangst-main-page/instagram/insta-3.png" />
              </div>
              <div className="instagram-post">
                <img src="/static/images/vangst-main-page/instagram/insta-4.png" />
              </div>
              <div className="instagram-post">
                <img src="/static/images/vangst-main-page/instagram/insta-5.png" />
              </div>
              <div className="instagram-post">
                <img src="/static/images/vangst-main-page/instagram/insta-6.png" />
              </div>
              <div className="instagram-post">
                <img src="/static/images/vangst-main-page/instagram/insta-7.png" />
              </div>
              <div className="instagram-post">
                <img src="/static/images/vangst-main-page/instagram/insta-8.png" />
              </div>
              <div className="instagram-post">
                <img src="/static/images/vangst-main-page/instagram/insta-9.png" />
              </div>
            </section>
          </a>
        </div>
      </section>
    );
  }
}

export default VangstTalent;
