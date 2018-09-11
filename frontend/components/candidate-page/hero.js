import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <section id="candidate-page-hero" className="hero-section">
        <div className="container candidate-page-content">
          <div id="white-leaf">
            <img src='/static/images/candidate-page/leaf-white.png' />
          </div>
          <div className='all-columns-hero'>
            <div className='single-column'>
              <div className="small-h-line"></div>
              <div className="job-report-number">7,500</div>
              <p className="text-white">FILLED POSITIONS</p>
            </div>
            <div className="large-v-line-white"></div>
            <div className='single-column'>
              <div className="small-h-line"></div>
              <div className="job-report-number">381</div>
              <p className="text-white">OPEN POSITIONS</p>
            </div>
            <div className="large-v-line-white"></div>
            <div className='single-column'>
              <div className="small-h-line"></div>
              <div className="d-flex flex-row justify-content-center align-items-center">
                <div id="cand-num-1" className="job-report-number">80,000</div>
                <div id="cand-num-2" className="job-report-number">80K</div>
                <div className="h3 job-number-symbol">+</div>
              </div>
              <p className="text-white">CANDIDATES</p>
            </div>
            <div className="large-v-line-white"></div>
            <div className='single-column'>
              <div className="small-h-line"></div>
              <div className="d-flex flex-row justify-content-center align-items-center">
                <div className="job-report-number">600</div>
                <div className="h3 job-number-symbol">+</div>
              </div>
              <p className="text-white">COMPANIES</p>
            </div>
          </div>
        </div>
        <style jsx>{`
          #candidate-page-hero {
            background-image: url("/static/images/candidate-page/woman-orange.jpg");
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            align-content: center;
          }
          
          .candidate-page-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            align-content: center;
          }
          
          #white-leaf {
            margin-bottom: 2rem;
          }

          .single-column {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap:
          }
          
          .all-columns-hero {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
          }
          
          .small-h-line {
            background-color: white;
            width: 40px;
            height: 4px;
          }
          
          .large-v-line-white {
            background-color: white;
            width: 1px;
            height: 120px;
            margin-right: 2rem;
            margin-left: 2rem;
          }

          .job-report-number  {
            font-size: 5rem;
            margin-bottom: 0;
            font-family: Hennigar;
            opacity: 1;
            margin-bottom: -0.5rem;
            color: white;
          }

          .job-number-symbol {
            font-family: Brandon Grotesque Bold;
            color: white;
            font-weight: 700;
          }

          .number-with-symbol {
            display: flex;
            flex-direction: row;
          }

          @media (max-width: 992px) {
            p {
              font-size: 0.75rem;
            }
            .large-v-line-white {
              margin-right: 0.75rem;
              margin-left: 0.75rem;
            }
          }

          @media (max-width: 768px) {
            .job-report-number {
              font-size: 5rem;
            }
            .single-column {
              width: 50%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              padding-bottom: 2rem;
            }
            .large-v-line-white {
              display: none;
            }
            .all-columns-hero {
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              align-content: center;
            }
          }

          @media (max-width: 415px) {
            .job-report-number {
              font-size: 4rem;
            }
            #cand-num-1 {display: none;}
          }
          @media (min-width: 416px) {
            #cand-num-2 {display: none;}
          }

          #job-number-symbol {
            font-family: Brandon Grotesque Bold;
            color: black;
            font-weight: 700;
            font-size: 2rem;
          }

            
          `}</style>
      </section>
    );
  }
}

export default Hero;
