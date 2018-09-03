import React, { Component } from 'react';

class GigsDetails extends Component {
  render() {
    return (
      <section id="gigs-detail-section">
        <div id="gigs-detail-content" className="container">
          <div className="text-center"> 
            <h3>YOUR SEARCH ENDS HERE</h3>
          </div>
          <div className='all-columns'>
            <div className='single-column'>
              <img src='/static/images/candidate-page/star.png' />
              <p className="text-center text-dark">Industry leading companies</p>
            </div>
            <div className='single-column'>
              <img src='/static/images/candidate-page/network.png' />
              <p className="text-center text-dark">Support from network of industry insiders</p>
            </div>
            <div className='single-column'>
              <img src='/static/images/candidate-page/thumb.png' />
              <p className="text-center text-dark">Real Jobs</p>
            </div>
          </div>
        </div>
        
        <style jsx>{`
          #gigs-detail-section {
            padding: 3rem;
            min-width: 100vw;
            min-height: 50vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            align-content: center;
          }

          h3 {
            color: #f0561f
          }

          img {
            height: 10vw;
            width: 10vw;
          }

          p {
            padding: 2rem;
            display: flex;
            align-self: center;
          }

          .all-columns {
            padding-top: 2rem;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }

          .single-column {
            width: 33%;
            display: flex;
            flex-direction: column;
            align-items: center;
          }




          `}</style>
      </section>
    );
  }
}

export default GigsDetails;
