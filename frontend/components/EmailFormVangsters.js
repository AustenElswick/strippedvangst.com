import React, { Component } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

// a basic form
const CustomForm = ({ status, message, onValidated }) => {
  let email, fname, lname;
  
  const submit = () =>
    email &&
    fname &&
    lname &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      FNAME: fname.value,
      LNAME: lname.value,
    });

  return (
    <div>
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <br/>
      <div className="mailchimp-form">
        <input
            className="email-form-input"
          style={{ fontSize: "1em", padding: 5, margin: 2 }}
          ref={node => (fname = node)}
          type="text"
          placeholder="First name"
        />
        <input
        className="email-form-input"
          style={{ fontSize: "1em", padding: 5, margin: 2 }}
          ref={node => (lname = node)}
          type="text"
          placeholder="Last name"
        />
        <input
        className="email-form-input"
          style={{ fontSize: "1em", padding: 5, margin: 2 }}
          ref={node => (email = node)}
          type="email"
          placeholder="Email"
        />
        <button id="subscribe-button" onClick={submit}>
          Subscribe
        </button>
      </div>
      <style>
          {`


          .email-form-input {
              height: 2.2rem;
              box-shadow: none;
              padding: 1rem;
          }
          #subscribe-button {
              background-color: #f0561f;
              color: white;
              font-family: Sabon Italic;
                letter-spacing: 1.7px;
                line-height: 1.4em;
                font-weight: 700;
                padding: 1rem;
                box-shadow: none;
                border: none;
                margin-top: 0;
          }
          `}
      </style>
    </div>
  );
};

class EmailFormVangsters extends Component {
    render() {
      const url =
        "https://vangsttalent.us11.list-manage.com/subscribe/post?u=8efd9047be67bccfe48fccbf3&amp;id=080f236213";
      return (
        <div>
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <CustomForm
                status={status}
                message={message}
                onValidated={formData => subscribe(formData)}
              />
            )}
          />
        </div>
      );
    }
  }

  export default EmailFormVangsters;