import React, { Component } from 'react';
import Link from 'next/link'

class UpcomingFair extends Component {
  render() {
    return (
      <section>
        <h5>Upcoming Fair</h5>
        <div>gray line goes here</div>
        <h2>July 18, 2018</h2>
        <h5>3:00pm-7:00pm</h5>
        <div>gray line goes here</div>
        <p>EXDO Event Center</p>
        <p>1399 35th St.</p>
        <p>Denver, Colorado</p>
        <p>80205</p>
        <div>gray line goes here</div>
        <Link to='purchase-tickets'><a>Purchase Tickets ></a></Link>
        <aside>
          <p>Presented by:</p>
          <img src='static/images/dummyImage.png' />
        </aside>
      </section>
    );
  }
}

export default UpcomingFair;
