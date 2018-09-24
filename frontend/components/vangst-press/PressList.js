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
            "Jobs In Legal Cannabis Are On The Rise And Salaries Are Getting High",
          description_1:
            "Cannabis jobs are on the rise and salaries are increasing, according to a new report by employment agency Vangst. Those figures are set to grow further as capital continues to flow into the industry and the work force gains experience.",
          description_2: "",
          description_3: "",
          link:
            "https://www.forbes.com/sites/julieweed/2018/09/24/jobs-in-legal-cannabis-are-on-the-rise-and-salaries-are-getting-high/#164c42f9e3db",
          img:
            "https://d7fjqd68w6dn5.cloudfront.net/press_images/forbes-logo.jpg"
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
        },
        {
          title:
            "Meet the 24-year-old founder behind the career site for cannabis jobs",
          description_1:
            "By 2026, the marijuana industry could be worth $50 billion annually, and 24-year-old Karson Humiston wants to bridge the gap between workers interested in cannabis careers and companies looking to grow their business.",
          description_2:
            "Humiston is the founder of online career platform Vangsters, which provides a central location for cannabis employers to find potential employees. The platform is free for job candidates, but companies using the site pay a fee of $69 per month for unlimited job postings.",
          description_3:
            "Humiston had the idea to recruit talent in the cannabis industry in 2015, when she was a soon-to-be graduate from St. Lawrence University.",
          link:
            "https://www.cnbc.com/2017/10/18/meet-the-24-year-old-founder-behind-the-career-site-for-cannabis-jobs.html",
          img: "https://d7fjqd68w6dn5.cloudfront.net/press_images/cnbc.png"
        },
        {
          title: "5 Red Flags That You Made A Bad Hire",
          description_1:
            "What do you do when your promising new hire lands with a thud?",
          description_2:
            "The interview process went well, and you were excited to bring on the new employee, but the person who showed up the first week doesn’t seem like the person you thought you hired. It’s possible that a candidate passes your screening process with flying colors and then lands with a thud when they take their desk, but how do you tell the difference between new-job jitters and red flags that you’ve made a mistake?",
          description_3: "",
          link:
            "https://www.fastcompany.com/40464373/5-red-flags-that-you-made-a-bad-hire",
          img:
            "https://d7fjqd68w6dn5.cloudfront.net/press_images/fastCompany.png"
        },
        {
          title:
            "Meet the 24-Year-Old Entrepreneur Who Just Launched a Careers Site for Pot Jobs",
          description_1:
            "Legal weed now employs an estimated 120,000 people; a figure that’s expected to triple in the next few years, according to the research firm New Frontier Data.",
          description_2:
            "For the weed dispensaries, farms, and software companies that will create the bulk of those jobs — and the job seekers who take them — there’s a new interweediery (you’re welcome).",
          description_3:
            "Vangsters, a digital job platform à la Monster.com or Indeed, rolled out this Wednesday with more than open 100 pot-specific positions. There are some salaried gigs, mostly in management roles at distribution and manufacturing facilities, but the bulk of the open spots are compensated hourly. Plant harvesters, trimmers, and salespeople (budtenders, if you will) make up the lion's share.",
          link:
            "http://time.com/money/4923221/meet-the-24-year-old-entrepreneur-who-just-launched-a-careers-site-for-pot-jobs/",
          img: "https://d7fjqd68w6dn5.cloudfront.net/press_images/time.png"
        },
        {
          title: "How to get a job in the marijuana industry",
          description_1:
            "For anyone curious about working in the world of weed, a new resource makes job-hunting easier. A recruiting agency for legal cannabis firms has launched a website that aims to serve as a one-stop shop for employers and job seekers. The site, Vangsters, allows hopefuls to apply to jobs and create employee profiles, with a focus on marijuana-specific skills and software.",
          description_2: "",
          description_3: "",
          link:
            "https://www.cbsnews.com/news/how-to-get-a-job-in-the-legal-weed-business/",
          img: "https://d7fjqd68w6dn5.cloudfront.net/press_images/cbs_news.png"
        },
        {
          title:
            "Why more and more experienced workers want a new career in cannabis",
          description_1:
            "Job seekers looking for a way into the cannabis industry share details about their backgrounds, aspirations and how they’re working to stand out from the crowd",
          description_2: "",
          description_3: "",
          link:
            "https://www.thecannabist.co/2017/07/26/weed-jobs-marijuana-industry-worker-skills/84466/",
          img:
            "https://d7fjqd68w6dn5.cloudfront.net/press_images/thecannabist.png"
        },
        {
          title: "World's largest cannabis career fair draws thousands",
          description_1:
            "What industry recruiters call “the world’s largest cannabis career fair” hit Denver this past weekend, with “thousands” in attendance looking for jobs, according to the event organizers.",
          description_2: "",
          description_3: "",
          link:
            "https://www.foxbusiness.com/features/worlds-largest-cannabis-career-fair-draws-thousands",
          img:
            "https://d7fjqd68w6dn5.cloudfront.net/press_images/fox-business.png"
        },
        {
          title:
            "Get a job in the marijuana industry at this cannabis job fair in Denver",
          description_1:
            "DENVER -- Looking for a job? A career fair in Denver this weekend promises jobs in a major 'growth' industry.",
          description_2: "",
          description_3: "",
          link:
            "https://www.thedenverchannel.com/news/local-news/cannabis-career-fair",
          img: "https://d7fjqd68w6dn5.cloudfront.net/press_images/7news.png"
        },
        {
          title: "Job Growth In The Age Of Legalization.",
          description_1:
            "With the marijuana industry booming in Colorado and elsewhere, the sector is squarely in its, uh, growth phase. The question for employers now becomes how best to, well, weed out the best applicants.",
          description_2:
            "That’s where Karson Humiston comes in. The 24-year-old recently landed in Denver from upstate New York, where she started Vangst Talent Network, a staffing company that pairs employers with qualified employees throughout all segments of the marijuana business.",
          description_3: "",
          link:
            "https://www.5280.com/2016/11/job-growth-in-the-age-of-legalization/",
          img:
            "https://d7fjqd68w6dn5.cloudfront.net/press_images/5280_logo.jpeg"
        },
        {
          title: "The Cannabist Show: She's A Head Hunter For Pot.",
          description_1:
            "The do’s and don’ts of attending cannabis career fairs (spoiler alert: Don’t get stoned before going).",
          description_2:
            "Dealing with family members who are skeptical and concerned about marijuana jobs.",
          description_3:
            "What industry leaders are looking for in prospective employees — from budtenders to CEOs.",
          link:
            "http://www.thecannabist.co/2016/08/19/headhunter-karson-humiston-vangst-blue-kudu-andrew-schrot/61328/",
          img:
            "https://d7fjqd68w6dn5.cloudfront.net/press_images/thecannabist.png"
        },
        {
          title: "Cannabis Job Fair in Denver: Eight Companies That Are Hiring",
          description_1:
            "It's a great time to be an unemployed weed lover in Colorado: One of the nation's largest cannabis career fairs is coming to Denver on Thursday, July 28.",
          description_2:
            "Over fifty companies ranging from dispensaries to labs are hiring for more than 1,000 positions, from entry level to executive. From 2 to 8 p.m. on July 28, representatives from these companies will be recruiting new hires at Mile High Station, 2027 Old West Colfax Avenue. Among those companies...",
          description_3: "",
          link:
            "https://www.westword.com/news/cannabis-job-fair-in-denver-eight-companies-that-are-hiring-8122072",
          img:
            "https://d7fjqd68w6dn5.cloudfront.net/press_images/westword-logo.png"
        },
        {
          title:
            "Couch Potatoes Need Not Apply: Talent Agency Targets Talent Professionals.",
          description_1:
            "Karson Humiston, the founder and president of Vangst Talent Network, has paired roughly 2,000 jobseekers from a wide range of professional backgrounds with high-profile gigs in the cannabis space, but fighting the industry’s persisting stigma can sometimes feel like a full-time job all on its own.",
          description_2:
            "“This notion of a typical stoner sitting on the couch eating potato chips and smoking weed is what a lot of people carry in their minds…when I tell them I run a cannabis talent agency,” Humiston told Civilized.",
          description_3: "",
          link:
            "https://www.civilized.life/articles/basement-dwellers-need-not-apply-cannabis-talent-agency-works-with-wide-range-of-pros/",
          img:
            "https://d7fjqd68w6dn5.cloudfront.net/press_images/civilized-logo.png"
        },
        {
          title:
            "Cannabis Jobs Count: Part 4, How To Find A Job In The Cannabis Industry.",
          description_1:
            "As Leafly recently reported, America’s legal cannabis economy now supports more than 122,000 full-time jobs in 29 states and Washington, D.C.",
          description_2: "If you don’t have one, how do you get one?",
          description_3:
            "I put the question to Karson Humiston, founder of Vangst Talent Network, the world’s largest staffing and recruiting agency focused specifically on the cannabis industry.",
          link:
            "https://www.leafly.com/news/industry/find-job-cannabis-industry",
          img:
            "https://d7fjqd68w6dn5.cloudfront.net/press_images/leafly-logo.png"
        },
        {
          title:
            "Friends In High Places: The Women Helping You Land A Job In the Weed Industry.",
          description_1:
            "Whether people like it or not, legal cannabis—both medical and recreational—is unarguably on the rise. Colorado is teeming with dispensaries, California is slated to vote in recreational marijuana this fall, and Ohio is about to become the 25th state to legalize medicinal weed. As cannabis permeates US culture and formalizes as an industry, sticking points—both commonplace (How do I find reliable, qualified employees?) and unusual (How do I find reliable qualified employees to work in this highly regulated, often stigmatized industry?)—begin to reveal themselves.",
          description_2:
            "According to Karson Humiston, 'The biggest challenge is probably finding reliable people for the lower-end positions: the budtenders and other people who are working in the actual dispensaries.' (A 'budtender' is like a cannabis barista-slash-sommelier. They work in dispensaries, answering marijuana-specific questions and ringing up purchases in accordance with state law.)",
          description_3: "",
          link:
            "https://broadly.vice.com/en_us/article/8qwwgb/friends-in-high-places-the-women-helping-you-land-a-job-in-the-weed-industry",
          img: "https://d7fjqd68w6dn5.cloudfront.net/press_images/broadly.png"
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
          .article-card {display: flex; flex-direction: row; align-content: center; align-items: center; border: 1px solid lightgray; margin: 1rem; border-radius: 15px;}
          .article-description-container {padding: 1rem;}
          .article-img {width: 250px; height: auto; margin: 1rem;}
          .article-title {color: black; padding-bottom: 1rem;}
          .article-description {color: black; font-weight: 400;}

          @media (max-width: 769px) {
            .article-description {display: none}
            .article-title {padding-bottom: 0; margin-bottom: 0;}
          }
          @media (max-width: 765px) {
            .article-img {width: 100px}
            .article-title {font-size: 1.25rem;}
            #press-section {padding: 2rem;}
          }
          @media (max-width: 415px) {
            .article-img {width: 100px; margin: 0.5rem;}
            .article-title {font-size: 1rem;}
            .article-description-container {padding: 0.5rem;}
            .article-card {border-radius: 5px;}
            #press-section {padding: 1.5rem;}
          }
          @media (max-width: 380px) {
            .article-img {width: 100px; margin: 0.5rem;}
            .article-title {font-size: 0.9rem;}
            #press-section {padding: 1rem;}
          }
          `}
        </style>
      </section>
    );
  }
}

export default PressList;
