import React, { Component } from 'react';

class Hero extends Component {
  render() {
    return (
      <section id="career-fair-hero-section">
        <div>
          <h1 className="text-center text-white">Hosting the worlds largest cannabis career fair since 2015</h1>
        </div>
        <style jsx>
          {`
            #career-fair-hero-section {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              width: 100vw;
              height: 50vh;
              background-color: orange;
              background-image: url("/static/images/employer-page/sec_01/orange-background.jpg");
            }
          `}
        </style>
      </section>
    );
  }
}

export default Hero;