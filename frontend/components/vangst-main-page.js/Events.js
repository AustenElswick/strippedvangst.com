import React, { Component } from 'react';

class Events extends Component {
    render() {
        return (
            <section className="section section-top section-full events-section">
                <div className="container">
                <div className="text-center">
                    <h3 className="">UPCOMING EVENTS</h3>
                    <hr className="section-title-line"/>
                </div>
                    
                    <div className="row event-row-container">
                        <div className="event-container col-12 col-sm-6 col-lg-3">
                            <div className="event-date-icon text-center">
                                <div className="event-month">JULY</div>
                                <div className="event-date">12</div>
                            </div>
                            <img className="event-image" src="/static/images/vangst-main-page/event1.png"></img>
                            <div className="event-title">Career Fair</div>
                            <div className="event-description">Denver, CO / July 12th, 2018</div>
                        </div>
                        <div className="event-container col-12 col-sm-6 col-lg-3">
                            <div className="event-date-icon text-center">
                                <div className="event-month">JULY</div>
                                <div className="event-date">18</div>
                            </div>
                            <img className="event-image" src="/static/images/vangst-main-page/event2.png"></img>
                            <div className="event-title">Career Fair</div>
                            <div className="event-description">Denver, CO / July 12th, 2018</div>
                        </div>
                        <div className="event-container col-12 col-sm-6 col-lg-3">
                            <div className="event-date-icon text-center">
                                <div className="event-month">AUG</div>
                                <div className="event-date">08</div>
                            </div>
                            <img className="event-image" src="/static/images/vangst-main-page/event3.png"></img>
                            <div className="event-title">Career Fair</div>
                            <div className="event-description">Denver, CO / July 12th, 2018</div>
                        </div>
                        <div className="event-container col-12 col-sm-6 col-lg-3">
                            <div className="event-date-icon text-center">
                                <div className="event-month">SEPT</div>
                                <div className="event-date">25</div>
                            </div>
                            <img className="event-image" src="/static/images/vangst-main-page/event4.png"></img>
                            <div className="event-title">Career Fair</div>
                            <div className="event-description">Denver, CO / July 12th, 2018</div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Events;