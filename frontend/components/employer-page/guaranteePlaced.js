import React, { Component } from 'react';
import Link from 'next/link'

class GuaranteePlaced extends Component {
  render() {
    return (
      <section id="placement-section" className="hero-section">
        <div id="placement-section-content">
          <div id="db-section-label" className="section-label">
            <p className="section-number text-white">.03</p>
            <p className="section-text text-white">We back every one of our candidates</p>
          </div>
        <h2 id="placement-title">100% guarantee of<br/> placed candidates</h2>
        <div className="white-line"></div>
          <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse efficitur et nibh et dapibus. Nunc nec sapien vitae felis tempor dictum eu vel justo. Vestibulum dolor massa, tincidunt a auctor id, sagittis quis lacus. Fusce tincidunt condimentum volutpat. Nunc rhoncus bibendum malesuada. Donec condimentum pellentesque aliquet. Vivamus orci mi, venenatis.
        </p>
        <div className="white-line"></div>
        </div>
        <style>
          {`

            #placement-section {
              background-image: url('/static/images/employer-page/sec_03/background-image.jpg');
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
              align-items: center;
              min-height: 100vh;
              min-width: 100vw;
            }

            #placement-section-content {
              padding: 4rem;
              max-width: 64%;
}
          
          #placement-title {
            font-size: 6rem;
            line-height: 100px;
          }


          `}
        </style>
      </section>
    );
  }
}

export default GuaranteePlaced;
