import React, { Component } from 'react';
import Link from 'next/link'

class BestRecruiters extends Component {
  render() {
    return (
      <section>
        <img src='/static/images/dummyImage.png' />
        <p>.02</p>
        <p>The best recruiters in the biz</p>
        <h2>Seasoned recruiters with deep knowledge</h2>
        <aside>
          <p>-first name last name</p>
        </aside>
        <div>white line goes here</div>
        <p>We know you’re growing and we’re here to ensure you find and keep the talent you need. Our team of recruiters are an extenuation of your organization, ready to use our cannabis expertise and network to exceed your expectations and provide you with immediate solutions. 
           Our team gains insight into your organization, so we can identify the talent required to achieve your business objectives. We pride ourselves in working with our clients every step of the way, to ensure effective and long-term hires.
        </p>
        <div>white line goes here</div>
        <h4>something about how are recruiters are the best and most qualified” Whether you are looking for temporary or permanent employees our recruiters.. blah blah idk idk</h4>
        <Link to='/team'><a>Meet our team of experts ></a></Link>
      </section>
    );
  }
}

export default BestRecruiters;
