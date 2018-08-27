import React, { Component } from 'react';

class JobReport extends Component {
    render() {
        return (
            <div>
                <section className="section section-top section-full job-report">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-8">
                            <div className="section-label">
                                <p className="section-number-orange">.02</p>
                                <p className="section-text-orange">The Job Report</p>
                            </div>
                            <h2 className="text-white text-left">
                                Download the <br/>Vangst Job Report
                            </h2>
                            <hr className="white-line" noshade />
                            <p className="text-white section-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <hr className="white-line" />
                            <div className="job-report-numbers">
                                <div className="col-12 col-md-6 col-lg-4 text-light job-report-number-column">
                                    <p className="job-report-number">419</p>
                                    <div className="white-line-div"></div>
                                    <p className="nav-link">PLACE HOLDER</p>
                                </div>
                                <div className="col-12 col-md-6 col-lg-4 job-report-number-column text-light">
                                    <p className="job-report-number">291</p>
                                    <div className="white-line-div"></div>
                                    <p className="nav-link">PLACE HOLDER</p>
                                </div>
                                <div className=" col-12 col-md-6 col-lg-4 job-report-number-column text-light">
                                    <p className="job-report-number">615</p>
                                    <div className="white-line-div"></div>
                                    <p className="nav-link">PLACE HOLDER</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 report-column">
                                <img src='/static/images/vangst-main-page/report-img.png' alt=""></img>
                                <img className="play-button-img" src='/static/images/vangst-main-page/play-button.png' alt=""></img>
                                <div className="text-light"><p>Download full report</p></div>
                        </div>
                    </div>
                </div>
            </section>
                
            </div>
        );
    }
}

export default JobReport;