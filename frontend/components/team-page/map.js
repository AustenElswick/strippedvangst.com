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
              <div className="small-h-line"></div>
              <p className="map-text">states served</p>
            </div>
            <div className="map-section-column">
              <div className="map-number">2,500</div>
              <div className="small-h-line"></div>
              <p className="map-text">partnering companies</p>
            </div>
            <div className="map-section-column">
              <div className="map-number">15,000</div>
              <div className="small-h-line"></div>
              <p className="map-text">jobs placed</p>
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
              background-size: contain;
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



            .small-h-line {
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
          
          `}
        </style>
      </section>
    );
  }
}

export default Map;
