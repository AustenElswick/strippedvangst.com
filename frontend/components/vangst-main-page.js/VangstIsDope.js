import React, { Component } from 'react';
import Link from "next/link";

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
                            <div className="white-line"></div>
                            <p className="text-white section-copy">
                                Since launching in 2015, we’ve connected over 7,500 candidates with jobs in the rapidly emerging cannabis industry. Through direct hire, Vangst GIGs, career fairs, and our job board, our team continues to pioneer recruiting solutions tailored specifically to the cannabis industry. 
                            </p>
                            <div className="white-line"></div>
                        </div>
                        <div id="play-button-container" className="col-lg-4">
                            <Link href="/employer-page">
                                <div className="play-button-container">
                                    <img src='/static/images/vangst-main-page/play-button.png' alt=""></img>
                                    <a className="play-button">
                                        <p>See how it works</p>
                                    </a>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <style>{`
                    @media (max-width: 770px){
                        #play-button-container {display: flex; flex-direction: row; justify-content: center;}

                    }
                `}</style>
            </section>
        );
    }
}

export default VangstIsDope;