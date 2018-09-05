import React, { Component } from 'react';

class Testimony extends Component {
  render() {
    return (
      <section id="testimony-section">
        <div id="testimony-content">
          <div className="testimony-column">
            <h3 id="testimony-title">“Vangst has the secret sauce: great people.”</h3>
            <div id="testimony-quote-container">
              <p className="text-dark">“Vangst has been a force multiplier for our business. Together with our in-house recruiting team they hired over 200 GTI team members this calendar year across eight states. Vangst has the secret sauce: they hire great people to recruit great people.”</p>
            </div>
          </div>
          <div className="testimony-column">
            <img id="testimony-headshot" src="/static/images/team-page/pete-kadens.jpg"></img>
            <p id="testimony-author-details">Peter Kardens | CEO | Green Thumb Industries (GTI)</p>
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
              font-weigth: 400;
              letter-spacing: 1px;
              margin-top: 1rem;
            }
          
          `}
        </style>
      </section>
    );
  }
}

export default Testimony;
