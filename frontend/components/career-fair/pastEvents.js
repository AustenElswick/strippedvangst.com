import React, { Component } from 'react';

class PastEvents extends Component {
  render() {
    return (
      <section>
        <img src='/static/images/dummyImage.png' />
        <aside>
          <h5>Past Events</h5>
          <div className='first-testimony'>
            <div>gray line goes here</div>
            <p>testimony 1</p>
            <p>name, company</p>
          </div>
          <div className='second-testimony'>
            <div>gray line goes here</div>
            <p>testimony 2</p>
            <p>name, company</p>
          </div>
          <div className='third-testimony'>
            <div>gray line goes here</div>
            <p>testimony 3</p>
            <p>name, company</p>
          </div>
        </aside>
      </section>
    );
  }
}

export default PastEvents;
