import React, { Component } from 'react';

class ContactInfo extends Component {
  render() {
    return (
      <section>
        <p>You can contact us with anything related to our company.</p>
        <p>We'll get in touch with you as soon as possible.</p>
        <input type='text' placeholder='First and last name' />
        <input type='text' placeholder='Email' />
        
      </section>
    );
  }
}

export default ContactInfo;
