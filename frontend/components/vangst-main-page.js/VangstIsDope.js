import React, { Component } from 'react';

class VangstIsDope extends Component {
    render() {
        return (
            <section className="section section-top section-full vangst-is-dope">
                <div className="bg-cover"></div>
                <div className="bg-overlay"></div>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-8">
                            <div className="section-label">
                                <p className="section-number text-white">.01</p>
                                <p className="section-text text-white">Vangst</p>
                            </div>
                            <h2 className="text-white text-left">
                                Vangst is really dope copy goes right here.
                            </h2>
                            <hr className="white-line" noshade />
                            <p className="text-white section-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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