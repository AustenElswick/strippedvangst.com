import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <main className="hero-section" id="employee-hero-section">
        <div id="hero-content" className="container">
          <h1>Hiring made simple</h1>
          <div id='white-div-employee' className="text-center">
           <p>See how easy it is. Get started now.</p>
          </div>
        </div>
        <style>{`
          #employee-hero-section {
            background-image: url("/static/images/employer-page/hero/man-hero.jpg");
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            align-content: center;
            min-height: 100vh;
            min-width: 100vw;
          }
          #hero-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          h1 {color: white !important; margin-top: 4rem;}
          p {color: #f0561f !important; font-size: 1.5rem; margin-bottom: 0px; font-weight: 400; }
        
          #white-div-employee {
            background-color: white;
            padding-left: 35px;
            padding-right: 35px;
            padding-top: 0.3rem;
            padding-bottom: 0.3rem;
            margin-top: 1.5rem;
          }
        `}</style>
      </main>
    );
  }
}

export default Hero;
