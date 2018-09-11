import React, { Component } from 'react';
import { Input, Form } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ContactSales extends Component {

  constructor() {
    super()
    this.state = {
      modal: false,
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
    setTimeout(this.toggle, 3000);
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <section id="contact-sales-form-section">
      <div id="section-title-container">
        <h3 id="contact-sales-form-title" className="text-center">QUESTIONS ?</h3>
        <div id="small-gray-line-h"></div>
      </div>
        <div className="d-flex justify-content-center">
          <input id="contact-sales-submit-button" disabled={Boolean(this.state.successMessage)} type='button' value='Contact Us' onClick={this.toggle} />
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} >
          <ModalHeader id="modal-header" toggle={this.toggle}>
            <div>
              <img id="logo-img" src="/static/images/logos/logo-graphic.png" alt="vangst logo" />
              <img id="logo-text" src="/static/images/logos/logo-text.png" alt="vangst logo text" />
            </div>
          </ModalHeader>
          <ModalBody id="modal-body">
          <Form>
            <div id="contact-inputs">
              <Input className="contact-sales-input" type='text' placeholder='First Name' onChange={this.firstNameChange} />
              <Input className="contact-sales-input" type='text' placeholder='Last Name' onChange={this.lastNameChange} />
              <Input className="contact-sales-input" type='email' placeholder='Email' onChange={this.emailChange} />            
            </div>
            
            <Input className="contact-sales-input" type='text' placeholder='Subject' onChange={this.subjectChange} />
            <Input className="contact-sales-input" id="contact-textarea" type='textarea' onChange={this.contentChange} rows='7' cols='42' placeholder="Message" />
            {this.state.successMessage ? <div className="text-success text-center">{this.state.successMessage}</div> : null}
            <div className="d-flex justify-content-center">
              <input id="contact-sales-submit-button" disabled={Boolean(this.state.successMessage)} type='button' value='Submit' onClick={this.sendEmail} />
            </div>
         </Form>
          </ModalBody>
        </Modal>



        <style jsx>{`
          #contact-sales-form-section {padding: 2rem;}

          #contact-sales-form-title {color: black !important;}

          #contact-inputs {display: flex; flex-direction: row;}

          .contact-sales-input {}

          #contact-sales-submit-button {background-color: #f0561f; padding: 8px 35px 5px 35px; color: white; font-family: Sabon Italic; margin-top: 1rem;}
          
          .form-control {border-radius: 0 !important;}

          #section-title-container {display: flex; flex-direction: column; align-items: center; margin-bottom: 1rem;}

          #small-gray-line-h {
            background-color: #dadada;
            height: 2px;
            width: 150px;
        }

          #logo-img {height: 30px; padding-right: 15px;}
          #logo-text {height: 25px;}


          @media (max-width: 420px) {#contact-inputs {display: flex; flex-direction: column;}}

    
 
        
        

        
        
        
        `}</style>
      </section>
    );
  }
}

export default ContactSales;
