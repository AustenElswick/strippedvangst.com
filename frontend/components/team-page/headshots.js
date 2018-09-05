import React, { Component } from 'react';

class Headshots extends Component {
  render() {
    return (
      <section id="headshot-section">
        <div id="headshot-content">
          <div>
            <h2 id="headshots-title">Meet our team.</h2>
          </div>
          <div id="intro-columns">
            <div id="intro-column-1">
              <p className="intro-column-text">We believe that having an exceptional internal team allows us to best serve our clients. That’s why we pride ourselves on hiring the most talented internal staff for every aspect of our business. Our constant growth is a testament to our devotion to being ahead of the game in the rapidly growing cannabis space.</p>
            </div>
            <div id="intro-column-2">
              <p className="intro-column-text">We vow to use our vast resources and expertise to connect you with the best talent and opportunities in the industry. You can always count on open communication and continuous support from every member of our team.</p>
            </div>
          </div>
          <div id="headshot-container">

            <div className="headshot-card">
              <div className="headshot-label">
                <div className="headshot-name">Karson<br/>Humiston</div>
                <div className="headshot-position">Founder, CEO</div>
              </div>
            </div>
            <div className="headshot-card">
              <div className="headshot-label">
                <div className="headshot-name">Karson<br/>Humiston</div>
                <div className="headshot-position">Founder, CEO</div>
              </div>
            </div>
            <div className="headshot-card">
              <div className="headshot-label">
                <div className="headshot-name">Karson<br/>Humiston</div>
                <div className="headshot-position">Founder, CEO</div>
              </div>
            </div>
            <div className="headshot-card">
              <div className="headshot-label">
                <div className="headshot-name">Karson<br/>Humiston</div>
                <div className="headshot-position">Founder, CEO</div>
              </div>
            </div>
            <div className="headshot-card">
              <div className="headshot-label">
                <div className="headshot-name">Karson<br/>Humiston</div>
                <div className="headshot-position">Founder, CEO</div>
              </div>
            </div>
            <div className="headshot-card">
              <div className="headshot-label">
                <div className="headshot-name">Karson<br/>Humiston</div>
                <div className="headshot-position">Founder, CEO</div>
              </div>
            </div>
            <div className="headshot-card">
              <div className="headshot-label">
                <div className="headshot-name">Karson<br/>Humiston</div>
                <div className="headshot-position">Founder, CEO</div>
              </div>
            </div>
            <div className="headshot-card">
              <div className="headshot-label">
                <div className="headshot-name">Karson<br/>Humiston</div>
                <div className="headshot-position">Founder, CEO</div>
              </div>
            </div>
            <div className="headshot-card">
              <div className="headshot-label">
                <div className="headshot-name">Karson<br/>Humiston</div>
                <div className="headshot-position">Founder, CEO</div>
              </div>
            </div>
            <div className="headshot-card">
              <div className="headshot-label">
                <div className="headshot-name">Karson<br/>Humiston</div>
                <div className="headshot-position">Founder, CEO</div>
              </div>
            </div>
            <div className="headshot-card">
              <div className="headshot-label">
                <div className="headshot-name">Karson<br/>Humiston</div>
                <div className="headshot-position">Founder, CEO</div>
              </div>
            </div>
            <div className="headshot-card">
              <div className="headshot-label">
                <div className="headshot-name">Karson<br/>Humiston</div>
                <div className="headshot-position">Founder, CEO</div>
              </div>
            </div>
            <div className="headshot-card">
              <div className="headshot-label">
                <div className="headshot-name">Karson<br/>Humiston</div>
                <div className="headshot-position">Founder, CEO</div>
              </div>
            </div>
            <div className="headshot-card">
              <div className="headshot-label">
                <div className="headshot-name">Karson<br/>Humiston</div>
                <div className="headshot-position">Founder, CEO</div>
              </div>
            </div>
            <div className="headshot-card">
              <div className="headshot-label">
                <div className="headshot-name">Karson<br/>Humiston</div>
                <div className="headshot-position">Founder, CEO</div>
              </div>
            </div>
            <div className="headshot-card">
              <div className="headshot-label">
                <div className="headshot-name">Karson<br/>Humiston</div>
                <div className="headshot-position">Founder, CEO</div>
              </div>
            </div>

          </div>
        </div>
        <style>
          {`
            #headshot-section {
              min-height: 100vh;
              min-width: 100vw;
              padding: 3rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
            }

            #headshots-title {
              padding-left: 3rem;
            }

            #intro-columns {
              display:flex;
              flex-direction: row;
            }

            .intro-column-text {
              font-weight: 400;
            }

            #intro-column-1 {
              width: 50vw;
              padding: 0 1rem 0 3rem;
            }

            #intro-column-2 {
              width: 50vw;
              padding: 0 3rem 0 1rem;
            }

            #headshot-container {
              display: flex;
              flex-direction: row;
              justify-content: center;
              flex-wrap: wrap;
            }

            .headshot-card {
              width: 150px;
              height: 200px;
              margin: 5px;
              background-color: lightgray;
              border-radius: 5px 5px 0 0; 
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              background-image: url('/static/images/team-page/headshots/karson-humiston.jpg');
              background-position: top center;
              background-repeat: no-repeat;
              background-size: cover;
            }

            .headshot-label {
              width: 100%;
              height: auto;
              padding: 10px;
              background-image: linear-gradient(to bottom, rgba(240, 86, 31, 0) 0, #f0561f 100%);
              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;
            }

            .headshot-name {
              font-family: Brandon Grotesque Bold;
              color: white;
              font-size: 1.5rem;
              line-height: 20px;
              font-weight: 600;
            }

            .headshot-position {
              font-family: Brandon Grotesque Bold;
              color: white;
              font-size: 1rem;
              font-weight: 700;
              padding-top: 2px;
            }


          
          
          `}
        </style>
      </section>
    );
  }
}

export default Headshots;
