import React, { Component } from 'react';

class Headshots extends Component {
  render() {
    return (
      <section id="headshot-section">
        <div id="headshot-content">
          <div>
            <h2 id="headshots-title" className="text-center">Meet our team.</h2>
          </div>
          <div id="intro-columns">
            <div id="intro-column-1">
              <p className="intro-column-text">We believe that having an exceptional internal team allows us to best serve our clients. That’s why we pride ourselves on hiring the most talented internal staff for every aspect of our business. Our constant growth is a testament to our devotion to being ahead of the game in the rapidly growing cannabis space.</p>
            </div>
            <div id="intro-column-2">
              <p className="intro-column-text">We vow to use our vast resources and expertise to connect you with the best talent and opportunities in the industry. You can always count on open communication and continuous support from every member of our team.</p>
            </div>
          </div>
          <div id="headshot-container">

            <div id="karson-humiston" className="headshot-card">
              <div className="headshot-label">
                <div className="headshot-name">Karson<br/>Humiston</div>
                <div className="headshot-position">Founder, CEO</div>
              </div>
            </div>
            <div id="davyd-smith" className="headshot-card">
              <div className="headshot-label">
                <div className="headshot-name">Davyd<br/>Smith</div>
                <div className="headshot-position">CTO</div>
              </div>
            </div>
            <div id="dena-gellmann" className="headshot-card">
              <div className="headshot-label">
                <div className="headshot-name">Dena<br/>Gellmann</div>
                <div className="headshot-position">Director of Recruiting</div>
              </div>
            </div>
            <div id="jordan-smith"className="headshot-card">
              <div className="headshot-label">
                <div className="headshot-name">Jordan<br/>Smith</div>
                <div className="headshot-position">Brand Director</div>
              </div>
            </div>
            <div id="kyle-arfsten" className="headshot-card">
              <div className="headshot-label">
                <div className="headshot-name">Kyle<br/>Arfsten</div>
                <div className="headshot-position">Director of Growth</div>
              </div>
            </div>
            <div id="amanda-guerrero" className="headshot-card">
              <div className="headshot-label">
                <div className="headshot-name">Amanda<br/>Guerrero</div>
                <div className="headshot-position">Business Development Manager</div>
              </div>
            </div>
            <div id="mike-olson" className="headshot-card">
              <div className="headshot-label">
                <div className="headshot-name">Mike<br/>Olson</div>
                <div className="headshot-position">Front End Developer</div>
              </div>
            </div>
            <div id="andrew-freeman" className="headshot-card">
              <div className="headshot-label">
                <div className="headshot-name">Andrew<br/>Freeman</div>
                <div className="headshot-position">Recruiter</div>
              </div>
            </div>
            <div id="kendall-kelleher" className="headshot-card">
              <div className="headshot-label">
                <div className="headshot-name">Kendall<br/>Kelleher</div>
                <div className="headshot-position">Recruiter</div>
              </div>
            </div>
            {/* <div id="mohammed-imran" className="headshot-card">
              <div className="headshot-label">
                <div className="headshot-name">Mohammed<br/>Imran</div>
                <div className="headshot-position">Developer</div>
              </div>
            </div> */}
            <div id="max-ireland" className="headshot-card">
              <div className="headshot-label">
                <div className="headshot-name">Max<br/>Ireland</div>
                <div className="headshot-position">Recruiter</div>
              </div>
            </div>
            <div id="kelsea-appelbaum" className="headshot-card">
              <div className="headshot-label">
                <div className="headshot-name">Kelsea<br/>Appelbaum</div>
                <div className="headshot-position">Recruiter</div>
              </div>
            </div>
            <div id="jonte-major" className="headshot-card">
              <div className="headshot-label">
                <div className="headshot-name">Jonte<br/>Major</div>
                <div className="headshot-position">Recruiter</div>
              </div>
            </div>
            <div id="samson-oneil" className="headshot-card">
              <div className="headshot-label">
                <div className="headshot-name">Samson<br/>O'Neil</div>
                <div className="headshot-position">Recruiter</div>
              </div>
            </div>
            <div id="jenny-surratt" className="headshot-card">
              <div className="headshot-label">
                <div className="headshot-name">Jenny<br/>Surratt</div>
                <div className="headshot-position">Accountant</div>
              </div>
            </div>
            {/* <div id="jacob-krushall" className="headshot-card">
              <div className="headshot-label">
                <div className="headshot-name">Jacob<br/>Krushall</div>
                <div className="headshot-position">Recruiter</div>
              </div>
            </div> */}
            <div id="patrick-bailey" className="headshot-card">
              <div className="headshot-label">
                <div className="headshot-name">Patrick<br/>Bailey</div>
                <div className="headshot-position">Architect Lead</div>
              </div>
            </div>
            <div id="zach-schulz" className="headshot-card">
              <div className="headshot-label">
                <div className="headshot-name">Zach<br/>Schulz</div>
                <div className="headshot-position">Chief Architect</div>
              </div>
            </div>

          </div>
        </div>
        <style>
          {`
            #karson-humiston {background-image: url('/static/images/team-page/headshots/karson-humiston.jpg');}
            #davyd-smith {background-image: url('/static/images/team-page/headshots/davyd-smith.jpg');}
            #dena-gellmann {background-image: url('/static/images/team-page/headshots/dena-gellmann.jpg');}
            #jordan-smith {background-image: url('/static/images/team-page/headshots/jordan-smith.jpg');}
            #kyle-arfsten {background-image: url('/static/images/team-page/headshots/kyle-arfsten.jpg');}
            #amanda-guerrero {background-image: url('/static/images/team-page/headshots/amanda-guerrero.jpg');}
            #mike-olson {background-image: url('/static/images/team-page/headshots/mike-olson.jpg');}
            #andrew-freeman {background-image: url('/static/images/team-page/headshots/andrew-freeman.jpg');}
            #kendall-kelleher {background-image: url('/static/images/team-page/headshots/kendall-kelleher.jpg');}
            // #mohammed-imran {background-image: url('/static/images/team-page/headshots/mohammed-imran.jpg');}
            #max-ireland {background-image: url('/static/images/team-page/headshots/max-ireland.jpg');}
            #max-ireland {background-image: url('/static/images/team-page/headshots/max-ireland.jpg');}
            #kelsea-appelbaum {background-image: url('/static/images/team-page/headshots/kelsea-appelbaum.jpg');}
            #jonte-major {background-image: url('/static/images/team-page/headshots/jonte-major.jpg');}
            #samson-oneil {background-image: url('/static/images/team-page/headshots/samson-oneil.jpg');}
            #jenny-surratt {background-image: url('/static/images/team-page/headshots/jenny-surratt.jpg');}
            // #jacob-krushall {background-image: url('/static/images/team-page/headshots/jacob-krushall.jpg');}
            #patrick-bailey {background-image: url('/static/images/team-page/headshots/patrick-bailey.jpg');}
            #zach-schulz {background-image: url('/static/images/team-page/headshots/zach-schulz.jpg');}



        


            #headshot-section {
              min-height: 100vh;
              min-width: 100vw;
              padding: 3rem;
              display: flex;
              flex-direction: column;
              justify-content: center;
            }

            #headshots-title {
              padding-left: 3rem;
            }

            #intro-columns {
              display:flex;
              flex-direction: row;
            }

            .intro-column-text {
              font-weight: 400;
            }

            #intro-column-1 {
              width: 50vw;
              padding: 0 1rem 0 3rem;
            }

            #intro-column-2 {
              width: 50vw;
              padding: 0 3rem 0 1rem;
            }

            #headshot-container {
              display: flex;
              flex-direction: row;
              justify-content: center;
              flex-wrap: wrap;
            }

            .headshot-card {
              width: 150px;
              height: 200px;
              margin: 5px;
              background-color: lightgray;
              border-radius: 5px 5px 0 0; 
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              background-position: top center;
              background-repeat: no-repeat;
              background-size: cover;
            }

            .headshot-label {
              width: 100%;
              height: auto;
              padding: 10px;
              background-image: linear-gradient(to bottom, rgba(240, 86, 31, 0) 0, #f0561f 100%);
              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;
            }

            .headshot-name {
              font-family: Brandon Grotesque Bold;
              color: white;
              font-size: 1.5rem;
              line-height: 20px;
              font-weight: 600;
            }

            .headshot-position {
              font-family: Brandon Grotesque Bold;
              color: white;
              font-size: 1rem;
              font-weight: 700;
              padding-top: 3px;
              line-height: 15px;
            }
            
            @media (max-width: 420px) {
              #headshot-section {
                padding: 2rem;
              }

              #headshots-title {
                padding: 0;
              }

              #intro-column-2 {
                display: none;
              }

              #intro-column-1 {
                width: 100%;
                padding: 0.5rem;
              }

            }

          
          
          `}
        </style>
      </section>
    );
  }
}

export default Headshots;
