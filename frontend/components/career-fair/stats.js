import React, { Component } from 'react';

class Stats extends Component {
  render() {
    return (
      <section>
        <div className='first-column'>
          <div>small horizontal black line goes here</div>
          <h2>2K+</h2>
          <p>JOB SEEKERS</p>
        </div>
        <div>verticle gray line goes here</div>
        <div className='second column'>
          <div>small horizontal black line goes here</div>
          <h2>45+</h2>
          <p>RECRUITING COMPANIES</p>
        </div>
        <div>verticle gray line goes here</div>
        <div className='third column'>
          <div>small horizontal black line goes here</div>
          <h2>600+</h2>
          <p>INTERVIEWS</p>
        </div>
        <div>verticle gray line goes here</div>
        <div className='fourth column'>
          <div>small horizontal gray line goes here</div>
          <h2>400+</h2>
          <p>POSISTIONS FILLED</p>
        </div>
      </section>
    );
  }
}

export default Stats;
