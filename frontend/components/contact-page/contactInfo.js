import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class ContactInfo extends Component {
  render() {
    return (
      <section id="contact-info-section">
       <div id="contact-info-section-label" className="section-label">
          <p id="contact-info-label-number" className="section-number text-white">.01</p>
          <p id="contact-info-label-text" className="section-text text-white">Contact Us</p>
        </div>
        <div id="contact-info-container">
          <div className="contact-info-column">
            <div id="contact-info-title-container">
              <p className="orange-text contact-info-title">You can contact us with anything related to our company.</p>
              <p className="orange-text contact-info-title">We'll get in touch with you as soon as possible.</p>
            </div>
            <div id="contact-info-inputs-container">
              <Form>
                <Input type='text' placeholder='First Name' />
                <Input type='text' placeholder='Last Name' />
                <Input type='email' placeholder='Email' />
                <Input type='select' name='subject' style={{ fontSize: "1em", padding: 5 }}>
                  <option value="" disabled selected hidden>Select a Subject</option>
                  <option value="#">Hiring Talent</option>
                  <option value="#">Looking For Work</option>
                  <option value="#">Other</option>
                </Input>
                <Input type='select' style={{ fontSize: "1em", padding: 5 }}>
                  <option value="" disabled selected hidden>Select State</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>			
                </Input>
                <Input id="contact-textarea" type='textarea' rows='7' cols='42' placeholder="Message" />
                <div className="d-flex justify-content-center">
                  <input id="contact-info-submit-button" type='button' value='SUBMIT' />
                </div>
              </Form>
            </div>
          </div> 
          <div className="contact-info-column" id="contact-info-column-2">
              <h4 id="column-2-title">Contact Info</h4>
              <div id="contact-small-line"></div>
              <a id="contact-us-link" className="contact-us-link" href="mailto:info@vangst.com">INFO@VANGST.COM</a>
              <a id="contact-us-link" className="contact-us-link" href="tel:+18444826478">(844)-482-6478</a>
          </div>
        </div>
        <style>
          {`
            #contact-info-section {
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              min-height: 100vh;
              min-width: 100vw;
            }
            #contact-info-section-label {
              background-image: url('/static/images/employer-page/sec_01/orange-background.jpg');
              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;
              width: 100%;
              height: 120px;
              padding: 2rem;
            }
            #contact-info-container {
              display: flex;
              flex-direction: row;
              padding:4rem;
              justify-content: space-around;
              align-items: center;
              align-content: center;
              min-height: 100%;
              min-width: 100%;
            }

            .contact-info-column {
              display: flex;
              flex-direction: column;
            }
            #contact-info-title-container {
              display: flex;
              flex-direction: column;
            }

            #contact-info-inputs-container {
              display: flex;
              flex-direction: column;
            }

            #contact-small-line {
              height: 2px;
              width: 65px;
              background-color: black;
              margin: 10px 0 10px 0;
            }

            #contact-us-link {
              text-decoration: none;
              color: black;
              margin-bottom: 5px;
              margin-top: 5px;
            }

            .contact-info-title {
              font-family: Brandon Grotesque Regular;
              font-size: 1.25rem;
              margin-bottom: 0;
            }

            .orange-text {color: #f0561f;}

            Input {margin-top: 10px;}

            Select {margin-top: 10px;}

            #contact-textarea {margin-top: 10px}

            #contact-info-submit-button {
              background-color: #f0561f; 
              color: white;
              padding: 8px 35px 8px 35px;
              border: 0;
            }
            @media (max-width: 770px) {
              #contact-info-container {
                display: flex;
                flex-direction: column;
                padding: 2rem;
                justify-content: center;
                align-content: space-around;
              }
              #contact-info-column-2 {
                margin-top: 3rem;
              }
              #column-2-title {display: none;}
              #contact-small-line {display:none;}
              #contact-info-column-2 {display: flex; flex-direction: row;}
              .contact-us-link {padding: 1rem; font-size: 0.9rem; opacity: 0.6;}
            }
            @media (max-width: 420px) {
              .contact-info-title {font-size: 1rem; line-height: 15px; margin-bottom: 15px;}
              #contact-info-column-2 {margin-top: 1rem;}
              #contact-info-section-label {height: 60px; padding: 1rem 0 0 2rem;}

            }
          `}
        </style>
      </section>
    );
  }
}

export default ContactInfo;
