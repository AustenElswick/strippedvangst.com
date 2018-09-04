import React, { Component } from 'react';
import Link from 'next/link'

class BestRecruiters extends Component {
  render() {
    return (
      <section id="recruiter-section" className="hero-section">
        <div id="recruiter-section-content">
          <div id="recruiter-section-label" className="section-label">
            <p id="recruiter-label-number" className="section-number text-white">.02</p>
            <p id="recruiter-label-text" className="section-text text-white">The best recruiters in the biz</p>
          </div>
        <h2 id="recruiter-section-title">Seasoned recruiters with  <br/>deep industry knowledge</h2>
        <div className="white-line"></div>
          <p id="recruiter-main-text"className="text-white">We know you’re growing, so we’re here to ensure you find and keep the talent you need. Our recruiters are an extension of your organization, ready to utilize our cannabis expertise and network to provide you with immediate solutions and exceed your expectations. We’re proud to work with our clients every step of the way to ensure effective, long-term hires.
        </p>
        <div className="white-line"></div>
        <p id="recruiter-quote">"Vangst has been instrumental in doubling our team size over the past six months by sourcing candidates for finance, sales, engineering, marketing, and customer success. I’m excited to see Vangst continue to expand their offerings through Vangsters and proved much needed services to our rapidly growing industry. The same amount of vetting that we have historically need to do on our own is now being handled by a very capable team that is aware of the high standards we employ in our hiring process."</p>
        <div id="recruiter-author-container">
          <p id="recruiter-quote-author-name" className="justify-content-right">-Roger Obando, CTO, Baker Technologies</p>
        </div>
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

          #recruiter-section-label {
            padding-bottom: 2rem;
          }

          #recruiter-quote {
            color: #ffffff !important;
            font-family: Brandon Grotesque Regular Italic;
            font-weight: 900 !important;
            font-size: 1.5rem;
            line-height: 28px;
            padding: 1rem 2rem 0.5rem 2rem;
          }

          #recruiter-quote-author-name {
            color: white !important;
            font-weight: 400;
            padding-right: 2rem;
          }

          #recruiter-author-container {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            margin-bottom: 2rem;
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
            padding: 1rem;
          }

          @media (max-width: 1140px) {
            #recruiter-section-title {font-size: 3rem;}
            #recruiter-quote {font-size: 1.2rem;}
            #recruiter-quote-author-name {font-size: 1rem;}
          }

          @media (max-width: 1010px) {
            #recruiter-section-title {font-size: 3rem;}
            #recruiter-quote {font-size: 1.2rem; line-height: 22px; padding: 0 0 20px 0;}
            #recruiter-quote-author-name {font-size: 1rem; padding-top: 0;}
            #recruiter-main-text {line-height: 22px;}
            #recruiter-section-content {max-width: 68%;}
          }

          @media (max-width: 847px) {
            #recruiter-section-title {font-size: 2.5rem;}
            #recruiter-quote {font-size: 1.1rem; line-height: 22px; padding: 0 0 20px 0;}
            #recruiter-quote-author-name {font-size: 1rem; padding-top: 0;}
            #recruiter-main-text {line-height: 22px; font-size: 1rem;}
            #recruiter-section-content {max-width: 72%; padding: 3rem;}
          }

          @media (max-width: 655px) {
            #recruiter-section-title {font-size: 2rem;}
            #recruiter-quote {display:none;}
            #recruiter-quote-author-name {display:none;}
            #recruiter-main-text {line-height: 22px; font-size: 1.1rem;}
            #recruiter-section-content {max-width: 70%; padding: 3rem;}
            #recruiter-label-number {font-size: 1rem;}
            #recruiter-label-text {font-size: 1rem;}
            #recruiter-button-container {padding: 0;}
          }

          @media (max-width: 565px) {
            #recruiter-section-title {font-size: 1.5rem;}
            #recruiter-main-text {line-height: 19px; font-size: 1rem;}
            #recruiter-section-content {max-width: 70%; padding: 2rem;}
            #recruiter-label-number {font-size: 0.9rem;}
            #recruiter-label-text {font-size: 0.9rem;}
            #recruiter-button-container {padding: 0;}
            #recruiter-section-label {padding: 0 0 1rem 0;}
          }

          @media (max-width: 480px) {
            #recruiter-section-title {font-size: 1.5rem;}
            #recruiter-main-text {line-height: 19px; font-size: 1rem;}
            #recruiter-section-content {max-width: 75%; padding: 2rem;}
            #recruiter-label-number {font-size: 0.9rem;}
            #recruiter-label-text {font-size: 0.9rem;}
            #recruiter-button-container {padding: 0;}
            #recruiter-section-label {padding: 0 0 1rem 0;}
          }

          @media (max-width: 400px) {
            #recruiter-section-content {max-width: 75%; padding: 1rem;}
            #recruiter-button-link {font-size: 1rem;}
          }
          
          
          `}
        </style>
      </section>
    );
  }
}

export default BestRecruiters;
