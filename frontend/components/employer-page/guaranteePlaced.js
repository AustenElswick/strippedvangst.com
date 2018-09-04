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
        <h2 id="placement-title">100% guarantee of placed candidates</h2>
        <div className="white-line"></div>
          <p className="text-white" id="placement-quote">“From the inception of our meeting, Vangst was enthusiastic and attentive to the resource need, and worked diligently to sourced and qualify candidates for the position. Vangst provided attuned service over the course of the engagement to understand and adapt in working to fill the role, and maintained consistent communication with coordinating an exceptional solution to the need.”</p>
          <div id="placement-quote-container">
            <p id="placement-quote-author">- Nelson Oliver, Controller, O.pen Vape</p>
          </div>
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
              margin: 10px;
              color: white !important;
            }

            #placement-quote-container {
              display: flex;
              flex-direction: row;
              justify-content: flex-end;
            }

            @media (max-width: 1175px) {
              #placement-section-content {max-width: 100%;}
              #placement-title {font-size: 4rem;}
            }

            @media (max-width: 1035px) {
              #placement-section-content {max-width: 100%;}
              #placement-title {font-size: 5rem;}
            }

            @media (max-width: 710px) {
              #placement-title {font-size: 4rem; line-height: 70px;}
            }

            @media (max-width: 600px) {
              #placement-section-content {padding: 2rem;}
            }

            @media (max-width: 527px) {
              #placement-section-content {padding: 2rem;}
              #placement-title {font-size: 3rem; line-height: 50px;}
              #placement-quote {font-size: 1.1rem; line-height: 20px;}
              #placement-quote-author {font-size: 1rem;}
              #db-section-label {padding-top: 0;}
            }

            @media (max-width: 410px) {
              #placement-title {font-size: 2rem; line-height: 30px;}
              #placement-quote {font-size: 1rem; line-height: 20px;}
            }



           


          `}
        </style>
      </section>
    );
  }
}

export default GuaranteePlaced;
