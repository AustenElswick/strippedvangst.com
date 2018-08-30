import React, { Component } from 'react';

class Gigs extends Component {
    render() {
        return (
            <div>
                <section className="section section-top section-full gigs-section">
                <div className="container">
                    <div className="row justify-content-left align-items-center">
                        <div className="col-10 col-lg-7">
                            <div className="section-label">
                                <p className="section-number-orange">.03</p>
                                <p className="section-text-orange">Vangst Gigs</p>
                            </div>
                            <h2 className="text-dark text-left">
                                Work today. <br/>Get paid today.
                            </h2>
                            <div className="dark-line"></div>
                            <p className="text-dark section-copy">
                                Find temporary work in trimming, budtending, packaging, events, and more. Make your own schedule, get paid quickly, and work with the best companies in the industry.</p>
                            <div className="dark-line"></div>
                            <div id="gigs-steps-container" className="job-report-numbers col-11">
                                <div className="col-12 col-lg-4 text-dark job-report-number-column text-center">
                                    <p className="text-dark gigs-number">1.</p>
                                    <p className="gigs-step-description">SIGN UP FOR GIGS AND GET PRE-QUALIFIED.</p>
                                </div>
                                <div className="col-12 col-lg-4 job-report-number-column text-dark text-center">
                                    <p className="text-dark gigs-number">2.</p>
                                    <p className="gigs-step-description">PICK THE DAILY GIG YOU WANT</p>
                                </div>
                                <div className=" col-12 col-lg-4 job-report-number-column text-dark text-center">
                                    <p className="text-dark gigs-number">3.</p>
                                    <p className="gigs-step-description">GET CASH MONEY AT THE END OF YOUR GIG</p>
                                </div>
                            </div>
                            <div id="gigs-cta-button-container" className="row col-12">
                                <button className="gigs-cta-button">
                                    <div className="gigs-cta-text-container">
                                        <p id="gigs-cta-text-1" className="gigs-cta-text">Sign up for Vangst Gigs and get paid</p>
                                        <p id="gigs-cta-text-2" className="gigs-cta-text">Sign up</p>
                                    </div>
                                    <div className="gigs-arrow-container">
                                        <img className="gigs-arrow" src="/static/images/vangst-main-page/orange-arrow-right.png"></img>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                
            </div>
        );
    }
}

export default Gigs;