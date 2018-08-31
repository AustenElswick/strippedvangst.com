import React, { Component } from 'react';
import Link from 'next/link'

class CreateAccount extends Component {
  render() {
    return (
      <section className='gray-background'>
        <img src='/static/images/dummyImage.png' className='circle-picture' />
        <h4>PROFILE BENEFITS</h4>
        <p>profile benefits go here</p>
        <div className='create-profile-link-button'>
          <Link to='/create-profile'><a>CREATE A PROFILE</a></Link>
        </div>
      </section>
    );
  }
}

export default CreateAccount;
