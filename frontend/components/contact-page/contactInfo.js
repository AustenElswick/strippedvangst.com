import React, { Component } from 'react';


class ContactInfo extends Component {
  render() {
    return (
      <section>
        <p>You can contact us with anything related to our company.</p>
        <p>We'll get in touch with you as soon as possible.</p>
        <input type='text' placeholder='First and last name' />
        <input type='text' placeholder='Email' />
        <select style={{ fontSize: "1em", padding: 5 }}>
          <option value="" disabled selected hidden>- Select a subject -<span><img src="/static/images/vangst-main-page/down-arrow-gray.png"></img></span></option>
          <option value="#">#</option>
          <option value="#">#</option>
          <option value="#">#</option>
        </select>
        <select style={{ fontSize: "1em", padding: 5 }}>
          <option value="" disabled selected hidden>- Select state -<span><img src="/static/images/vangst-main-page/down-arrow-gray.png"></img></span></option>
          <option value="#">#</option>
          <option value="#">#</option>
          <option value="#">#</option>
        </select>
        <textarea rows='7' cols='42'>Message</textarea>
        <input type='button' value='SUBMIT' />
        <aside>
          <p>info@vangst.com</p>
          <p>(844)-482-6478</p>
        </aside>
      </section>
    );
  }
}

export default ContactInfo;
