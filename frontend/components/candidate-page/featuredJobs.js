import React, { Component } from 'react';
import Link from 'next/link'

class FeaturedJobs extends Component {
  render() {
    return (
      <section>
        <h3>FEATURED JOBS</h3>
        <div className='job-one'>
          <img src='/static/images/dummyImage.png' />
          <h4>job title</h4>
          <p>description about job</p>
          <Link to='/contact-form'><a>CONTACT US NOW ></a></Link>
        </div>
        <div className='job-two'>
          <img src='/static/images/dummyImage.png' />
          <h4>job title</h4>
          <p>description about job</p>
          <Link to='/contact-form'><a>CONTACT US NOW ></a></Link>
        </div>
        <div className='job-three'>
          <img src='/static/images/dummyImage.png' />
          <h4>job title</h4>
          <p>description about job</p>
          <Link to='/contact-form'><a>CONTACT US NOW ></a></Link>
        </div>
      </section>
    );
  }
}

export default FeaturedJobs;
