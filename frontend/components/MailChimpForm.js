
import React, { Component } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

// a basic form
const CustomForm = ({ status, message, onValidated }) => {
  let email, fname, lname, reason;
  
  const submit = () =>
    email &&
    fname &&
    lname &&
    reason &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      FNAME: fname.value,
      LNAME: lname.value,
      MMERGE5: reason.value
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
          style={{ fontSize: "1em", padding: 5 }}
          ref={node => (fname = node)}
          type="text"
          placeholder="First name"
        />
        <input
          style={{ fontSize: "1em", padding: 5 }}
          ref={node => (lname = node)}
          type="text"
          placeholder="Last name"
        />
        <input
          style={{ fontSize: "1em", padding: 5 }}
          ref={node => (email = node)}
          type="email"
          placeholder="Email"
        />
        <select style={{ fontSize: "1em", padding: 5 }} ref={node => (reason = node)}>
          <option value="" disabled selected hidden>Why are you here?<span><img src="/static/images/vangst-main-page/down-arrow-gray.png"></img></span></option>
          <option value="Hiring Talent">Hiring Talent</option>
          <option value="Looking For Work">Looking for work</option>
          <option value="Other">Other</option>
        </select>
        <button id="footer-signup-button" className="btn btn-outline text-white" onClick={submit}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

class MailChimpForm extends Component {
    render() {
      const url =
        "https://vangsttalent.us11.list-manage.com/subscribe/post?u=8efd9047be67bccfe48fccbf3&amp;id=b86030e328";
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

  export default MailChimpForm;