import React, { Component } from 'react';

class Testimony extends Component {
  render() {
    return (
      <section id="testimony-section">
        <div id="testimony-content">
          <div className="testimony-column">
            <h3 id="testimony-title" className="text-center">“Vangst has the secret sauce: great people.”</h3>
            <div id="testimony-quote-container">
              <p className="text-dark">“Vangst has been a force multiplier for our business. Together with our in-house recruiting team they hired over 200 GTI team members this calendar year across eight states. Vangst has the secret sauce: they hire great people to recruit great people.”</p>
            </div>
          </div>
          <div className="testimony-column">
            <img id="testimony-headshot" src="/static/images/team-page/pete-kadens.jpg"></img>
            <p id="testimony-author-details" className="text-center">Peter Kadens | CEO | Green Thumb Industries (GTI)</p>
          </div>
        </div>
        <style>
          {`
            #testimony-section {
              height: 50vh;
              width: 100vw;
              padding: 4rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
              border-bottom: solid 1px #dadada;
            }

            #testimony-content {
              display: flex;
              flex-direction: row;
              justify-content: space-around;
              align-items: center;
            }

            .testimony-column {
              width: 50%;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }

            #testimony-title {
              font-family: Brandon Grotesque Bold Italic;
              letter-spacing: 1px;
              font-size: 2rem;
            }

            #testimony-quote-container {
              padding: 1rem 3rem 1rem 3rem;
            }

            #testimony-headshot {
              display: block;
              height: auto;
              width: 35%;
            }

            #testimony-author-details {
              font-family: Brandon Grotesque Regular;
              font-weight: 400;
              letter-spacing: 1px;
              margin-top: 1rem;
            }

            @media (max-width: 800px) {
              #testimony-section {
                padding: 2rem;
              }
              #testimony-headshot {
                width: 60%;
              }
              #testimony-quote-container {
                padding: 1rem 0 1rem 0;
              }
              #testimony-author-details {
                padding-left: 1rem;
                padding-right: 1rem;
              }
            }

            @media (max-width: 420px) {
              #testimony-section {
                height: 100vh;
                padding: 2rem;
              }
              #testimony-content {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 100%;
              }
              .testimony-column {
                width: 100vw;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                align-content: center;
              }
              #testimony-headshot {
                width: 50%;
              }
              #testimony-author-details {
                font-size: 1rem;
                letter-spacing: 0px;
              }
            }

            @media (max-width: 380px) {
              #testimony-quote-container {
                padding-left: 2rem;
                padding-right: 1rem;
              }
              #testimony-author-details {
                margin-top: 2rem;
              }
            }
          `}
        </style>
      </section>
    );
  }
}

export default Testimony;
