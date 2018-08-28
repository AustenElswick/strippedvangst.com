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
                    <div className="news-logo-container">
                        <a href="https://www.entrepreneur.com/article/313579" target="_blank" >
                            <img className="event-image entrepreneur-logo" src="/static/images/vangst-main-page/entrepreneur-logo.png" target="_blank"></img>                    
                        </a>
                    </div>
                    <div className="news-logo-container">
                        <a href="https://www.fastcompany.com/40471045/this-24-year-old-built-a-linkedin-for-weed-jobs-no-experience-required" target="_blank">
                            <img className="event-image fastcompany-logo" src="/static/images/vangst-main-page/fast-company-logo.png"></img>
                        </a>
                    </div>
                    <div className="news-logo-container">
                        <a href="https://www.forbes.com/sites/heathercabot/2018/03/21/why-this-founder-waited-to-fundraise-and-how-it-paid-off/#206a52d6db93" target="_blank">
                            <img className="event-image" src="/static/images/vangst-main-page/forbes-logo.png"></img>                    
                        </a>
                    </div>
                   
                    <div className="news-logo-container">
                        <a href="https://www.cnbc.com/2017/10/18/meet-the-24-year-old-founder-behind-the-career-site-for-cannabis-jobs.html" target="_blank">
                            <img className="event-image cnbc-logo" src="/static/images/vangst-main-page/cnbc-logo.png"></img>                    
                        </a>
                    </div>

                    <div className="news-logo-container">
                        <a href="http://time.com/money/4923221/meet-the-24-year-old-entrepreneur-who-just-launched-a-careers-site-for-pot-jobs/" target="_blank">
                            <img className="event-image time-logo" src="/static/images/vangst-main-page/time-logo.png"></img>
                        </a>                    
                    </div>
                    <div className="news-logo-container">
                        <a href="https://www.cbsnews.com/news/how-to-get-a-job-in-the-legal-weed-business/" target="_blank">
                            <img className="event-image cbs-logo" src="/static/images/vangst-main-page/cbs-logo.png"></img>   
                        </a>                 
                    </div>
                </div>
            </div>
           </section>
        );
    }
}

export default News;