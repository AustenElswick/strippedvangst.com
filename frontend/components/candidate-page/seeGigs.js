import React, { Component } from 'react';
import Link from 'next/link';

class SeeGigs extends Component {
  render() {
    return (
      <section>
        <div className='text-alignment'>
          <img src='/static/images/dummyImage.png' />
          <h2>EARN CASH TODAY</h2>
          <h2>WITH VANGST GIGS.</h2>
          <div className='link-alignment'>
            <Link to='/gigs'><a>SEE GIGS NOW ></a></Link>
          </div>
        </div>
      </section>
    );
  }
}

export default SeeGigs;
