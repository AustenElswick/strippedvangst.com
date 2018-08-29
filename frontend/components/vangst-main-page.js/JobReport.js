import React, { Component } from 'react';

class JobReport extends Component {
    render() {
        return (
            <div>
                <section className="section section-top section-full job-report">
                <div className="color-overlay">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-8">
                            <div className="section-label">
                                <p className="section-number job-report-section-number">.02</p>
                                <p className="section-text text-white">The Job Report</p>
                            </div>
                            <h2 className="text-left job-report-title">
                                Download the <br/>Vangst Salary Report
                            </h2>
                            <hr className="white-line job-report-line" noshade />
                            <p className="section-copy job-report-section-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <hr className="white-line job-report-line" />
                            <div className="job-report-numbers">
                                <div className="col-lg-4 text-light job-report-number-column">
                                    <div className="job-report-number">30</div>
                                    <div className="white-line-div"></div>
                                    <p className="nav-link">STATES</p>
                                </div>
                                <div className="col-lg-4 job-report-number-column text-light">
                                    <div className="d-flex flex-row justify-content-center align-items-center">
                                        <div className="job-report-number">690</div>
                                        <div className="h3">%</div>
                                    </div>
                                    <div className="white-line-div"></div>
                                    <p className="nav-link text-center">GROWTH IN JOB LISTINGS</p>
                                </div>
                                <div className=" col-lg-4 job-report-number-column text-light">
                                    <div className="d-flex flex-row justify-content-center align-items-center">
                                        <div className="job-report-number">5000</div>
                                        <div className="h3">+</div>
                                    </div>
                                    <div className="white-line-div"></div>
                                    <p className="nav-link">OPEN POSITIONS</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 report-column">
                                <img className="report-graphic" src='/static/images/vangst-main-page/report-img.png' alt="vangst salary report graphic"></img>
                                <img className="play-button-img" src='/static/images/vangst-main-page/play-button.png' alt=""></img>
                                <div className="text-light"><p>Download full report</p></div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
                
            </div>
        );
    }
}

export default JobReport;