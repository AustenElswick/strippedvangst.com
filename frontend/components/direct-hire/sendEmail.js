import React, { Component } from 'react';

class SendEmail extends Component {

  constructor() {
    super()
    this.state = {
      subject: '',
      content: '',
      sendTo: ''
    }
  }

  subjectChange = (e) => {
    this.setState({ subject: e.target.value })
  }

  contentChange = (e) => {
    this.setState({ content: e.target.value })
  }

  sendChange = (e) => {
    this.setState({ sendTo: e.target.value })
  }

  sendEmail = () => {
    fetch('http://54.185.129.161:8080/send_email_test.php', {
      method: 'POST',
      body: {
        subject: this.state.subject,
        content: this.state.content,
        name: this.state.sendTo
      }
    })
  }

  render() {
    return (
      <section>
        <label htmlFor='subject'>Subject</label>
        <input type='text' name='subject' onChange={this.subjectChange} />
        <label htmlFor='content'>Content</label>
        <input type='text' name='content' onChange={this.contentChange} />
        <label htmlFor='sendTo'>Send To</label>
        <input type='text' name='sendTo' onChange={this.sendChange} />
        <input type='button' value='Send Email' onClick={this.sendEmail} />
      </section>
    );
  }
}

export default SendEmail;
