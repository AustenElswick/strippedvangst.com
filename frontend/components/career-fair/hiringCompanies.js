import React, { Component } from 'react';

class HiringCompanies extends Component {
  render() {
    return (
      <section>
        <h3>THANK YOU TO ALL HIRING COMPANIES</h3>
        <div>gray line goes here</div>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="..." alt="First slide" />
              <img src='/static/images/logos/LeafLink-Color.png' alt='Leaflink' />
              <img src='/static/images/logos/GTI.png' alt='GTI' />
              <img src='/static/images/logos/CrescoLabs-Logo.png' alt='Cresco' />
              <img src='/static/images/logos/combined-color-1000-2.png' alt='Baker' />
              <img src='/static/images/logos/willies.png' alt='Willies' />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="..." alt="Second slide" />
              <img src='/static/images/logos/PAX.png' alt='PAX' />
              <img src='/static/images/logos/roundLogo.png' alt='Verde' />
              <img src='/static/images/logos/NativeRoots.jpg' alt='Native Roots' />
              <img src='/static/images/logos/Greenbits.webp' alt='GreedBits' />
              <img src='/static/images/logos/GreenpeakInnovations.png' alt='Greenpeak' />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="..." alt="Third slide" />
              <img src='/static/images/logos/TikunOlam.png' alt='Tikun Olam' />
              <img src='/static/images/logos/TGSM.png' alt='TGS' />
              <img src='/static/images/logos/VS.png' alt='Vicente Sederberg' />
              <img src='/static/images/logos/CannaAdvisors.png' alt='CannaAdvisors' />
              <img src='/static/images/logos/harborside.jpg' alt='Haborside' />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
    );
  }
}

export default HiringCompanies;
