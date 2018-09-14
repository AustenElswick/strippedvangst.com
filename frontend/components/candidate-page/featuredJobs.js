import React, { Component } from "react";
import Link from "next/link";

class FeaturedJobs extends Component {
  render() {
    return (
      <section
        id="featuredjobs-section"
        className="section section-top section-full"
      >
        <div id="featured-jobs-content" className="container">
          <div className="title-container">
            <h3 id="featured-jobs-section-title">FEATURED JOBS</h3>
            <div className="black-line-h" />
          </div>
          <div className="job-posting">
            <h3 className="featured-jobs-titles">
              Director of Extraction | Boston, MA
            </h3>
            <p className="text-dark featured-job-description">
              Manage day-to-day operations in a regulated, cannabis extraction
              facility. This includes extracting cannabis, post-extraction
              processing, product development, packaging, and distribution.
            </p>
            <Link href="/cannabis-jobseeker">
              <a className="view-link">View ></a>
            </Link>
          </div>
          <div className="job-posting">
            <h3 className="featured-jobs-titles">
              Director of Cultivation | Los Angeles, CA
            </h3>
            <p className="text-dark featured-job-description">
              Our Director of Cultivation will provide leadership, oversight and
              management to our entire Cultivation Department. We’re looking for
              someone who has extensive cannabis growing experience as well as
              grow management experience.
            </p>
            <Link href="/cannabis-jobseeker">
              <a className="view-link">View ></a>
            </Link>
          </div>
          <div id="job-3" className="job-posting">
            <h3 className="featured-jobs-titles">
              Dispensary Store Manager | Seattle, WA
            </h3>
            <p className="text-dark featured-job-description">
              Oversee the grand opening of our client’s dispensary, as well as,
              creating and implementing SOPs, training staff, onboarding a POS
              system, as well as working closely with the executive team.
            </p>
            <Link href="/cannabis-jobseeker">
              <a className="view-link">View ></a>
            </Link>
          </div>
          <Link href="/cannabis-jobseeker">
            <a>
              <div id="featured-button-container">
                <div className="black-line-h" />
                <h3 id="featured-button-text">SHOW MORE JOBS ></h3>
                <div className="black-line-h" />
              </div>
            </a>
          </Link>
        </div>
        <style>
          {`
            #featuredjobs-section{
              min-height: 100vh;
              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;
              display: flex;
              flex-direction: column;
              justify-content: center;
            }

            #featured-job-content {
              padding: 2rem;
            }
            
            .title-container {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
            
            .job-posting{ padding-top: 2rem; } 


            .view-link {
              font-family: Sabon Italic;
              color: #f0561f;
            }

            .view-link:hover {
              color: #f0561f;
            }

            .black-line-h {
              height: 1px;
              width: 175px;
              background-color: black;
              opacity: 0.8;
            }

            #featured-button-container {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin-top: 2rem;

            }
            #featured-button-text {
              font-size: 1rem;
              margin: 0.5rem; 
              text-decoration: none;
              color: black;

            }

            @media (max-width: 575px){
              h4 {
                font-size: 1.25rem;
              }
              p {font-size: 0.9rem; line-height: 100%}
            }

            @media (max-width: 420px) {
              .featured-jobs-titles {font-size: 0.9rem; font-weight: 700; }
              #featured-jobs-section-title {font-size: 1.5rem;}
              .featured-job-description {margin-bottom: 1px;}
              .job-posting {padding-top: 1.25rem;}
              #featured-button-container {margin-top: 1rem;}
              .view-link {font-size: 0.8rem;}
            }
            @media (max-width: 321px) {
              #job-3 {display: none;}
            }
            
          `}
        </style>
      </section>
    );
  }
}

export default FeaturedJobs;
