import React, { Component } from "react";

class Headshots extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        {
          first_name: "Karson",
          last_name: "Humiston",
          position: "Founder, CEO",
          img: "/static/images/team-page/headshots/karson-humiston.jpg"
        },
        {
          first_name: "Davyd",
          last_name: "Smith",
          position: "CTO",
          img: "/static/images/team-page/headshots/davyd-smith.jpg"
        },
        {
          first_name: "Dena",
          last_name: "Gellmann",
          position: "Director of Recruiting",
          img: "/static/images/team-page/headshots/dena-gellmann.jpg"
        },
        {
          first_name: "Jordan",
          last_name: "Smith",
          position: "Director of Operations",
          img: "/static/images/team-page/headshots/jordan-smith.jpg"
        },
        {
          first_name: "Kyle",
          last_name: "Arfsten",
          position: "Director of Growth",
          img: "/static/images/team-page/headshots/kyle-arfsten.jpg"
        },
        {
          first_name: "Amanda",
          last_name: "Guerrero",
          position: "Business Developement Manager",
          img: "/static/images/team-page/headshots/amanda-guerrero.jpg"
        },
        {
          first_name: "Mike",
          last_name: "Olson",
          position: "Software Developer",
          img: "/static/images/team-page/headshots/mike-olson.jpg"
        },
        {
          first_name: "Andrew",
          last_name: "Freeman",
          position: "Sr. Recruiter",
          img: "/static/images/team-page/headshots/andrew-freeman.jpg"
        },
        {
          first_name: "Kendall",
          last_name: "Kelleher",
          position: "Internal Recruiting",
          img: "/static/images/team-page/headshots/kendall-kelleher.jpg"
        },
        {
          first_name: "Mohammed",
          last_name: "Imran",
          position: "Developer",
          img: "/static/images/team-page/headshots/mohammed-imran.jpg"
        },
        {
          first_name: "Max",
          last_name: "Ireland",
          position: "Sr. Recruiter Manager",
          img: "/static/images/team-page/headshots/max-ireland.jpg"
        },
        {
          first_name: "Kelsea",
          last_name: "Appelbaum",
          position: "Sr. Recruiter Manager",
          img: "/static/images/team-page/headshots/kelsea-appelbaum.jpg"
        },
        {
          first_name: "Jonte",
          last_name: "Major",
          position: "Recruiter",
          img: "/static/images/team-page/headshots/jonte-major.jpg"
        },
        {
          first_name: "Samson",
          last_name: "O'Neil",
          position: "Business Development Manager",
          img: "/static/images/team-page/headshots/samson-oneil.jpg"
        },
        {
          first_name: "Jenny",
          last_name: "Surratt",
          position: "Staff Accountant",
          img: "/static/images/team-page/headshots/jenny-surratt.jpg"
        },
        {
          first_name: "Jacob",
          last_name: "Krushall",
          position: "Senior Recruiter",
          img: "/static/images/team-page/headshots/jacob-krushall.jpg"
        },
        {
          first_name: "Patrick",
          last_name: "Bailey",
          position: "Architect Lead",
          img: "/static/images/team-page/headshots/patrick-bailey.jpg"
        },
        {
          first_name: "Zach",
          last_name: "Schulz",
          position: "Chief Architect",
          img: "/static/images/team-page/headshots/zach-schulz.jpg"
        },
        {
          first_name: "Yusef",
          last_name: "Marra",
          position: "Sr. Developer",
          img: "/static/images/team-page/headshots/yusef-marra.jpg"
        },
        {
          first_name: "Tim",
          last_name: "Alexander",
          position: "Data Analyst",
          img: "/static/images/team-page/headshots/tim-alexander.jpg"
        },
        {
          first_name: "Justin",
          last_name: "Adams",
          position: "Director of GIGS",
          img: "/static/images/team-page/headshots/justin-adams.jpg"
        },
        {
          first_name: "McLean",
          last_name: "Sale",
          position: "Business Development Manager",
          img: "/static/images/team-page/headshots/mclean-sale.jpg"
        },
        {
          first_name: "Allison",
          last_name: "Ault",
          position: "UI / UX Designer",
          img: "/static/images/team-page/headshots/allison-ault.jpg"
        },
        {
          first_name: "Mark",
          last_name: "Jones",
          position: "Recruiter",
          img: "/static/images/team-page/headshots/mark-jones.jpg"
        },
        {
          first_name: "Cat",
          last_name: "DeMuro",
          position: "Content Manager",
          img: "/static/images/team-page/headshots/cat-demuro.jpg"
        },
        {
          first_name: "Molly",
          last_name: "Bosco",
          position: "Recruiting and Office Coordinator",
          img: "/static/images/team-page/headshots/molly-bosco.jpg"
        },
        {
          first_name: "Alex",
          last_name: "Lang",
          position: "Recruiter",
          img: "/static/images/team-page/headshots/alex-lang.jpg"
        },
        {
          first_name: "Justinian",
          last_name: "Mason",
          position: "Sr. Recruiter",
          img: "/static/images/team-page/headshots/justinian-mason.jpg"
        },
        {
          first_name: "Kevin",
          last_name: "Tunnell",
          position: "Business Development Manager",
          img: "/static/images/team-page/headshots/kevin-tunnell.jpg"
        },
        {
          first_name: "Maxwell",
          last_name: "Snyder",
          position: "Sr. Recruiter",
          img: "/static/images/team-page/headshots/max-snyder.jpg"
        },
        {
          first_name: "Ty",
          last_name: "Hyten",
          position: "Application Developer",
          img: "/static/images/team-page/headshots/ty-hyten.jpg"
        },
        {
          first_name: "Hannah",
          last_name: "Holmgren",
          position: "Office Administrator",
          img: "/static/images/team-page/headshots/hannah-holmgren.jpg"
        },
        {
          first_name: "Tyson",
          last_name: "Weigel",
          position: "Staff Accountant",
          img: "/static/images/team-page/headshots/tyson-weigel.jpg"
        },
        {
          first_name: "Austen",
          last_name: "Elswick",
          position: "Customer Support Associate",
          img: "/static/images/team-page/headshots/austen-elswick.jpg"
        },
        {
          first_name: "Dan",
          last_name: "Barzottini",
          position: "Business Development Manager",
          img: "/static/images/team-page/headshots/dan-barzottini.jpg"
        },
        {
          first_name: "Valerie",
          last_name: "Crisp",
          position: "Business Development Manager",
          img: "/static/images/team-page/headshots/valerie-crisp.jpg"
        },
        {
          first_name: "Ryan",
          last_name: "Rapaport",
          position: "Business Development Manager",
          img: "/static/images/team-page/headshots/ryan-rapaport.jpg"
        },
        {
          first_name: "Max",
          last_name: "Martinez",
          position: "Recruiter",
          img: "/static/images/team-page/headshots/max-martinez.jpg"
        },
        {
          first_name: "Chris",
          last_name: "Morgan",
          position: "Recruiter",
          img: "/static/images/team-page/headshots/chris-morgan.jpg"
        },
        {
          first_name: "Stacey",
          last_name: "Scheliga",
          position: "Recruiter",
          img: "/static/images/team-page/headshots/stacey-scheliga.jpg"
        },
        {
          first_name: "Kelsey",
          last_name: "Barton",
          position: "Recruiter",
          img: "/static/images/team-page/headshots/kelsey-barton.jpg"
        },
        {
          first_name: "Neal",
          last_name: "Beshears",
          position: "Recruiter",
          img: "/static/images/team-page/headshots/neal-beshears.jpg"
        },
        {
          first_name: "Robyn",
          last_name: "Curtis",
          position: "Recruiter",
          img: "/static/images/team-page/headshots/robyn-curtis.jpg"
        },
        {
          first_name: "Jessica",
          last_name: "Thibodeaux",
          position: "Customer Service Associate",
          img: "/static/images/team-page/headshots/jessica-thibodeaux.jpg"
        },
        {
          first_name: "Corey",
          last_name: "Van Oordt",
          position: "Recruiter",
          img: "/static/images/team-page/headshots/corey-vanoordt.jpg"
        },
        {
          first_name: "Chas",
          last_name: "Fricke",
          position: "Software Developer",
          img: "/static/images/team-page/headshots/chas-fricke.jpg"
        },
        {
          first_name: "Cody",
          last_name: "Powell",
          position: "Recruiter",
          img: "/static/images/team-page/headshots/cody-powell.jpg"
        },
        {
          first_name: "Julie",
          last_name: "Shinners",
          position: "Business Development Manager",
          img: "/static/images/team-page/headshots/julie-shinners.jpg"
        },
        {
          first_name: "Emily",
          last_name: "Bryan",
          position: "Client Success Manager",
          img: "/static/images/team-page/headshots/emily-bryan.jpg"
        },
        {
          first_name: "Jessica",
          last_name: "Barrett",
          position: "People Ops Manager",
          img: "/static/images/team-page/headshots/jessica-barrett.jpg"
        },
        {
          first_name: "Romy",
          last_name: "Altdorffer",
          position: "Recruiter",
          img: "/static/images/team-page/headshots/romy-altdorffer.jpg"
        },
        {
          first_name: "Brandon",
          last_name: "Henderson",
          position: "Event Manager",
          img: "/static/images/team-page/headshots/brandon-henderson.jpg"
        },
        {
          first_name: "Hayley",
          last_name: "Johnston",
          position: "Recruiter",
          img: "/static/images/team-page/headshots/hayley-johnston.jpg"
        },
        {
          first_name: "Jonathan",
          last_name: "Burnett",
          position: "Recruiter",
          img: "/static/images/team-page/headshots/jonathan-burnett.jpg"
        },
        {
          first_name: "Sarah",
          last_name: "Levin",
          position: "Customer Success Specialist",
          img: ""
        }
      ]
    };
  }

  render() {
    return (
      <section id="headshot-section">
        <div id="headshot-content">
          <div>
            <h2 id="headshots-title" className="text-center">
              Meet our team.
            </h2>
          </div>
          <div id="intro-columns">
            <div id="intro-column-1">
              <p className="intro-column-text">
                We believe that having an exceptional internal team allows us to
                best serve our clients. That’s why we pride ourselves on hiring
                the most talented internal staff for every aspect of our
                business. Our constant growth is a testament to our devotion to
                being ahead of the game in the rapidly growing cannabis space.
              </p>
            </div>
            <div id="intro-column-2">
              <p className="intro-column-text">
                We vow to use our vast resources and expertise to connect you
                with the best talent and opportunities in the industry. You can
                always count on open communication and continuous support from
                every member of our team.
              </p>
            </div>
          </div>
          <div id="headshot-container">
            {this.state.employees.map(employee => {
              var headshot = employee.img;
              if (headshot === "") {
                headshot =
                  "/static/images/team-page/headshots/anon-headshot.jpg";
              }
              return (
                <div className="test-card-container">
                  <img className="test-headshot" src={headshot} />
                  <div className="headshot-label-2">
                    <div className="headshot-name">{employee.first_name}</div>
                    <div className="headshot-name">{employee.last_name}</div>
                    <div className="headshot-position">{employee.position}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <style>
          {`
            #headshot-section {
              min-height: 100vh;
              min-width: 100vw;
              padding: 3rem;
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
            .test-headshot { height: 375px; width: 250px; border-radius: 15px 15px 0 0; -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
              filter: grayscale(100%);}

            .test-headshot:hover { -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
              filter: grayscale(0%)}

            .test-card-container {position: relative; margin: 25px 5px 0 5px;}
            .headshot-label-2 {position: absolute; bottom: 0px; left: 0px; padding: 1rem; width: 250px;}
            .headshot-label-2 {
              background: linear-gradient(
                to top,
                rgb(240, 86, 31),
                rgba(255, 0, 0, 0)
              )
            }

            .headshot-name {
              font-family: Brandon Grotesque Bold;
              color: white;
              font-size: 2.2rem;
              line-height: 38px;
              font-weight: 500;
            }

            .headshot-position {
              font-family: Brandon Grotesque Bold;
              color: white;
              font-size: 1.2rem;
              font-weight: 600;
              padding-top: 8px;
              padding-bottom: 5px;
              line-height: 20px;
            }

            @media (max-width: 1279px) {
              .test-headshot { height: 375px; width: 250px; -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
                filter: grayscale(0%); border-radius: 15px 15px 0 0; }

              #intro-columns {display: flex; flex-direction: column;}
              #intro-column-1 {width: 100%; padding: 0; margin-top: 1rem;}
              #intro-column-2 {width: 100%; padding: 1.5rem 0 0 0;}
              #headshots-title {padding: 0;}
              .intro-column-text {margin-bottom: 0;}
              #headshots-section {padding: 1rem; }
            }





        




          

          `}
        </style>
      </section>
    );
  }
}

export default Headshots;
