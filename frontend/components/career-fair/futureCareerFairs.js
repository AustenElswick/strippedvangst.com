import React, { Component } from 'react';
import Link from 'next/link';

class FutureCareerFairs extends Component {
  render() {
    return (
      <section>
        <div className='mailing-and-booth'>
          <div className='mailing'>
            <img src='/static/images/dummyImage.png' />
            <p>Join our mailing list to stay informed</p>
            <p>on future career fairs</p>
            <div className='white-box'>
              <Link to='/mail-chimp'><a>Click Here ></a></Link>
            </div>
          </div>
          <div className='booth'>
            <img src='/static/images/dummyImage.png' />
            <p>Learn more about having your own</p>
            <p>booth at the next career fair</p>
            <div className='white-box'>
              <Link to='/booth'><a>Click Here ></a></Link>
            </div>
          </div>
        </div>
        <aside>
          <iframe src='URL' />
        </aside>
      </section>
    );
  }
}

export default FutureCareerFairs;
