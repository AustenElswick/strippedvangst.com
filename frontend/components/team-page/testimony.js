import React, { Component } from 'react';

class Testimony extends Component {
  render() {
    return (
      <section>
        <h4>"headline of testimony goes here"</h4>
        <p>full quote goes here</p>
        <aside>
          <img src='static/images/dummyImage.png' />
          <p>Name | Position | Company</p>
        </aside>
        <div>gray line goes here</div>
      </section>
    );
  }
}

export default Testimony;
