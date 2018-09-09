import React, { Component } from 'react';
import Link from 'next/link'

class UpcomingFair extends Component {
  render() {
    return (
      <section id="upcoming-fair-section">
        <div id="upcoming-fair-container">
          <div>
            <h5 id="event-title">Upcoming Fair</h5>
            <div className="gray-line-h"></div>
            <h2 id="event-date">October 11, 2018</h2>
            <h5 id="event-time">9:30am-6:00pm</h5>
            <div className="gray-line-h"></div>
            <p className="event-address">Oakland Marriot City Center</p>
            <p className="event-address">1001 Broadway</p>
            <p className="event-address">Oakland, California</p>
            <p className="event-address">94607</p>
            <div className="gray-line-h"></div>
            <a id="ticket-link" href="https://www.eventbrite.com/e/new-west-summit-40-tickets-45670651147?aff=ebdssbdestsearch" target="_blank">Purchase Tickets ></a>
          </div>
          <div id="event-column-2">
            <p className="event-address">Presented by:</p>
            <img id="sponsor-logo" src='static/images/logos/logo.png' />
          </div>
        </div>
        <style>
          {`
            #upcoming-fair-section {
              width: 100vw;
              height: 50vh;
              background-color: #fafafa;
              display: flex;
              flex-direction: column;
              justify-content: center;
              padding: 4rem;
            }
            #upcoming-fair-container {
              display: flex;
              flex-direction: row;
              justify-content: space-around;
            }
            #event-column-2 {display: flex; flex-direction: column; align-items: center; justify-content: center;}

            #event-title {font-family: Sabon Italic; font-size: 1.5rem; color: #505050;}
            #event-date {color: #505050;}
            #event-time {font-family: Brandon Grotesque Regular Italic; font-size: 1.5rem; color: #505050;}
            .event-address {font-family: Brandon Grotesque Regular; line-height: 10px; font-weight: 400; color: #505050;}

            .gray-line-h {height: 2px; width: 250px; background-color: #505050; margin: 15px 0 15px 0;}

            #ticket-link {color: #f0561f; font-family: Brandon Grotesque Regular Italic}

            #sponsor-logo {width: 300px; height: auto;}

            @media (max-width: 770px) {
              #sponsor-logo {width: 200px; height: auto;}
              #event-date {font-size: 3rem;}
            }

            @media (max-width: 420px) {
              #upcoming-fair-section {height: 100vh; padding: 2rem;}
              #upcoming-fair-container {min-height: 100%; display: flex; flex-direction: column; justify-content: space-evenly;}
              #sponsor-logo {width: 150px; height: auto;}
            }
          `}
        </style>
      </section>
    );
  }
}

export default UpcomingFair;
