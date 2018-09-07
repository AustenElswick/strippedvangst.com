import React, { Component } from 'react';
import Link from "next/link";

class Hero extends Component {
    render() {
        return (
            <section id="vangst-main-page-hero" className="hero-section">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-12">
                            <h1 className="text-white text-center hero-title">
                                Cannabis is hiring.
                            </h1>
                            <div className="hero-cta">
                                <Link href="/employer-page">
                                    <a>
                                        <div className="hero-button">
                                            <img src='/static/images/vangst-main-page/arrow-left.png'></img>
                                            <p className="text-light text-center">Hire the perfect person</p>
                                        </div>
                                    </a>
                                </Link>
                                <div id="we-are-ready-text" className="white-div">
                                    <p className="text-center">We're ready.  Are you?</p>
                                </div>
                                <Link href='/vangst-cannabis-staffing-services'>
                                <a>
                                <div className="hero-button">
                                    <p className="text-light text-center">Find your perfect job</p>
                                    <img src='/static/images/vangst-main-page/arrow-right.png'></img>
                                </div>
                                </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <style>{`

                    #vangst-main-page-hero {
                        background-image: url("/static/images/vangst-main-page/plant-in-hand-1472.jpg");
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                    }

                    @media (max-width: 770px) {
                        #we-are-ready-text {display:none};
                    }
                
                `}</style>
            </section>
        );
    }
}

export default Hero;