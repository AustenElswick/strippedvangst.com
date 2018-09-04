import React, { Component } from 'react';
import Link from 'next/link'

class BestRecruiters extends Component {
  render() {
    return (
      <section id="recruiter-section" className="hero-section">
        <div id="recruiter-section-content">
          <div id="db-section-label" className="section-label">
            <p className="section-number text-white">.02</p>
            <p className="section-text text-white">The best recruiters in the biz.</p>
          </div>
        <h2>Seasoned recruiters with  <br/>deep industry knowledge</h2>
        <div className="white-line"></div>
          <p className="text-white">The cannabis industry has all types of recruiting needs, and that’s why we’ve hired (and are constantly hiring) top recruiters with all different backgrounds. Our 50+ full time recruiting team comes from Executive, Technology, Retail, Pharmaceutical, Food & Beverage, Finance, Engineering, and manufacturing recruiting backgrounds. We believe our recruiting backgrounds + deep cannabis industry knowledge is the key to our success. Our clients are our partners, and we’re proud to work with them every step of the way to ensure effective, long term hires.
        </p>
        <div className="white-line"></div>
        <p id="recruiter-quote">"something about how are recruiters are the best and most qualified Whether you are looking for temporary or permanent employees our recruiters.. blah blah idk idk"</p>
        <div id="recruiter-button-container">
          
          <div id="recruiter-button-outline">
            <Link href='/team'>
                <a id="recruiter-button-link">Meet our team of experts ></a>
            </Link>
          </div>
        </div>
        </div>
        <style>
          {`

          #recruiter-section {
            background-image: url('/static/images/employer-page/sec_02/background-image.jpg');
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            min-height: 100vh;
            min-width: 100vw;
          }

          #recruiter-section-content {
            padding: 4rem;
            max-width: 64%;
          }

          #recruiter-quote {
            color: #ffffff !important;
            font-family: Brandon Grotesque Regular Italic;
            font-weight: 900 !important;
            font-size: 1.5rem;
            line-height: 28px;
            padding: 2rem;
          }

          #recruiter-button-link {
            text-decoration: none;
            color: white;
            font-family: Sabon Italic;
            font-size: 1.2rem;

          }

          #recruiter-button-outline {
            border: 1px solid #ffffff;
            padding: 0.4rem;
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 300px;
          }

          #recruiter-button-container {
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
          
          
          `}
        </style>
      </section>
    );
  }
}

export default BestRecruiters;
