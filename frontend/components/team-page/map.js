import React, { Component } from 'react';

class Map extends Component {
  render() {
    return (
      <section>
        <img src='/static/images/dummyImage.png' />
        <p>.01</p>
        <p>The Hard Facts</p>
        <div>
          <div>
            <h3>30</h3>
            <div>white line goes here</div>
            <p>states served</p>
          </div>
          <div>
            <h3>2,000</h3>
            <div>white line goes here</div>
            <p>partnering companies</p>
          </div>
          <div>
            <h3>15,000</h3>
            <div>white line goes here</div>
            <p>jobs placed</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Map;
