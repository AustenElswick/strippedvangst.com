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
  }
  toggle() {
    this.props.onClick()
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>
            <div>
              <img className="vangst-logo-graphic d-lg-none" src="/static/images/logos/logo-graphic.png" alt="vangst logo" />
              <img className="vangst-logo-text d-lg-none" src="/static/images/logos/logo-text.png" alt="vangst logo text" />
            </div>
          </ModalHeader>
          <ModalBody>
            <div>
              <h4>Personal Info</h4>
              <div>white line goes here</div>
              <label htmlFor='first name'>First Name</label>
              <input type='text' name='first name' onChange={this.firstNameChange} />
              <label htmlFor='last name'>Last Name</label>
              <input type='text' name='last name' onChange={this.lastNameChange} />
              <label htmlFor='email'>Email</label>
              <input type='text' name='email' onChange={this.sendChange} />
              <h4>Upload Resume</h4>
              <div>white line goes here</div>
              <label htmlFor='resume'>Choose File</label>
              <input type='file' name='resume' onChange={this.attachmentChange} />
              <div className='and-style'>
                <div>white line goes here</div>
                <p>And</p>
                <div>white line goes here</div>
              </div>
              <label htmlFor='linkedin'>Connect LinkedIn</label>
              <div className='linkedin-contact-button' name='linkedin'><img src='/static/images/social/linked-in-white.png' /></div>
              <input type='button' value='Submit' className='submit-button-style' onClick={this.sendEmail} />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ApplyModal;