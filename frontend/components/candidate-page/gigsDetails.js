import React, { Component } from 'react';

class GigsDetails extends Component {
  render() {
    return (
      <section>
        <h3>YOUR SEARCH ENDS HERE</h3>
        <div className='all-columns'>
          <div className='column-one'>
            <img src='/static/images/dummyImage.png' />
            <p>Industry leading companies</p>
          </div>
          <div className='column-two'>
            <img src='/static/images/dummyImage.png' />
            <p>Support from network of industry insiders</p>
          </div>
          <div className='column-three'>
            <img src='/static/images/dummyImage.png' />
            <p>Real Jobs</p>
          </div>
        </div>
      </section>
    );
  }
}

export default GigsDetails;
