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
            <Link to='/contact-form'><a>CONTACT US NOW ></a></Link>
          </div>
          <div className='job-posting'>
            <h4 className="orange-text">Product Tester</h4>
            <p className="text-dark">lorem ipsum dolor sit amet, consectuetur adispicsci elit.  Aliquam in diam sed arcu suspcipit consectetur. Pellentescquee elementeum enim vitae.</p>
            <Link to='/contact-form'><a>CONTACT US NOW ></a></Link>
          </div>
          <div className='job-posting'>
            <h4 className="orange-text">Sales Director</h4>
            <p className="text-dark">lorem ipsum dolor sit amet, consectuetur adispicsci elit.  Aliquam in diam sed arcu suspcipit consectetur. Pellentescquee elementeum enim vitae.</p>
            <Link to='/contact-form'><a>CONTACT US NOW ></a></Link>
          </div>
        </div>
      </section>
    );
  }
}

export default FeaturedJobs;
