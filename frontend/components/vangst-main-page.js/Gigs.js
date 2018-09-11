import React, { Component } from 'react';

class Gigs extends Component {
    render() {
        return (
            <section className="section section-top section-full gigs-section">
                <div className="container">
                    <div className="row justify-content-left align-items-center">
                        <div className="col-8 col-lg-7">
                            <div className="section-label">
                                <p className="section-number-orange">.03</p>
                                <p className="section-text-orange">Vangst Gigs</p>
                            </div>
                            <h2 className="text-dark text-left">
                                Work today. <br/>Get paid today.
                            </h2>
                            <div className="dark-line"></div>
                            <p className="text-dark section-copy">
                            Vangst GIGS is the first and only fully compliant temporary employment service in cannabis. Vangst GIGS connects cannabis companies with temporary labor and allows cannabis temporary workers to build their own schedules and get paid quickly.</p>
                            <div className="dark-line"></div>
                            <div id="gigs-steps-container" className="job-report-numbers col-11">
                                <div className="col-12 col-lg-4 text-dark job-report-number-column text-center">
                                    <p className="text-dark gigs-number">1.</p>
                                    <p className="gigs-step-description">SIGN UP FOR GIGS AND GET PRE-QUALIFIED.</p>
                                </div>
                                <div className="col-12 col-lg-4 job-report-number-column text-dark text-center">
                                    <p className="text-dark gigs-number">2.</p>
                                    <p className="gigs-step-description">PICK THE GIGS YOU WANT.</p>
                                </div>
                                <div className=" col-12 col-lg-4 job-report-number-column text-dark text-center">
                                    <p className="text-dark gigs-number">3.</p>
                                    <p className="gigs-step-description">GET PAID WEEKLY.</p>
                                </div>
                            </div>
                            <div id="gigs-cta-button-container" className="row col-12">
                                <a href="https://gigs.vangst.com/" target="_blank" >
                                    <div className="gigs-cta-button">
                                        <div className="gigs-cta-text-container">
                                            <p id="gigs-cta-text-1" className="gigs-cta-text">Sign up for Vangst GIGS and get paid ></p>
                                            <p id="gigs-cta-text-2" className="gigs-cta-text">Sign up ></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <style>{`
                    @media (max-width: 420px) {
                        #gigs-cta-button-container {
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                        }

                        .section-copy {padding-right: 10px;}
                        
                        #gigs-steps-container {display: none;}
                            
                        .gigs-cta-button { margin-top: 2rem;}
                        
                        #gigs-cta-text-1 {display: none;}
                        #gigs-cta-text-2 {display: block;}
                    }

                    @media (min-width: 419px) {
                        #gigs-cta-text-1 { display: block; }
                        #gigs-cta-text-2 { display: none; }
                        
                      }
                `}</style>
            </section>
        );
    }
}

export default Gigs;