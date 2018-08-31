import React, { Component } from 'react';
import Link from 'next/link';

class FeaturedJobs extends Component {
  render() {
    return (
      <section>
        <div className='first-job'>
          <img src='/static/images/logos/logo-graphic.png' />
          <h4>Role</h4>
          <h5>Location</h5>
          <p>description</p>
          <Link to='/featured-job-1-info'><a>More Info ></a></Link>
        </div>
        <div className='second-job'>
          <img src='/static/images/logos/logo-graphic.png' />
          <h4>Role</h4>
          <h5>Location</h5>
          <p>description</p>
          <Link to='/featured-job-2-info'><a>More Info ></a></Link>
        </div>
        <div className='third-job'>
          <img src='/static/images/logos/logo-graphic.png' />
          <h4>Role</h4>
          <h5>Location</h5>
          <p>description</p>
          <Link to='/featured-job-apply'><a>Apply Now ></a></Link>
        </div>
        <div className='fourth-job'>
          <img src='/static/images/logos/logo-graphic.png' />
          <h4>Role</h4>
          <h5>Location</h5>
          <p>description</p>
          <Link to='/featured-job-apply'><a>Apply Now ></a></Link>
        </div>
        <div className='fifth-job'>
          <img src='/static/images/logos/logo-graphic.png' />
          <h4>Role</h4>
          <h5>Location</h5>
          <p>description</p>
          <Link to='/featured-job-apply'><a>Apply Now ></a></Link>
        </div>
      </section>
    );
  }
}

export default FeaturedJobs;
