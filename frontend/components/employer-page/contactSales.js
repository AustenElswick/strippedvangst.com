import React, { Component } from 'react';
import { Input, Form } from 'reactstrap';

class ContactSales extends Component {

  constructor() {
    super()
    this.state = {
      emailFrom: '',
      firstName: '',
      lastName: '',
      content: '',
      subject: '',
      successMessage: ''
    }
  }

  emailChange = (e) => {
    this.setState({ emailFrom: e.target.value })
  }

  firstNameChange = (e) => {
    this.setState({ firstName: e.target.value })
  }

  lastNameChange = (e) => {
    this.setState({ lastName: e.target.value })
  }

  contentChange = (e) => {
    this.setState({ content: e.target.value })
  }

  subjectChange = (e) => {
    this.setState({ subject: e.target.value })
  }

  sendEmail = () => {
    this.setState({ successMessage: "Sending..." })
    const formData = new FormData()
    formData.append('email', this.state.emailFrom)
    formData.append('firstName', this.state.firstName)
    formData.append('lastName', this.state.lastName)
    formData.append('subject', this.state.subject)
    formData.append('content', this.state.content)


    fetch('/sendgridsalescontact', {
      method: 'POST',
      body: formData
    }).catch(err => console.log(err))
    this.setState({ successMessage: "You have reached out" })
  }

  render() {
    return (
      <section>
        <Form>
          <Input type='text' placeholder='First Name' onChange={this.firstNameChange} />
          <Input type='text' placeholder='Last Name' onChange={this.lastNameChange} />
          <Input type='email' placeholder='Email' onChange={this.emailChange} />
          <Input type='text' placeholder='Subject' onChange={this.subjectChange} />
          <Input id="contact-textarea" type='textarea' onChange={this.contentChange} rows='7' cols='42' placeholder="Message" />
          <div className="d-flex justify-content-center">
            <input id="contact-info-submit-button" disabled={Boolean(this.state.successMessage)} type='button' value='SUBMIT' onClick={this.sendEmail} />
          </div>
          {this.state.successMessage ? <div className="text-success">{this.state.successMessage}</div> : null}
        </Form>
      </section>
    );
  }
}

export default ContactSales;
