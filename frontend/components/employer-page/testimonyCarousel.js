import React, { Component } from 'react';

class TestimonyCarousel extends Component {
  render() {
    return (
      <section id="carousel-section">
        <div id="carousel-section-content">
          <div id="left-carousel-column">
            <h3 id="carousel-quote"><span className="quotation-marks">" </span>I have worked with Vangst over time for recruiting services and I rarely write reviews, but felt this one is well deserved. The company is a pleasure to work with. I used to work in the big corporate world and I managed many contracts for recruiting myself. I can honestly say, Vangst is very timely with providing candidates and most importantly the candidates they present are all viable candidates. In addition to that, the employees and the owner have great customer service and are a pleasure to do business with. <span className="quotation-marks">"</span></h3>
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
            min-height: 50vh;
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
            flex-diretion: row;
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
          
          `}
        </style>
      </section>
    );
  }
}

export default TestimonyCarousel;
