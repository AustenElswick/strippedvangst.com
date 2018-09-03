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
              <div className="job-report-number">419</div>
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
              <div className="job-report-number">263</div>
              <p className="text-white">ACTIVE PROFILES</p>
            </div>
            <div className="large-v-line-white"></div>
            <div className='single-column'>
              <div className="small-h-line"></div>
              <div className="job-report-number">345</div>
              <p className="text-white">COMPANY PROFILES</p>
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

            
          `}</style>
      </section>
    );
  }
}

export default Hero;
