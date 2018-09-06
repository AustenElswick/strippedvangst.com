import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <main id="team-section" className="hero-section">
        <div id="team-section-content">
          <h1 id="team-title" className="text-center">Who We Are</h1>
        </div>
        <style>
          {`
          #team-section {
            background-image: url('/static/images/team-page/hero-image.jpg');
            min-height: 100vh;
            min-width: 100vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            align-items: center;
            padding: 3rem;
          }

          #team-title {
            color: white;
          }
          `}
        </style>
      </main>
    );
  }
}

export default Hero;
