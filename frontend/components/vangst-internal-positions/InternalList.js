import React, { Component } from "react";
import moment from "moment";
import axios from "axios";
import ApplyModal from "../direct-hire/applyModal";
import {
  UncontrolledCollapse,
  Collapse,
  Button,
  CardBody,
  Card
} from "reactstrap";

class InternalList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      store: [],
      isLoading: true,
      jobTitle: "",
      jobUrl: ""
    };
  }
  componentDidMount() {
    axios
      .get("/internal-jobs")
      .then(json => {
        return json.data.data.map(job => ({
          job_id: job.id,
          business_name: job.business,
          job_title: job.job_title,
          job_url: job.job_url,
          job_description: job.job_description,
          job_pay_range: job.pay_range,
          state: job.state,
          city: job.city,
          company_email: job.company_email,
          external_job_id: job.external_job_id,
          activation_date: job.activation_date,
          recruiter_email: job.recruiter_email
        }));
      })
      .then(newData =>
        this.setState({
          jobs: newData,
          store: newData,
          isLoading: false
        })
      )
      .catch(error => alert(error));
  }

  setInnerHtml = job => {
    return { __html: job.job_description };
  };

  getFilteredJobs(e) {
    const filteredJobs = this.state.store.filter(
      item =>
        item.state.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.city.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.job_title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.business_name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.setState({
      jobs: filteredJobs
    });
  }

  clickMe(job) {
    this.setState({ job: job });
  }

  render() {
    if (!this.state.isLoading) {
      return (
        <section id="internal-hire-list-section">
          <div id="internal-hire-title-container">
            <h1 id="internal-hire-title">Vangst is Hiring</h1>
          </div>
          <div id="internal-hire-content">
            <div id="featured-jobs-title-container">
              <h3 id="featured-jobs-section-title">FEATURED JOBS</h3>
              <div className="black-line-h" />
            </div>
            <div id="search-bar-container">
              <input
                className="searchBar"
                type="text"
                placeholder="Search jobs"
                onChange={e => this.getFilteredJobs(e)}
              />
            </div>

            <div id="search-results-container">
              {this.state.jobs.map(job => {
                return (
                  <div key={job.job_id} className="job-post-container">
                    <div className="logo-title-button-header-container">
                      <div className="logo-job-title-header">
                        <div className="logo-container">
                          <img
                            src="static/images/logos/logo-graphic.png"
                            alt="vangst logo"
                            id="vangst-logo-graphic"
                          />
                        </div>
                        <div className="job-title-and-location">
                          <h3 className="job-post-title">{job.job_title}</h3>
                          <h4 className="job-post-location">
                            {job.city}, {job.state}
                          </h4>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Button
                        id="more-info-button"
                        className="more-info-button"
                        id={`id-${job.job_id}`}
                      >
                        More Info >
                      </Button>
                    </div>

                    <UncontrolledCollapse toggler={`#id-${job.job_id}`}>
                      <Card>
                        <CardBody>
                          <button
                            type="button"
                            class="close"
                            id={`id-${job.job_id}`}
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                          <div className="list-card-header">
                            <div>
                              <h3 className="job-post-title">
                                Job Description
                              </h3>
                              <div>
                                <p id="job-info-collapse">
                                  {job.job_title} - {job.city}, {job.state}
                                </p>
                              </div>
                            </div>
                            {/* <div><h4 className="job-post-date">Posted: {moment(job.activation_date * 1000).endOf('day').fromNow()}</h4></div> */}
                          </div>
                          <hr />
                          <div
                            dangerouslySetInnerHTML={this.setInnerHtml(job)}
                          />
                          <hr />
                          <div id="apply-button-container">
                            <ApplyModal
                              onClick={this.clickMe.bind(this, job)}
                              job={job}
                            />
                          </div>
                        </CardBody>
                      </Card>
                    </UncontrolledCollapse>
                  </div>
                );
              })}
            </div>
          </div>
          <style>{`
            h2 {font-size: 1.2rem;}
            h3 {font-size: 1.2rem;}
            p {font-weight: 400; letter-spacing: 1.25px; line-height: 1rem; font-family: Brandon Grotesque Regular;}
            li {font-weight: 400; letter-spacing: 1.25px; line-height: 1.5rem; font-family: Brandon Grotesque Regular; letter}
            div {font-weight: 400; letter-spacing: 1.25px; line-height: 1rem; font-family: Brandon Grotesque Regular}
            span {line-height: 1rem;}

            #internal-hire-title-container {
                min-height: 50vh; min-width: 100%; 
                background-image: url('/static/images/vangst-internal-positions/internal-job-hero.jpg');
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-content: center;
                align-items: center;
            }

            .black-line-h {
                height: 1px;
                width: 175px;
                background-color: black;
                opacity: 0.8;
              }

            #featured-jobs-title {color: gray; font-weight: 400;}
           
                #internal-hire-title {color: white;}

                #featured-jobs-title-container {
                    display: flex; flex-direction: column; justify-content: center; align-items: center; align-content: center; margin: 2rem 0 2rem 0;
                }

                .logo-job-title-header {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    align-content: center;
                    margin: 15px 0 10px 0;
                }

                .logo-title-button-header-container {display: flex; flex-direction: column;}

            #vangst-logo-graphic {width: 50px; height: auto; margin-right: 5px; margin-left: 5px;}
            .logo-container {display: flex; flex-direction: column; justify-content: center; padding-right: 10px;
            }

            .list-card-header {display: flex; flex-direction: row;}
          
            .job-post-title {letter-spacing: 2px; margin-bottom: -5px; font-weight: 600;}
            
            .job-post-location {font-size: 1rem; font-family: Brandon Grotesque Regular Italic; padding:0; margin-bottom: 0;}
            .job-post-date {font-size: 1rem; font-family: Brandon Grotesque Regular Italic; padding-left: 5rem;;}

            .job-post-container {padding: 0.5rem; border-bottom: solid 1px #f5f5f5;}
            
            #internal-hire-list-section {
              width: 100vw;
              height: auto;
            }


            .more-info-button { font-size: 11px; border: 0; background-color: #f0561f; color: white; padding: 0 5px 0 5px; margin:15px 0 5px 0;}
            .more-info-button:hover {text-decoration:none; color:#ffffff; }
            .more-info-button:focus {text-decoration:none; color:#ffffff; outline:none; }

            .searchBar {border: solid 1px #dadada; padding: 5px; width: 350px;}
            #search-bar-container {
              display: flex; flex-direction: row; justify-content: center;            
              padding: 0.5rem;
            }
            #search-results-container {padding: 0 4rem 2rem 4rem;}

            #apply-button-container {display: flex; flex-direction: column; justify-content: center; align-items: center; align-content: center;}

            #job-info-collapse {padding: 5px 0 5px 0; margin: 0;}


            @media (max-width: 420px) {
              #search-results-container {padding: 1rem;}
              h4 {font-size: 0.8rem; }
              h3 {font-size: 1rem;}
              h2 {font-size: 1rem;}
              p {margin-bottom: 3px;}
              .card-body {padding: 0.75rem;}
              .list-card-header {padding-top: 15px;}
              .job-post-date {padding-left: 2.5rem;}
            }
            
            
          `}</style>
        </section>
      );
    } else {
      return (
        <section id="direct-hire-loading-section">
          <h3 id="loading-message" className="text-center">
            Jobs are loading...
          </h3>
          <style>
            {`
              #direct-hire-loading-section {padding: 2rem; height: 100vh; width: 100vw; display: flex; flex-direction: column; justify-content: center; align-items: center;}
              #loading-message {margin-bottom: 7rem;}
            `}
          </style>
        </section>
      );
    }
  }
}

export default InternalList;
