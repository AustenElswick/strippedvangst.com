import React, { Component } from 'react';

class Hero extends Component {
    render() {
        return (
            <section className="hero-section">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-12">
                            <h1 className="text-white text-center hero-title">
                                Cannabis is hiring.
                            </h1>
                            <div className="hero-cta">
                                <button className="hero-button">
                                    <img src='/static/images/vangst-main-page/arrow-left.png'></img>
                                    <p className="text-light text-center">Hire the perfect person</p>
                                </button>
                                <div className="white-div">
                                    <p className="text-center">We're ready.  Are you?</p>
                                </div>
                                
                                <button className="hero-button">
                                    <p className="text-light text-center">Find your perfect job</p>
                                    <img src='/static/images/vangst-main-page/arrow-right.png'></img>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;