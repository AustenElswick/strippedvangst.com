import React, { Component } from 'react';
import Link from 'next/link'

class GuaranteePlaced extends Component {
  render() {
    return (
      <section id="placement-section" className="hero-section">
        <div id="placement-section-content">
          <div id="db-section-label" className="section-label">
            <p id="placement-section-number" className="section-number text-white">.03</p>
            <p id="placement-section-text" className="section-text text-white">We back every one of our candidates</p>
          </div>
        <h2 id="placement-title">100% guarantee of<br/> placed candidates</h2>
        <div className="white-line"></div>
          <p className="text-white" id="placement-quote">“From the inception of our meeting, Vangst was enthusiastic and attentive to the resource need, and worked diligently to sourced and qualify candidates for the position. Vangst provided attuned service over the course of the engagement to understand and adapt in working to fill the role, and maintained consistent communication with coordinating an exceptional solution to the need.”
        <span id="placement-quote-author">-Nelson Oliver, Controller, O.pen Vape</span></p>
        <div className="white-line"></div>
        </div>
        <style>
          {`
            #placement-section {
              background-image: url('/static/images/employer-page/sec_03/background-image.jpg');
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
              align-items: center;
              min-height: 100vh;
              min-width: 100vw;
              overflow: hidden;
            }

            #placement-section-content {
              padding: 4rem;
              max-width: 70%;
}           
            #placement-section-number {
              font-weight: 700;
            }

            #placement-section-text {
              font-weight: 700;
            }
          
            #placement-title {
              font-size: 6rem;
              line-height: 100px;
            }

            #placement-quote {
              font-weight: 700;
            }

            #placement-quote-author {
              font-weight: 400;
              margin: 20px;
            }

           


          `}
        </style>
      </section>
    );
  }
}

export default GuaranteePlaced;
