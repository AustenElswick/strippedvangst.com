import React, { Component } from 'react';

class Gigs extends Component {
    render() {
        return (
            <div>
                <section className="section section-top section-full gigs-section">
                <div className="bg-cover"></div>
                <div className="bg-overlay"></div>
                <div className="container">
                    <div className="row justify-content-left align-items-center">
                        <div className="col-6 col-lg-6">
                            <div className="section-label">
                                <p className="section-number-orange">.03</p>
                                <p className="section-text-orange">Vangst Gigs</p>
                            </div>
                            <h2 className="text-dark text-left">
                                Work today. <br/>Get paid today.
                            </h2>
                            <hr className="dark-line" noshade />
                            <p className="text-dark section-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <hr className="dark-line" />
                            <div className="job-report-numbers">
                                <div className="col-12 col-lg-4 text-dark job-report-number-column text-center">
                                    <p className="text-dark">1.</p>
                                    <p>SIGN UP FOR GIGS AND GET PRE-QUALIFIED.</p>
                                </div>
                                <div className="col-12 col-lg-4 job-report-number-column text-center">
                                    <p className="text-dark">2.</p>
                                    <p>PICK THE DAILY GIG YOU WANT</p>
                                </div>
                                <div className=" col-12 col-lg-4 job-report-number-column text-center">
                                    <p className="text-dark">3.</p>
                                    <p>GET CASH MONEY AT THE END OF YOUR GIG</p>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="text-center gigs-cta-button">
                                    <div className="text-nowrap">
                                        Sign up for Vangst Gigs and get paid
                                    </div>
                                    <div>
                                        <img className="gigs-arrow" src="/static/images/vangst-main-page/orange-arrow-right.png"></img>
                                    </div>
                                </div>
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