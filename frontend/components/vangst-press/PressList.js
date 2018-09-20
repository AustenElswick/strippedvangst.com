import React, { Component } from "react";

class PressList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {
          title: "Entrepreneur's 100 Brilliant Companies of 2018",
          description_1:
            "What makes a company brilliant? There's no single answer, so we started with a question: 'What in the past year made us say, That's brilliant!?'",
          description_2:
            "To compile this, the 2018 edition of our 100 Brilliant Company list, we explored boundary-pushing entrepreneurship -- from Kevin Hart challenging comedy's pecking order to big risks, fresh employee perks and meaningful social missions.",
          description_3:
            "This year we broke down our 100 Brilliant Companies into various categories, including marketing, leaders, services and more.",
          link: "https://www.entrepreneur.com/article/313579",
          img:
            "https://s3-us-west-2.amazonaws.com/vangstimages/press_images/100BrilliantCompanies.jpeg"
        },
        {
          title:
            "This 24-Year-Old Built A LinkedIn For Weed Jobs, No Experience Required",
          description_1:
            "Vangst sources job openings in cannabis companies–many of which require no prior industry experience–that established job boards won't post.",
          description_2:
            "Karson Humiston started a student travel company while she was still an undergraduate at St. Lawrence University in upstate New York. But before she graduated, she'd already decided to do something bigger.",
          description_3: "",
          link:
            "https://www.fastcompany.com/40471045/this-24-year-old-built-a-linkedin-for-weed-jobs-no-experience-required",
          img:
            "https://d7fjqd68w6dn5.cloudfront.net/press_images/fastCompany.png"
        },
        {
          title: "Forbes 30 Under 30",
          description_1:
            "Noticing a lack of information on careers in the cannabis industry, Karson Humiston founded Vangst, an employee recruitment platform dedicated to connecting employers to candidates ranging from entry level to executive within the emerging market. Vangst reported a 567% revenue increase in the past year and projects revenues of $5 million for 2018.",
          description_2: "",
          description_3: "",
          link: "https://www.forbes.com/profile/karson-humiston/#422ed5756fd6",
          img:
            "https://d7fjqd68w6dn5.cloudfront.net/press_images/forbes-logo.jpg"
        },
        {
          title: "Why This Founder Waited To Fundraise And How It Paid Off",
          description_1:
            "Karson Humiston's future as a serial entrepreneur traces back to her elementary school days growing up in East Aurora, New York, a small town outside Buffalo. That's where she started her very first venture on the local golf course when she struck up a deal with the club's pro to allow her to retrieve lost golf balls and resell them for ten cents each on the fourth hole every Monday.",
          description_2: "",
          description_3: "",
          link:
            "https://www.forbes.com/sites/heathercabot/2018/03/21/why-this-founder-waited-to-fundraise-and-how-it-paid-off/#3ad594686db9",
          img:
            "https://d7fjqd68w6dn5.cloudfront.net/press_images/forbes-logo.jpg"
        },
        {
          title: "How Can I Get a Job in the Cannabis Industry?",
          description_1:
            "With medical marijuana now legal in well over half of the U.S. and recreational marijuana use allowed in nine states (and counting), cannabis companies are scrambling to fill a rush of new jobs in the industry—an estimated 340,000 of them nationwide by 2020.",
          description_2: "",
          description_3: "",
          link: "http://fortune.com/2018/08/30/jobs-in-cannabis-industry/",
          img:
            "https://s3-us-west-2.amazonaws.com/vangstimages/press_images/fortune-logo.jpg"
        },
        {
          title: "How to Hire and Get Hired in Cannabis with Karson Humiston",
          description_1:
            "Karson Humiston is the founder of Vangst, a multi-state recruiting company focused on the cannabis space. Karson is on the Forbes list of The Top 30 Under 30 entrepreneurs on the rise.",
          description_2:
            "Listen in as Karson describes how to hire the perfect candidate to help your business grow. Karson also lays out how to create a successful career in the cannabis industry and what kind of candidates are getting hired.",
          description_3: "",
          link: "https://www.cannainsider.com/karson-humiston-vangst/",
          img: "https://d7fjqd68w6dn5.cloudfront.net/cannainsider.png"
        },
        {
          title: "Marijuana employment company raises $2.5 million",
          description_1:
            "A cannabis industry-focused job recruitment firm has raised $2.5 million in seed funding.",
          description_2:
            "Denver-based Vangst will use the capital to expand its online jobs marketplace and improve recruiting technology and internal infrastructure, according to a company news release.",
          description_3:
            "The funding round was led by Lerer Hippeau, a New York-based venture capital firm with worldwide investments.",
          link:
            "https://mjbizdaily.com/marijuana-employment-company-raises-2-5-million/",
          img:
            "https://d7fjqd68w6dn5.cloudfront.net/press_images/mjbizdaily.png"
        }
      ]
    };
  }

  render() {
    return (
      <section id="press-section">
        <div id="press-content">
          <div>
            <h2 id="presss-title" className="text-center">
              Vangst's Latest Press Coverage
            </h2>
          </div>
          <div id="press-container">
            {this.state.articles.map(article => {
              return (
                <a href={article.link} target="_blank">
                  <div className="article-card">
                    <div>
                      <img className="article-img" src={article.img} />
                    </div>
                    <div className="article-description-container">
                      <h4 className="article-title">{article.title}</h4>
                      <p className="article-description">
                        {article.description_1}
                      </p>
                      <p className="article-description">
                        {article.description_2}
                      </p>
                      <p className="article-description">
                        {article.description_3}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        <style>
          {`
          #press-section {min-height: 100vh; min-width: 100vw; padding: 4rem; display: flex; flex-direction: column; justify-content: center; align-content: center; align-items: center;}
          a {text-decoration: none;}
          .article-card {display: flex; flex-direction: row; justify-content: center; align-content: center; align-items: center; border: 1px solid lightgray; margin: 1rem; border-radius: 15px;}
          .article-description-container {padding: 1rem;}
          .article-img {width: 250px; height: auto; margin: 1rem;}
          .article-title {color: black; padding-bottom: 1rem;}
          .article-description {color: black; font-weight: 400;}
            
          `}
        </style>
      </section>
    );
  }
}

export default PressList;
