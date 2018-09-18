import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <section id="career-fair-hero-section">
        <div>
          <h1 id="career-fair-title" className="text-center text-white">
            Hosting the world's largest cannabis career fair since 2015
          </h1>
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
              padding: 4rem;
              background-image: url("/static/images/employer-page/sec_01/orange-background.jpg");
              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;
            }
            #career-fair-title {
              font-size: 6rem;
            }

            @media (max-width: 420px) {
              #career-fair-title {
                font-size: 3rem;
              }
            }
            @media (max-width: 361px) {
              #career-fair-title {
                font-size: 2.25rem;
              }
            }
          `}
        </style>
      </section>
    );
  }
}

export default Hero;
