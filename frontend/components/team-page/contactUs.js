import React, { Component } from 'react';

class ContactUs extends Component {
  render() {
    return (
      <section>
        <div>
          <h4>headline for consultation</h4>
          <p>a few words about consultation im assuming</p>
          <div>
            <input type='text' placeholder='Name' />
            <input type='text' placeholder='Email' />
            <input type='button' value='Contact Us' onClick='#' />
          </div>

        </div>
        
      </section>
    );
  }
}

export default ContactUs;
