import React, { Component } from 'react';

class VangstIsDope extends Component {
    render() {
        return (
            <section className="section section-top section-full vangst-is-dope">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-8">
                            <div className="section-label">
                                <p className="section-number text-white">.01</p>
                                <p className="section-text text-white">Vangst</p>
                            </div>
                            <h2 className="text-white text-left">
                                The cannabis industry's #1 recruiting resource.
                            </h2>
                            <hr className="white-line" noshade />
                            <p className="text-white section-copy">
                                Since launching in 2015, we’ve connected over 5,500 candidates with jobs in the rapidly emerging cannabis industry. Through direct hire, Vangst GIGs, career fairs, and our job board, our team continues to pioneer recruiting solutions tailored specifically to the cannabis industry. 
                            </p>
                            <hr className="white-line" />
                        </div>
                        <div className="col-lg-4">
                            <div className="play-button-container">
                                <img src='/static/images/vangst-main-page/play-button.png' alt=""></img>
                                <div className="play-button">
                                    <p>See how it works</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default VangstIsDope;