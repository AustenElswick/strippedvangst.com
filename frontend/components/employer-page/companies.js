import React, { Component } from 'react';

class Companies extends Component {
  render() {
    return (
      <section id="companies-section">
        <h3>WORKING WITH THE BEST COMPANIES IN CANNABIS</h3>
        <div className="small-gray-line-h"></div>
        <div id="logos-row">
          <div className="company-logo-container">
            <img className="company-logo" src='static/images/employer-page/company-logos/ll-logo.png' alt='LeafLink' />
          </div>
          <div className="company-logo-container">
            <img id="GTI" className="company-logo" src='static/images/employer-page/company-logos/GTI.png' alt='GTI' />
          </div>
          <div className="company-logo-container">
            <img className="company-logo" src='static/images/employer-page/company-logos/Cresco.png' alt='Cresco' />
          </div>
          <div className="company-logo-container">
            <img id="Baker" className="company-logo" src='static/images/employer-page/company-logos/Baker.png' alt='Baker' />
          </div>
          <div className="company-logo-container">
            <img className="company-logo" src='static/images/employer-page/company-logos/willies.png' alt='Willie’s Reserve' />
          </div>
          <div className="company-logo-container">
            <img className="company-logo" src='static/images/employer-page/company-logos/PAX.png' alt='PAX' />
          </div>
          <div className="company-logo-container">
            <img className="company-logo" src='static/images/employer-page/company-logos/verde.png' alt='Verde' />
          </div>
          <div className="company-logo-container">
            <img id="NR" className="company-logo" src='static/images/employer-page/company-logos/Native-Roots.jpg' alt='Native Roots' />
          </div>
          <div className="company-logo-container">
            <img className="company-logo" src='static/images/employer-page/company-logos/Greenbits.webp' alt='GreenBits' />
          </div>
          <div className="company-logo-container">
            <img id="greenpeak" className="company-logo" src='static/images/employer-page/company-logos/Greenpeak innovations.png' alt='Green Peak Innovation' />
          </div>
          <div className="company-logo-container">
            <img className="company-logo" src='static/images/employer-page/company-logos/tikun.png' alt='Tikun Olam' />
          </div>
          <div className="company-logo-container">
            <img className="company-logo" src='static/images/employer-page/company-logos/TGS.png' alt='TGS' />
          </div>
          <div className="company-logo-container">
            <img className="company-logo" src='static/images/employer-page/company-logos/VS.png' alt='Vicente Sederberg' />
          </div>
          <div className="company-logo-container">
            <img id="CA" className="company-logo" src='static/images/employer-page/company-logos/CannaAdvisors.png' alt='Canna Advisors' />
          </div>
          <div className="company-logo-container">
            <img id="HS" className="company-logo" src='static/images/employer-page/company-logos/harborside.jpg' alt='Harborside' />
          </div>
        </div>
        <style>
          {`
            #companies-section {
              min-height: 100vh;
              min-weight: 100vw;
              padding: 3rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-content: center;
              align-items: center;
            }

            #logos-row {
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              padding: 0 2rem 2rem 2rem;
            }

            .company-logo {
              width: 100%;
            }

            .company-logo-container {
              width: 20%;
              padding: 2rem;
             
              overflow: none;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }

            #greenpeak {
              height: 70%;
              width: 45%;
            }

            #GTI {
              height: 60%;
              width: 60%;
            }

            #Baker {
              height: 60%;
              width: 58%;
            }

            #HS {
              height: 63%;
              width: 63%;
            }

            #NR {
              height: 80%;
              width: 80%;
            }

            #CA {
              height: 70%;
              width: 70%;
            }
          
          `}
        </style>
      </section>
    );
  }
}

export default Companies;
