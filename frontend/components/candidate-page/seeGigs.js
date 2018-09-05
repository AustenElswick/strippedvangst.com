import React, { Component } from 'react';
import Link from 'next/link';

class SeeGigs extends Component {
  render() {
    return (
      <section id="seegigs-section" className="section section-top section-full">
        <div id="seegigs-content" className='container'>
          <div id="text-content" className="col-9">
            <h2 className="text-white">TEMPORARY WORK</h2>
            <h2 className="text-white">WITH <span id="black-box">VANGST GIGS.</span></h2>
            <div id='link-alignment'>
              <Link to='/gigs'><a>SEE GIGS NOW ></a></Link>
            </div>
          </div> 
        </div>
        <div id="phone-img-container">
          <img src='/static/images/candidate-page/Iphone_Hand.png' />
        </div>

        <style jsx>{`
          #seegigs-section {
            min-height: 40vh;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            overflow: visible;
            position: relative;
          }

          
          img {
            position: absolute;
            width: auto;
            height: 35vh;
            right: 5vw;
            bottom: 0px;
            z-index: 1;
          }
          
          #seegigs-content {
            min-height: 30vh;
            min-width: 100vw;
            background-color: #f0561f;
            display: flex;
            flex-direction: row; 
            align-content: center;
            align-items: center;
            overflow: visible;
            position: relative;
            padding-left: 5vw;
          }
          
          #black-box {
            background-color: black;
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          #link-alignment {
            display: flex;
            flex-direction: row;
            justify-content: center;
            padding-top: 1rem;
          }

          @media (max-width: 375px) {
            h2 {
              font-size: 1rem;
            }
            a {
              font-size: 0.5rem;
            }
            #link-alignment {
              padding-top: 5px;
              padding-right: 40px;
            }
            #black-box {
              padding-right: 0.25rem;
              padding-left: 0.25rem;
            }
          }

          @media (max-width: 884px) {
            h2 {font-size: 3rem;}
          }

          @media (max-width: 724px) {
            h2 {font-size: 2.5rem;}
          }

          @media (max-width: 724px) {
            h2 {font-size: 1.8rem;}
          }

          @media (max-width: 535px) {
            h2 {font-size: 1.3rem;}
          }

          @media (max-width: 455px) {
            h2 {font-size: 1rem;}
          }

          `}</style>
      </section>
    );
  }
}

export default SeeGigs;
