import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ApplyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      subject: "Direct Hire Application",
      sendFrom: "",
      content: "i am applying to this job",
      attachment: "",
      firstName: "",
      lastName: "",
      jobTitle: "test",
      jobUrl: "test",
      recruiter_email: "",
      success_message: "",
      crelateURL: "https://app.crelate.com/go#stage/_Jobs/DefaultView/",
      maxFileSize: 10485760 //10MB
    };
    console.log("*************", this.props);
    this.toggle = this.toggle.bind(this);
  }

  sendChange = e => {
    this.setState({ sendFrom: e.target.value });
  };

  firstNameChange = e => {
    this.setState({ firstName: e.target.value });
  };

  lastNameChange = e => {
    this.setState({ lastName: e.target.value });
  };

  attachmentChange = e => {
    const file = e.target.files[0];
    if (file && file.size < this.state.maxFileSize) {
      this.setState({ attachment: file, success_message: "" });
    } else if (file && file.size > this.state.maxFileSize) {
      this.setState({ success_message: "File may not be larger than 10 MB" });
    }
  };

  sendEmail = () => {
    if (
      this.state.firstName &&
      this.state.lastName &&
      this.state.sendFrom.match(
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
      ) &&
      this.state.attachment
    ) {
      this.setState({ success_message: "Sending..." });
      const formData = new FormData();
      formData.append("file", this.state.attachment);
      formData.append("email", this.state.sendFrom);
      formData.append("firstName", this.state.firstName);
      formData.append("lastName", this.state.lastName);
      formData.append("subject", this.state.subject);
      formData.append("jobTitle", this.props.job.job_title);
      formData.append("jobUrl", this.props.job.job_url);
      formData.append(
        "crelateUrl",
        `${this.state.crelateURL}${this.props.job.external_job_id}`
      );
      formData.append("recruiter_email", this.props.job.recruiter_email);
      formData.append("city", this.props.job.city);
      formData.append("state", this.props.job.state);
      fetch("/sendgrid", {
        method: "POST",
        body: formData
      })
        .then(res => {
          if (res) {
            this.setState({
              success_message: "Application has been submitted"
            });
            setTimeout(this.toggle, 3000);
          }
        })
        .catch(err => console.log(err));
      this.setState({ success_message: "Application is being submitted" });
      this.getCrelateUserId();
    } else {
      this.setState({ success_message: "Please fill out all fields." });
    }
  };

  getCrelateUserId = () => {
    fetch("create-crelate", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        EmailAddress_Personal: this.state.sendFrom,
        FirstName: this.state.firstName,
        LastName: this.state.lastName,
        external_job_id: this.props.job.external_job_id
      })
    })
      .then(res => res.json())
      .then(res => console.log(res));
  };

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button id="modal-apply-button" onClick={this.toggle}>
          Apply
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader id="modal-header" toggle={this.toggle}>
            <div>
              <img
                id="logo-img"
                src="/static/images/logos/logo-graphic.png"
                alt="vangst logo"
              />
              <img
                id="logo-text"
                src="/static/images/logos/logo-text.png"
                alt="vangst logo text"
              />
            </div>
          </ModalHeader>
          <ModalBody>
            <div id="modal-body">
              <h4 id="modal-title" className="text-center">
                Personal Info
              </h4>
              <div className="small-h-line" />
              <input
                className="modal-text-input"
                type="text"
                name="first name"
                placeholder="First Name"
                onChange={this.firstNameChange}
                required
              />
              <input
                className="modal-text-input"
                type="text"
                name="last name"
                placeholder="Last Name"
                onChange={this.lastNameChange}
                required
              />
              <input
                className="modal-text-input"
                type="email"
                name="email"
                placeholder="Email"
                onChange={this.sendChange}
                required
              />
              <h4 id="modal-title">Upload Resume</h4>
              <div className="small-h-line" />
              <input
                className="modal-text-input"
                id="file-upload"
                type="file"
                name="resume"
                onChange={this.attachmentChange}
                required
              />
              <div>{this.state.success_message}</div>
              <Button
                id="submit-button-modal"
                disabled={!this.state.attachment}
                onClick={this.sendEmail}
              >
                Submit
              </Button>
            </div>
          </ModalBody>
        </Modal>
        <style>{`
       
          #modal-header {background-color: #ffffff;}

          #modal-body {background-color: #f0561f; height: 500px; padding: 0; margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0;
        }

 
        #logo-img {height: 30px; padding-right: 15px;}
        #logo-text {height: 25px;}
        
            #modal-apply-button {background-color: #f0561f; border: 0; font-family: Brandon Grotesque Regular; margin-top: 5px; padding: 0 15px 0 15px;}
            .modal-text-input {padding: 5px; margin: 5px; width: 250px;}

            .small-h-line {height: 2px; width: 70px; background-color: white; margin: 0 0 10px 0;}

            #modal-title {font-size: 1.5rem; color: white; padding: 1rem 0 0.25rem 0;}
            
            .submit-button-style {background-color: #262626; color: white; margin-top: 20px; width: 150px; padding: 15px 5px 15px 5px;}

            #file-upload {background-color: white; width: 250px; border: 0;}

            #submit-button-modal {color: white; background-color: #262626; border: 0; margin-top: 2rem; padding: 0 15px 0 15px;}
        
        `}</style>
      </div>
    );
  }
}

export default ApplyModal;
