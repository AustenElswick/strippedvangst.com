import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <section>
        <img src='/static/images/dummyImage.png' />
        <div>
          <img src='/static/image/dummyImage.png' />
        </div>
        <div className='all-columns'>
          <div className='first-column'>
            <div>horizontal white line goes here</div>
            <h2>419</h2>
            <p>FILLED POSISTIONS</p>
          </div>
          <div>verticle white line goes here</div>
          <div className='second-column'>
            <div>horizontal white line goes here</div>
              <h2>381</h2>
              <p>OPEN POSISTIONS</p>
            </div>
          <div>verticle white line goes here</div>
          <div className='third-column'>
            <div>horizontal white line goes here</div>
            <h2>263</h2>
            <p>ACTIVE PROFILES</p>
          </div>
          <div>verticle white line goes here</div>
          <div className='fourth-column'>
            <div>horizontal white line goes here</div>
            <h2>345</h2>
            <p>COMPANY PROFILES</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
