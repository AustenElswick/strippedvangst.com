import React, { Component } from 'react';

class PastEvents extends Component {
  render() {
    return (
      <section id="past-events-section">
        <div id="past-events-container">
          <div id="video-column">
            <iframe hedi id="video-player" src="https://www.youtube.com/embed/d_Q7gszt-KM" frameBorder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
          <div id="quotes-column">
            <h3 id="past-events-title">Past Events</h3>
            <div className="gray-line-h"></div>
            <div className='first-testimony'>
              <p className="past-event-quote">"We filled over 70 positions through participating in both Vangst Career Fairs. We will definitely be participating in more upcoming career fairs because it is an efficient way to get in front of qualified job seekers as well as advertise our brand."</p>
              <p className="event-quote-author">-Jonathan McCann, LivWell</p>
            </div>
            <div className='second-testimony'>
              <p className="past-event-quote">"Dixie Elixirs has participated in two career fairs with Vangst and both times have left with immediate hires.  Great job Vangst Team!"</p>
              <p className="event-quote-author">-Michael Tudor, Dixie Elixirs</p>
            </div>
            <div className='third-testimony'>
              <p className="past-event-quote">"Success for Green Man at Cannabis Career Fair! We met such a wide variety of people, from every walk of life. People living in other states looking for a reason to move to Colorado, some who had 10+ years in other industries but are searching for a new career path, even people already in the industry just ready for a change."</p>
              <p className="event-quote-author">-Green Man Cannabis</p>
            </div>
          </div>
        </div>
        <style jsx>{`
          #past-events-section {
            min-width: 100vw;
            min-height: 100vh;
            padding: 4rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          #past-events-container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-content: center;
            align-items: center;
          }
          #video-column {
            position:   relative;
            width:      84%;
            height: 0;
            padding-top:   35%; /* This is your aspect ratio */ }

          #video-player {
            position: absolute;
            top: 5%;
            left: 5%;
            bottom: 0;
            right: 0;
            width: 90%;
            height: 90%;
          }

          #quotes-column {
            padding: 1rem;
            width: 50%;
            height: 100%;
          }

    

          .past-event-quote {font-family: Brandon Grotesque Regular; margin-bottom: 0; font-weight: 400}

          @media (max-width: 780px) {
            #past-events-container {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-content: center;
              align-items: center;
            }
            #quotes-column {
              width: 100%;
              margin-top: 3rem;
            }
          }

          @media (max-width: 420px) {
            #past-events-section {
              padding: 1rem;
            }
            #quotes-column {
              min-height: 100%;
              justify-content: space-evenly;
            }
            #past-events-title {font-size: 1.25rem;}
            .past-event-quote {font-size: 1rem; line-height: 18px;}
            .event-quote-author {font-size: 0.9rem;}
            .gray-line-h {margin: 5px 0 10px 0;}

            #video-column {
              position:   relative;
              width:      100%;
              height: 0;
              padding-top:   55%; /* This is your aspect ratio */ }
  
            #video-player {
              position: absolute;
              top: 0;
              left: 0;
              bottom: 0;
              right: 0;
              width: 100%;
              height: 100%;
            }


          }

          .event-quote-author {font-family: Brandon Grotesque Bold;}
        `}</style>
      </section>
    );
  }
}

export default PastEvents;
