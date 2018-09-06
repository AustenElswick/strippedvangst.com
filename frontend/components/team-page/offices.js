import React, { Component } from 'react';

class Offices extends Component {
  render() {
    return (
      <section id="offices-section" className="hero-section">
        <div>
          <div id="map-section-label" className="section-label">
            <p id="map-label-number" className="section-number text-white">.02</p>
            <p id="map-label-text" className="section-text text-white">Offices</p>
          </div>
          <div id="offices-column-container"> 
            <div className="offices-column">
              <h5>Santa Monica, CA</h5>
              <div className="offices-small-h-line"></div>
              <p className="offices-text">520 Broadway #3016</p>
              <p className="offices-text">Santa Monica, CA</p>
              <p className="offices-text">90401</p>
            </div>
            <div className="offices-column">
              <h5>Denver, CO</h5>
              <div className="offices-small-h-line"></div>
              <p className="offices-text">518 17th St</p>
              <p className="offices-text">Denver, CO</p>
              <p className="offices-text">80202</p>
            </div>
            <div className="offices-column">
              <h5>Contact us</h5>
              <div className="offices-small-h-line"></div>
              <a id="email-link" href="mailto:info@vangst.com"><p className="offices-text">info@vangst.com</p></a>
              <a id="email-link" href="tel:+18444826478"><p className="offices-text">(844)-482-6478</p></a>
            </div>
          </div>
        </div>
        <style>
          {`

          h5 {
            color: white;
            font-family: Brandon Grotesque Bold Italic;
            font-size: 2.1rem;
          }
          
          #offices-section {
            padding: 4rem;
            min-width: 100vw;
            height: 50vh;
            background-image: url('/static/images/team-page/ca-background.jpg');
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          #map-section-label {
            margin-bottom: 4rem;
            padding-left: 3rem;
          }

          #offices-column-container {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-content: center;
            padding-right: 10%;
            padding-right: 10%;
          }

          .offices-column {
            margin-bottom: 25px;
          }

          .small-h-line {
            margin: 15px 0 15px 0;
          }

          .offices-text {
            color: white;
            font-family: Brandon Grotesque Regular;
            font-size: 1.3rem;
            margin: 1px 0 1px 0;
          }

          @media (max-width: 800px) {
            #offices-section {
              padding: 2rem;
            }
            #offices-column-container {
              padding: 0;
            }
          }

          @media (max-width: 420px) {
            #offices-section {
              height: 100vh;
              padding: 2rem;
            }

            #offices-column-container {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-content: center;
              padding-left: 1rem;
              padding-top: 1rem;
            }

            .offices-small-h-line {
              margin: 5px !important;
            }
            .offices-text {
              font-size: 1.1rem;
              line-height: 20px;

            }
          }

      
          
          `}
        </style>
      </section>
    );
  }
}

export default Offices;
