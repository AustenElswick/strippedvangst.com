import React, { Component } from 'react';
import Link from 'next/link'

class CreateAccount extends Component {
  render() {
    return (
      <section id="create-account-section">
      <div id="mobile-title" className="text-center">
        <h4>PROFILE BENEFITS</h4>
      </div>
        <div id="create-account-content">
        
          <div id="img-container">
            <img src='/static/images/candidate-page/profile-pic.png' className='circle-picture' />
          </div>
          <div id="text-container">
            <h4 id="title-2">PROFILE BENEFITS</h4>
            <p className="text-dark">Create a profile with Vangst and get matched to jobs that align with your skills and career goals.</p>
            <Link href='/create-profile'>
              <a>
                <div className='create-profile-link-button text-center'>
                  CREATE A PROFILE
                </div>
              </a>
            </Link>
          </div>
        </div>
        <style jsx>{`
          #create-account-section {
            min-height: 40vh;
            min-width: 100vw;
            padding: 2rem;
            background-color: #dadada;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          #mobile-title {
            display: none;
          }

          #create-account-content {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-c: center;
          }

          #text-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 50vw;
          }

          h4 {
            padding-bottom: 3vh;
          }

          #img-container {
            width: 40vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
          }
          img {
            width: 300px;
            height: 300px;
            padding: 2rem;
          }

          p {
            padding-bottom: 3vh;
          }

          .create-profile-link-button {
            background-color: #f0561f;
            width: 170px;
            padding: 0.75rem;
            border-radius: 25px;
            color: white;
            font-size: 0.75rem;
          }

          @media (max-width: 631px) {
            img {width: 250px; height: 250px;}
            p {font-size: 0.9rem; padding-bottom: 0.8rem}
            h4 {padding-bottom: 0.8rem;}
            #create-account-section {min-height: 35vh;}
          }

          @media (max-width: 500px) {
            img {
            width: 110px; 
            height: 110px; 
            padding: 0px;
            }
            #img-container {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              align-content: center;
              width: 33%;
            }
            #mobile-title {display: inline}
            #title-2 {display: none;}
          }

          @media (max-width: 430px) {
            img {width: 80px; height: 80px;}
          }

          @media (max-width: 375px) {
            img { width: 90px; height: 90px; margin-right: 10px; margin-bottom: 55px;}
            #create-account-section {padding: 1rem;}
            #img-container {width: 30%}
            #text-container {width: 70%; padding: 10px 0px 10px 0px;}
            h4 {padding-bottom: 0px;}
          }


          `}</style>
      </section>
    );
  }
}

export default CreateAccount;
