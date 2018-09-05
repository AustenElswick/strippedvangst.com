import React, { Component } from 'react';

class TestimonyCarousel extends Component {
  render() {
    return (
      <section id="carousel-section">
        <div id="carousel-section-content">
          <div id="left-carousel-column">
            <h3 id="carousel-quote">"The company is a pleasure to work with.  I can honestly say, Vangst is very timely with providing candidates and most importantly the candidates they present are all viable candidates. The employees and the owner have great customer service and are a pleasure to do business with."</h3>
          </div>
          <div id="author-container">
            <div className="small-vertical-line-white"></div>
            <h4 id="quote-author-name">KIRSTEN, DENVER</h4>
            <div className="small-vertical-line-white"></div>
          </div>

        </div>
        <style>
          {`
          #carousel-section {
            min-height: 33vh;
            min-width: 100vw;
            background-image: url('/static/images/employer-page/testimonials/carousel-image.jpg');
            background-position: center-top;
            background-repeat: no-repeat;
            background-size: cover;
            padding: 2rem;
            display: flex;
            flex-direction: row;
            justify-content: center;
          }

          #carousel-section-content {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-content: center;
            align-items: center;
          }

          #left-carousel-column {
            display: flex;
            flex-dirction: column;
            justify-content: center;
            width: 60%;
            padding-right: 2rem;
          }

          #carousel-quote {
            color: white;
            line-height: 33px;
            font-size: 1.5rem;
            opacity: 1;

          }


          .quotation-marks {
            font-size: 3rem;
          }

          #author-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            align-content: center;
          }

          #quote-author-name {
            color: white;
            font-family: Brandon Grotesque Regular;
            padding-left: 10px;
            padding-right: 10px;
            padding-top: 4px;
          }

          .small-vertical-line-white {
            width: 2px;
            height: 35px;
            background-color: white;
            border: none;
          }

          @media (max-width: 1300px) {
            #carousel-section-content {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-content: center;
              align-items: center;
            }
            #left-carousel-column {
              width: 100%;
              padding: 0;
            }
          }

          @media (max-width: 1100px){
            #carousel-quote {font-size: 1.2rem;}
          }

          @media (max-width: 900px){
            #carousel-quote {font-size: 1rem; line-height: 22px;}
          }

          @media (max-width: 565px){
            #carousel-quote {font-size: 1rem; line-height: 18px;}
            #quote-author-name {font-size: 1rem;}
          }
          
          `}
        </style>
      </section>
    );
  }
}

export default TestimonyCarousel;
