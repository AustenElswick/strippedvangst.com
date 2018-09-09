import React, { Component } from 'react';
import Link from 'next/link';
import MailChimpForm from '../MailChimpForm';

class FutureCareerFairs extends Component {
  render() {
    return (
      <section id="future-career-fairs">
        <div id="future-career-fair-container">
          <div className='mailing-and-booth'>
            <div className='mailing'>
              <img src='' />
              <p className="text-center fair-title">Join our mailing list to stay informed on future career fairs.</p>
              <MailChimpForm />
            </div>
            <div className='booth'>
              <img src='' />
              <p className="text-center fair-title">Contact us about having your own booth at the next career fair</p>
              <Link href="/contact-vangst-talent">
              <div id="contact-us-button" className="text-center">Click Here ></div>
              </Link>
            </div>
          </div>
        </div>
        <style jsx>{`
        #future-career-fairs {
          min-height: 50vh;
          min-width: 100vw;
          padding: 4rem;
          background-image: url('/static/images/employer-page/sec_01/orange-background.jpg');
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
          align-items: center;
        }
        #future-career-fair-container {display: flex; flex-direction: column; justify-content: center; align-content: center; align-items: center;}
        .fair-title {color: white; font-family: Brandon Grotesque Regular; font-size: 1.5rem; margin-bottom: 0;}

        .booth {margin-top: 4rem; display: flex; flex-direction: column; align-content: center; justify-content: center; align-items: center;}
        #contact-us-button {
          border: solid 2px white;
          padding: 10px 3px 10px 3px;
          width: 175px;
          margin-top: 1rem; 
          font-family: Sabon Italic; 
          font-size: 1.2rem;
          color: white;
        }
        `}</style>
      </section>
    );
  }
}

export default FutureCareerFairs;
