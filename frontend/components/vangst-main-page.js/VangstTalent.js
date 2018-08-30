import React, { Component } from 'react';

class VangstTalent extends Component {
    render() {
        return (
            <section className="section vangst-talent-section">
                <div className="container">
                    <div className="vangst-talent-title-container">
                        <div className="vangst-talent-title">
                            <img src="/static/images/social/instagram-gray.png" className="insta-logo-talent"></img>
                            <h3 className="text-dark">VANGST TALENT</h3>
                        </div>
                        <hr id="talent-line" className="section-title-line"></hr>
                    </div>
                    <a href="https://www.instagram.com/vangsttalent/?hl=en" target="_blank">
                        <section class="instagram-slider">
                            <div class="instagram-post"><img src="/static/images/vangst-main-page/instagram/insta-1.png"></img></div>
                            <div class="instagram-post"><img src="/static/images/vangst-main-page/instagram/insta-2.png"></img></div>
                            <div class="instagram-post"><img src="/static/images/vangst-main-page/instagram/insta-3.png"></img></div>
                            <div class="instagram-post"><img src="/static/images/vangst-main-page/instagram/insta-4.png"></img></div>
                            <div class="instagram-post"><img src="/static/images/vangst-main-page/instagram/insta-5.png"></img></div>
                            <div class="instagram-post"><img src="/static/images/vangst-main-page/instagram/insta-6.png"></img></div>
                            <div class="instagram-post"><img src="/static/images/vangst-main-page/instagram/insta-7.png"></img></div>
                            <div class="instagram-post"><img src="/static/images/vangst-main-page/instagram/insta-8.png"></img></div>
                            <div class="instagram-post"><img src="/static/images/vangst-main-page/instagram/insta-9.png"></img></div>                    
                        </section>
                    </a>
                </div>
           </section>
        );
    }
}

export default VangstTalent;