import React, { Component } from 'react';

class SaveMoneyAndTime extends Component {
  render() {
    return (
      <section>
        <img src='/static/images/dummyImage.png' alt='person with plus sign' />
        <p>description 1</p>
        <img src='/static/images/dummyImage.png' alt='bs' />
        <p>description 2</p>
        <img src='/static/images/dummyImage.png' alt='phone' />
        <p>description 3</p>
        <img src='/static/images/dummyImage.png' alt='website' />
        <p>description 4</p>
        <img src='/static/images/dummyImage.png' alt='thumbs up' />
        <p>description 5</p>
        <input type='text' placeholder='Name' />
        <input type='text' placeholder='Email' />
        <input type='button' value='Contact Vangst' />
      </section>
    );
  }
}

export default SaveMoneyAndTime;
