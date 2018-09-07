import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ApplyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      subject: 'i am applying',
      sendFrom: '',
      content: 'i am applying to this job',
      attachment: '',
      firstName: '',
      lastName: '',
      jobTitle: 'test',
      jobUrl: 'test'
    };

    this.toggle = this.toggle.bind(this);
  }

  sendChange = (e) => {
    this.setState({ sendFrom: e.target.value })
  }

  firstNameChange = (e) => {
    this.setState({ firstName: e.target.value })
  }

  lastNameChange = (e) => {
    this.setState({ lastName: e.target.value })
  }

  attachmentChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      this.setState({ attachment: file })
    }
  }

  sendEmail = () => {
    const formData = new FormData()
    formData.append('file', this.state.attachment)
    formData.append('email', this.state.sendFrom)
    formData.append('firstName', this.state.firstName)
    formData.append('lastName', this.state.lastName)
    formData.append('subject', this.state.subject)
    formData.append('jobTitle', this.props.jobTitle)
    formData.append('jobUrl', this.props.jobUrl)
    fetch('http://localhost:3000/sendgrid', {
      method: 'POST',
      body: formData
    })
      .catch(err => console.log(err))
      console.log("hi")
  }
  toggle() {
    this.props.onClick()
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button id="modal-apply-button" color="danger" onClick={this.toggle}>Apply</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>
            <div>
              <img className="vangst-logo-graphic d-lg-none" src="/static/images/logos/logo-graphic.png" alt="vangst logo" />
              <img className="vangst-logo-text d-lg-none" src="/static/images/logos/logo-text.png" alt="vangst logo text" />
            </div>
          </ModalHeader>
          <ModalBody>
            <div id="modal-body">
              <h4 id="modal-title" className="text-center">Personal Info</h4>
              <div className="small-h-line"></div>
              
              <input className="modal-text-input" type='text' name='first name' placeholder="First Name" onChange={this.firstNameChange} />
              <input className="modal-text-input" type='text' name='last name' placeholder="Last Name" onChange={this.lastNameChange} />
              <input className="modal-text-input" type='text' name='email' placeholder="Email" onChange={this.sendChange} />
              <h4 id="modal-title">Upload Resume</h4>
              <div className="small-h-line"></div>
              <input className="modal-text-input" id="file-upload" type='file' name='resume' onChange={this.attachmentChange} />
              <div className='text-center submit-button-style'>
                <input id="submit-button-modal" type='button' value='Submit'  onClick={this.sendEmail} />
              </div>
            </div>
          </ModalBody>
        </Modal>
        <style>{`
          #modal-body {background-image: url("/static/images/employer-page/sec_01/orange-background.jpg"); height: 500px; padding: 0; margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
            #modal-apply-button {margin-top: 1rem;}
            .modal-text-input {padding: 5px; margin: 5px; width: 250px;}

            .small-h-line {height: 2px; width: 70px; background-color: white; margin: 0 0 10px 0;}

            #modal-title {font-size: 1.5rem; color: white; padding: 1rem 0 0.25rem 0;}
            
            .submit-button-style {background-color: #262626; color: white; margin-top: 20px; width: 150px; padding: 5px;}

            #file-upload {background-color: white; width: 90%; border: solid 1px #262626;}

            #submit-button-modal {color: white; background-color: #262626; border: 0;}
        
        `}</style>
      </div>
    );
  }
}

export default ApplyModal;