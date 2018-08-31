import React, { Component } from 'react';

class ContactModal extends Component {
  render() {
    const linkedinStyle = {
      'height': '50px',
      'width': '180px',
      'backgroundColor': 'orange',
      'display': 'flex',
      'justifyContent': 'center',
      'alignItems': 'center'
    }
    return (
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <img className="vangst-logo-graphic d-lg-none" src="/static/images/logos/logo-graphic.png" alt="vangst logo" />
              <img className="vangst-logo-text d-lg-none" src="/static/images/logos/logo-text.png" alt="vangst logo text" />
            </div>
            <div className="modal-body">
              <div className='align-both-sections'>
                <h4>Personal Info</h4>
                <div>white line goes here</div>
                <label htmlFor='first name'>First Name</label>
                <input type='text' name='first name' />
                <label htmlFor='last name'>Last Name</label>
                <input type='text' name='last name' />
                <label htmlFor='email'>Email</label>
                <input type='text' name='email' />
                <h4>Upload Resume</h4>
                <div>white line goes here</div>
                <label htmlFor='resume'>Choose File</label>
                <input type='button' value='Resume.pdf' name='resume' />
                <div className='and-style'>
                  <div>white line goes here</div>
                  <p>And</p>
                  <div>white line goes here</div>
                </div>
                <label htmlFor='linkedin'>Connect LinkedIn</label>
                <div className='linkedin-contact-button' style={linkedinStyle} name='linkedin'><img src='/static/images/social/linked-in-white.png' /></div>
                <input type='button' value='Submit' className='submit-button-style' onClick='#' />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactModal;
