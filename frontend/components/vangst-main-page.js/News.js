import React, { Component } from 'react';

class News extends Component {
    render() {
        return (
           <section className="section news-section">
            <div className="container">
                <div className="text-center">
                    <h3>VANGST IN THE NEWS</h3>
                    <hr className="section-title-line"></hr>
                </div>
                <div className="row news-logos">
                    <div className="col-4 col-lg-2 news-logo-container">
                        <img className="event-image" src="/static/images/vangst-main-page/fast-company-logo.png"></img>                    
                    </div>
                    <div className="col-4 col-lg-2 news-logo-container">
                        <img className="event-image" src="/static/images/vangst-main-page/msnbc-logo.png"></img>                    
                    </div>
                    <div className="col-4 col-lg-2 news-logo-container">
                        <img className="event-image" src="/static/images/vangst-main-page/cnbc-logo.png"></img>                    
                    </div>
                    <div className="col-4 col-lg-2 news-logo-container">
                        <img className="event-image" src="/static/images/vangst-main-page/forbes-logo.png"></img>                    
                    </div>
                    <div className="col-4 col-lg-2 news-logo-container">
                        <img className="event-image" src="/static/images/vangst-main-page/time-logo.png"></img>                    
                    </div>
                    <div className="col-4 col-lg-2 news-logo-container">
                        <img className="event-image" src="/static/images/vangst-main-page/wall-street-journal-logo.png"></img>                    
                    </div>
                </div>
            </div>
           </section>
        );
    }
}

export default News;