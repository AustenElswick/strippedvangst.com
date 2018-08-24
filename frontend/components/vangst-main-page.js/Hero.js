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
                                <img src='/static/images/vangst-main-page/arrow-left.png'></img>
                                <p className="text-light">Hire the perfect person</p>
                                <p className="white-div">We're ready.  Are you?</p>
                                <p className="text-light">Find your perfect job</p>
                                <img src='/static/images/vangst-main-page/arrow-right.png'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;