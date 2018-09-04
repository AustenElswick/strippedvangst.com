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
          <p className="text-white">We know you’re growing, so we’re here to ensure you find and keep the talent you need. Our recruiters are an extension of your organization, ready to utilize our cannabis expertise and network to provide you with immediate solutions and exceed your expectations. We’re proud to work with our clients every step of the way to ensure effective, long-term hires.
        </p>
        <div className="white-line"></div>
        <p id="recruiter-quote">"“Vangst has been instrumental in doubling our team size over the past six months by sourcing candidates for finance, sales, engineering, marketing, and customer success. I’m excited to see Vangst continue to expand their offerings through Vangsters and proved much needed services to our rapidly growing industry. The same amount of vetting that we have historically need to do on our own is now being handled by a very capable team that is aware of the high standards we employ in our hiring process."<span id="recruiter-quote-author-name">-Roger Obando, CTO, Baker Technologies</span></p>
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
            overflow: hidden;
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
            padding: 1rem 2rem 2rem 2rem;
          }

          #recruiter-quote-author-name {
            margin: 20px;
            font-weight: 400;

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
