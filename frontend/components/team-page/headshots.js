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
          <div>
            <p>Headshots go here...</p>
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
          
          
          `}
        </style>
      </section>
    );
  }
}

export default Headshots;
