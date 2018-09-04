import React, { Component } from 'react';
import EmailFormVangsters from '../EmailFormVangsters';

class SaveMoneyAndTime extends Component {
  render() {
    return (
      <section id="time-money-section">
        <div id="time-money-title-container">
          <h3 id="section-title" className="text-white">HOW WE SAVE YOU TIME AND MONEY</h3>
          <div className="small-gray-line-h"></div>
        </div>
          <div id="time-money-content">
            <div id="section-infographic">
              <div className="infographic-columns">
                <img src="/static/images/employer-page/time-money/head.png"></img>
                <p className="infographic-text text-center">Lorem Ispsum dolor bole pintraneous bouserat</p>
              </div>
              <div className="infographic-columns">
                <img src="/static/images/employer-page/time-money/circle.png"></img>
                <p className="infographic-text text-center">Lorem Ispsum dolor bole pintraneous bouserat</p>
              </div>
              <div className="infographic-columns">
                <img src="/static/images/employer-page/time-money/phone.png"></img>
                <p className="infographic-text text-center">Lorem Ispsum dolor bole pintraneous bouserat</p>
              </div>
              <div className="infographic-columns">
                <img src="/static/images/employer-page/time-money/webpage.png"></img>
                <p className="infographic-text text-center">Lorem Ispsum dolor bole pintraneous bouserat</p>
              </div>
              <div className="infographic-columns">
                <img src="/static/images/employer-page/time-money/thumb.png"></img>
                <p className="infographic-text text-center">Lorem Ispsum dolor bole pintraneous bouserat</p>
              </div>
              
            </div>
            <div id="email-time-money">
              <EmailFormVangsters />
            </div>
          </div>
          <style>
            {`
            #time-money-section {
              padding: 3rem;
              min-height: 100vh;
              min-width: 100vw;
              background-color: #f0561f;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              align-content: center;
            }

            #time-money-title-container {
              display: flex;
              flex-direction: column;
              align-items: center;
              padding-bottom: 5rem;
            }
            
            .infographic-text {
              color: white !important;
              padding-top: 2rem;
            }

            #section-infographic {
              display: flex;
              flex-direction: row;
            }

            .infographic-columns {
              max-width: 20%;
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              align-items: center;
              align-content: center;
              padding: 1rem;
            }

            #email-time-money {
              margin-top: 4rem;
            }

            #subscribe-button {
              border: solid 1px; white;
            }

            
            
            `}
          </style>
      </section>
    );
  }
}

export default SaveMoneyAndTime;
