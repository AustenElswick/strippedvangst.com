import React, { Component } from 'react';

class JobReport extends Component {
    render() {
        return (
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
                            <div className="white-line job-report-line"></div>
                            <p className="section-copy job-report-section-copy">The Vangst Cannabis Industry Salary Survey Guide is the first-ever report to establish the average salary of specific roles within the cannabis industry. As the cannabis industry grows at an exponential rate, we will continue to report the most accurate and reliable data possible from leading companies.</p>
                            <div className="white-line job-report-line"></div>
                            {/* <div className="job-report-numbers">
                                <div id="states-number"className="col-lg-4 text-light job-report-number-column">
                                    <div className="job-report-number">30</div>
                                    <div className="white-line-div"></div>
                                    <p className="nav-link">STATES</p>
                                </div>
                                <div id="growth-number"className="col-lg-4 job-report-number-column text-light">
                                    <div className="d-flex flex-row justify-content-center align-items-center">
                                        <div className="job-report-number">690</div>
                                        <div className="h3 job-report-symbol">%</div>
                                    </div>
                                    <div className="white-line-div"></div>
                                    <p className="nav-link text-center">GROWTH IN JOB LISTINGS</p>
                                </div>
                                <div className=" col-lg-4 job-report-number-column text-light">
                                    <div className="d-flex flex-row justify-content-center align-items-center">
                                        <div className="job-report-number">5000</div>
                                        <div className="h3 job-report-symbol">+</div>
                                    </div>
                                    <div className="white-line-div"></div>
                                    <p className="nav-link text-center">OPEN POSITIONS</p>
                                </div>
                            </div> */}
                        </div>
                        <a id="salary-report-link" className="col-lg-4 report-column" href="https://blog.vangst.com/cannabis-salary-guide-2018/" target="_blank">
                            <img className="report-graphic" src='/static/images/vangst-main-page/report-img.png' alt="vangst salary report graphic"></img>
                            <img className="play-button-img" src='/static/images/vangst-main-page/play-button.png' alt=""></img>
                            <div className="text-light"><p>See full report</p></div>
                        </a>
                    </div>
                </div>
            </div>
            <style>
                {`
                    #salary-report-link {text-decoration: none;}
                `}
            </style>
        </section>
        );
    }
}

export default JobReport;