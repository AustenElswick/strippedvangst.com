import React, { Component } from 'react';

class CandidateDataBase extends Component {
  render() {
    return (
      <section id="database-section" className="hero-section">
        <div id="database-section-content" className="container">
          <div id="left-column">
            <div id="db-section-label" className="section-label">
                <p className="section-number text-white">.01</p>
                <p className="section-text text-white">We have the best people in the business</p>
            </div>
            <h2>We have the largest candidate database</h2>
            <div id="db-white-line" className="white-line"></div>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a velit in diam dignissim pharetra. Fusce vitae mi sit amet mauris condimentum blandit. Pellentesque sodales dapibus elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent commodo erat non massa pulvinar dignissim. Nunc efficitur accumsan odio, eget finibus.</p>
            <div id="db-white-line" className="white-line"></div>
            <div id="stats-row">
              <div className="stat-container text-center">
                <p className="text-white stat-text">40,000+ <br/>job seekers.</p>
              </div>
              <div className="stat-container text-center">
                <p className="text-white stat-text">The best talent from inside<br/> &amp; outside the industry.</p>
              </div>
              <div className="stat-container text-center">
                <p className="text-white stat-text">Pre-qualified <br/> and super legit.</p>
              </div>
            </div>
          </div>
          <div>
            <div id="db-img-container">
              <img src='/static/images/employer-page/sec_01/woman.jpg' />
            </div> 
            <div id="testimonial-container">
              <p id="testimonial-quote" className="text-white text-center">"Vangst is the clear choice for the cannabis industry recruiting due to their passion, professionalism and deep rooted network within the space."</p>
              <p id="testimonial-name" className="text-white">- Jeff, Green Peak Industries</p>
            </div>             
          </div>
        </div>
        <style>
          {`
            h2 {color: white !important}
            p {color: white; font-size: 1.2rem;}
            img {width: 250px; height: auto;}
            
            #database-section {
              background-image: url('/static/images/employer-page/sec_01/orange-background.jpg');
              min-height: 100vh;
              min-width: 100vw;
              display: flex; 
              flex-direction: column;
              align-items: center;
              justify-content: center;
            
            }
          #database-section-content {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            align-content: center;
          }

          #left-column {
            margin-right: 2rem;
          }

          #db-section-label {
            padding-bottom: 2rem;
          }

          #db-white-line {
            height: 3px;
          }
          #stats-row {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }

          .stat-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            align-items: center;
            color: white;
            padding-right: 10px;
            padding-left: 10px;
          }

          .stat-text {
            font-family: Brandon Grotesque Regular Italic;
            font-weight: 700;
            font-size: 1.4rem;
            line-height: 25px;
          }

          #db-img-container {
            padding: 1rem;
            border: solid 1px #FFFFFF;
            margin: 2rem;
          }

          #testimonial-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            align-items: center;
            padding-right: 2rem;
            padding-left: 2rem;
          }
          #testimonial-quote {
            font-weight: 700;
            font-size: 1.2rem;
          }

          #testimonial-name {
            font-weight: 400;
            padding-top: 20px;
            font-size: 1.2rem;
          }




          `}
        </style>
      </section>
    );
  }
}

export default CandidateDataBase;
