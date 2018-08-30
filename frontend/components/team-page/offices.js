import React, { Component } from 'react';

class Offices extends Component {
  render() {
    return (
      <section>
        <img src='/static/images/dummyImage.png' />
        <p>.02</p>
        <p>Offices</p>
        <div> 
          <h5>Santa Monica, CA</h5>
          <div>white line goes here</div>
          <p>520 Broadway #3016</p>
          <p>Santa Monica, CA</p>
          <p>90401</p>
        </div>
        <div>
          <h5>Denver, CO</h5>
          <div>white line goes here</div>
          <p>518 17th St</p>
          <p>Denver, CO</p>
          <p>80202</p>
        </div>
        <div>
          <h5>Contact us</h5>
          <div>white line goes here</div>
          <p>info@vangst.com</p>
          <p>phone number</p>
        </div>
      </section>
    );
  }
}

export default Offices;
