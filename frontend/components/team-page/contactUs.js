import React, { Component } from 'react';
import MailChimpForm from '../MailChimpForm';

class ContactUs extends Component {
  render() {
    return (
      <section id="contact-us-section">
        <div>
          <div id="contact-us-text">
            <h3 id="contact-us-title" className="text-center">Join our mailing list.</h3>
            <p className="text-dark">Stay in the know. Be the first to receive career opportunities, industry news, Vangst updates, and more.</p>
          </div>
          <div id="contact-us-form-container">
            <MailChimpForm />
          </div>
        </div>
        <style>
          {`
            #contact-us-section {
              width: 100vw;
              height: 50vh;
              padding: 4rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
            }

            #contact-us-text {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }


            #contact-us-title {
              font-family: Brandon Grotesque Bold Italic;
              letter-spacing: 1px;
              font-size: 2rem;
            }

            .mailchimp-form select {
              border: 1px solid lightgray;
            }

            .mailchimp-form button {
              background-color: #f0561f;
            }

            @media (max-width: 385px) {
              #contact-us-section {
                height: 100vh;
                padding: 2rem;
              }

              #contact-us-title {
                font-size: 2.3rem;
                padding-bottom: 1rem;
              }

              #contact-us-form {
                background-color: black;
              }
              .newsletter-input {
                border: solid 1px #dadada;
              }
              #contact-us-form-container {
                padding-right: 2rem;
                padding-left: 2rem;
              }
            }
          
          `}
        </style>
      </section>
    );
  }
}

export default ContactUs;
