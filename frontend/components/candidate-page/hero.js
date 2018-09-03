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
            <div className='first-column'>
              <div className="small-h-line"></div>
              <div className="job-report-number">419</div>
              <p>FILLED POSITIONS</p>
            </div>
            <div className="large-v-line-white"></div>
            <div className='second-column'>
              <div className="small-h-line"></div>
                <div className="job-report-number">381</div>
                <p>OPEN POSITIONS</p>
              </div>
              <div className="large-v-line-white"></div>
            <div className='third-column'>
              <div className="small-h-line"></div>
              <div className="job-report-number">263</div>
              <p>ACTIVE PROFILES</p>
            </div>
            <div className="large-v-line-white"></div>
            <div className='fourth-column'>
              <div className="small-h-line"></div>
              <div className="job-report-number">345</div>
              <p>COMPANY PROFILES</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
