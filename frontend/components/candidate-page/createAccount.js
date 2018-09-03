import React, { Component } from 'react';
import Link from 'next/link'

class CreateAccount extends Component {
  render() {
    return (
      <section id="create-account-section">
        <div id="create-account-content">
          <div id="img-container">
            <img src='/static/images/candidate-page/profile-pic.png' className='circle-picture' />
          </div>
          <div id="text-container">
            <h4>PROFILE BENEFITS</h4>
            <p className="text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam turpis nibh, vulputate at lacinia sit amet, facilisis ut nisi. Etiam massa nisi, luctus in consectetur rhoncus, pulvinar ut massa. </p>
            <div className='create-profile-link-button text-center'>
              <Link to='/create-profile'><a>CREATE A PROFILE</a></Link>
            </div>
          </div>
        </div>
        <style jsx>{`
          #create-account-section {
            min-height: 50vh;
            min-width: 100vw;
            padding: 2rem;
            background-color: #dadada;
            display: flex;
            flex-direction: column;
            justify-content: center;
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
            width: 50vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
          }
          img {
            width: 75%;
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
          `}</style>
      </section>
    );
  }
}

export default CreateAccount;
