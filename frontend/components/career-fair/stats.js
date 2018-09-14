import React, { Component } from "react";

class Stats extends Component {
  render() {
    return (
      <section id="career-fair-section">
        <div className="container candidate-page-content">
          <div className="all-columns-hero">
            <div className="single-column">
              <div className="small-h-line" />
              <div className="d-flex flex-row">
                <div className="job-report-number">2K</div>
                <div className="job-number-symbol">+</div>
              </div>
              <p className="text-center">JOB SEEKERS</p>
            </div>
            <div className="large-v-line-white" />
            <div className="single-column">
              <div className="small-h-line" />
              <div className="d-flex flex-row">
                <div className="job-report-number">45</div>
                <div className="job-number-symbol">+</div>
              </div>
              <p className="text-center">
                RECRUITING
                <br /> COMPANIES
              </p>
            </div>
            <div className="large-v-line-white" />
            <div className="single-column">
              <div className="small-h-line" />
              <div className="d-flex flex-row">
                <div className="job-report-number">600</div>
                <div className="job-number-symbol">+</div>
              </div>
              <p className="text-center">INTERVIEWS</p>
            </div>
            <div className="large-v-line-white" />
            <div className="single-column">
              <div className="small-h-line" />
              <div className="d-flex flex-row">
                <div className="job-report-number">500</div>
                <div className="job-number-symbol">+</div>
              </div>
              <p className="text-center">POSITIONS FILLED</p>
            </div>
          </div>
        </div>
        <style jsx>{`
          #career-fair-section{
            background-color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            align-content: center;
          }
          
          .career-fair-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            align-content: center;
          }

          .single-column {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            flex-wrap: wrap:
            align-content: flex-start;
            align-items: flex-start;
          }
          
          .all-columns-hero {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
            flex-wrap: wrap;
            margin-top: 3rem;
          }

          .job-report-number  {
            font-size: 5rem;
            margin-bottom: 0;
            font-family: Hennigar;
            opacity: 1;
            margin-bottom: -0.5rem;
          }

          .job-report-number {color: #505050;}

          p {color: #505050;}
          
          .small-h-line {
            background-color: #505050;
            width: 40px;
            height: 4px;
          }
          
          .large-v-line-white {
            background-color: #505050;
            width: 1px;
            height: 120px;
            margin-right: 2rem;
            margin-left: 2rem;
          }

          .job-number-symbol {
            font-family: Brandon Grotesque Bold;
            color: black;
            font-weight: 500;
            font-size: 3rem;
            color: #505050;
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

export default Stats;
