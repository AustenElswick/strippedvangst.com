import React, { Component } from 'react';
import Link from 'next/link'

class FeaturedJobs extends Component {
  render() {
    return (
      <section id="featuredjobs-section" className="section section-top section-full">
        <div id="featured-jobs-content" className="container">
          <div className="title-container">
            <h3 className="orange-text">FEATURED JOBS</h3>
          </div>
          <div className='job-posting'>
            <h4 className="orange-text">Senior Project Manager</h4>
            <p className="text-dark">lorem ipsum dolor sit amet, consectuetur adispicsci elit.  Aliquam in diam sed arcu suspcipit consectetur. Pellentescquee elementeum enim vitae.</p>
            <Link to='/contact-form'><a>VIEW ></a></Link>
          </div>
          <div className='job-posting'>
            <h4 className="orange-text">Product Tester</h4>
            <p className="text-dark">lorem ipsum dolor sit amet, consectuetur adispicsci elit.  Aliquam in diam sed arcu suspcipit consectetur. Pellentescquee elementeum enim vitae.</p>
            <Link to='/contact-form'><a>VIEW ></a></Link>
          </div>
          <div className='job-posting'>
            <h4 className="orange-text">Sales Director</h4>
            <p className="text-dark">lorem ipsum dolor sit amet, consectuetur adispicsci elit.  Aliquam in diam sed arcu suspcipit consectetur. Pellentescquee elementeum enim vitae.</p>
            <Link to='/contact-form'><a>VIEW ></a></Link>
          </div>
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
            
            .orange-text{ color: #f0561f }

            p {margin-bottom: 5px;}

            a {font-size: 0.75rem;}

            @media (max-width: 575px){
              h4 {
                font-size: 1.25rem;
              }
              p {font-size: 0.9rem; line-height: 100%}
          `}
        </style>
      </section>
    );
  }
}

export default FeaturedJobs;
