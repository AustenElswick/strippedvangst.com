import React, { Component } from 'react';

class Map extends Component {
  render() {
    return (
      <section id="map-section">
        <div id="map-section-container">
          <div id="map-section-label" className="section-label">
            <p id="map-label-number" className="section-number text-white">.01</p>
            <p id="map-label-text" className="section-text text-white">The hard facts</p>
          </div>
          <div id="map-column-container">
            <div className="map-section-column">
              <div className="map-number">31</div>
              <div className="map-small-h-line"></div>
              <p className="map-text text-center">states served</p>
            </div>
            <div className="map-section-column">
              <div className="map-number">2,500</div>
              <div className="map-small-h-line"></div>
              <p className="map-text text-center">partnering companies</p>
            </div>
            <div className="map-section-column">
              <div className="map-number">15,000</div>
              <div className="map-small-h-line"></div>
              <p className="map-text text-center">jobs placed</p>
            </div>
          </div>

        </div>
        <style>
          {`
            #map-section {
              height: 100vh;
              width: 100vw;
              padding: 6rem;
              background-image: url('/static/images/team-page/map.jpg');
              background-position: left center;
              background-repeat: no-repeat;
              background-size: cover;
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
            #map-column-container {
              display: flex;
              flex-direction: row;
              align-items: center;
              align-content: center;
              justify-content: center;
              height: 100%;
            }

            .map-section-column {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-content: center;
              align-items: center;
              padding: 1rem;
              width: 33%;
            }

            .section-label {
              padding-top: 0;
            }

            .map-number {
              color: white;
              font-size: 9rem;
              margin-bottom: -20px;
              font-family: Hennigar;
              opacity: 1;
            }



            .map-small-h-line {
              background-color: white;
              width: 60px;
              height: 2px;
            }

            .map-text {
              color: white;
              font-family: Sabon;
              font-size: 1.5rem;
              font-weight: 500;
              margin-top: 20px;
            }

            @media (max-width: 800px) {
              #map-column-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                align-content: center;
                justify-content: center;
                height: 100%;
              }
              .map-number {
                font-size: 7rem;
                letter-spacing: 2px;
              }
              .map-text {
                font-size: 1.5rem;
                margin-top: 5px;
                margin-bottom: 5px;
                line-height: 22px;
              }
              .map-small-h-line {
                margin: 10px 0 12px 0 ;
              }
              #map-section-label {
                margin-bottom: 2rem !important;
              }

            }

            @media (max-width: 420px) {
              #map-section {
                padding: 2rem;
              }
              #map-column-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                align-content: center;
                justify-content: center;
                height: 100%;
              }
              #map-section-label {
                margin-bottom: 0 !important;
                padding-left: 0 !important;
              }

              .map-number {
                font-size: 4rem;
                letter-spacing: 2px;
              }

              .map-small-h-line {
                margin: 15px 0 2px 0 !important;
              }
              .map-text {
                font-size: 1.2rem;
                margin-top: 5px;
                margin-bottom: 5px;
                line-height: 19px;
              }

              #map-section {
                background-position: center;
              }
            }
          
          `}
        </style>
      </section>
    );
  }
}

export default Map;
