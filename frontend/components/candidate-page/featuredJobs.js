import React, { Component } from 'react';
import Link from 'next/link'

class FeaturedJobs extends Component {
  render() {
    return (
      <section id="featuredjobs-section" className="section section-top section-full">
        <div id="featured-jobs-content" className="container">
          <div className="title-container">
            <h3 id="featured-jobs-section-title">FEATURED JOBS</h3>
            <div className="black-line-h"></div>
          </div>
          <div className='job-posting'>
            <h3 className="featured-jobs-titles">Senior Project Manager</h3>
            <p className="text-dark featured-job-description">lorem ipsum dolor sit amet, consectuetur adispicsci elit.  Aliquam in diam sed arcu suspcipit consectetur. Pellentescquee elementeum enim vitae.</p>
            <Link href='/work-for-vangst'><a className="view-link">View ></a></Link>
          </div>
          <div className='job-posting'>
            <h3 className="featured-jobs-titles">Product Tester</h3>
            <p className="text-dark featured-job-description">lorem ipsum dolor sit amet, consectuetur adispicsci elit.  Aliquam in diam sed arcu suspcipit consectetur. Pellentescquee elementeum enim vitae.</p>
            <Link href='/work-for-vangst'><a className="view-link">View ></a></Link>
          </div>
          <div className='job-posting'>
            <h3 className="featured-jobs-titles">Sales Director</h3>
            <p className="text-dark featured-job-description">lorem ipsum dolor sit amet, consectuetur adispicsci elit.  Aliquam in diam sed arcu suspcipit consectetur. Pellentescquee elementeum enim vitae.</p>
            <Link href='/work-for-vangst'><a className="view-link">View ></a></Link>
          </div>
         
          <Link href='/work-for-vangst'>
            <a>
              <div id="featured-button-container">
                <div className="black-line-h"></div>
                <h3 id="featured-button-text">SHOW MORE JOBS ></h3>
                <div className="black-line-h"></div>
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
              .featured-jobs-titles {font-size: 1.2rem;}
              #featured-jobs-section-title {font-size: 1.5rem;}
              .featured-job-description {margin-bottom: 5px;}
              .job-posting {padding-top: 1.25rem;}
              #featured-button-container {margin-top: 1rem;}
              .view-link {font-size: 0.8rem;}
            }
          `}
        </style>
      </section>
    );
  }
}

export default FeaturedJobs;
