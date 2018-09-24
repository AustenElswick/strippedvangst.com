import React, { Component } from "react";
import moment from "moment";
import axios from "axios";
import ApplyModal from "./applyModal";
import {
  UncontrolledCollapse,
  Collapse,
  Button,
  CardBody,
  Card
} from "reactstrap";
import Router from "next/router";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: undefined,
      city: undefined,
      job_title: undefined,
      jobs: [],
      store: [],
      isLoading: true,
      jobTitle: "",
      jobUrl: ""
    };
  }
  componentDidMount() {
    axios
      .get("/jobs")
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

  componentDidUpdate (prevProps, prevState) {
    console.log('hi');
  }

  setFilteredJobs(event) {
    const {
      name,
      value
    } = event.target;

    this.setState({ [name]: value.toLowerCase() }, () => {
      const query = {
        city: this.state.city,
        state: this.state.state,
        job_title: this.state.job_title
      }
      const validKeys = Object.keys(query).filter(key => query[key])
      const filteredJobs = this.state.store.filter(job => {
        return validKeys.every(key => {
          return job[key].toLowerCase().includes(this.state[key])
        })
      })
      this.setState({ jobs: filteredJobs })
    })
  }

  clickMe(job) {
    this.setState({ job: job });
  }

  jobPage = job => {
    Router.push({
      pathname: "/job-details",
      query: { id: job.job_id }
    });
  };

  render() {
    if (!this.state.isLoading) {
      return (
        <section id="direct-hire-list-section">
          <div id="search-bar-container" />
          <div className="searchBar-flex">
            <input
              name="state"
              className="searchBar"
              type="text"
              placeholder="Search State"
              onChange={e => this.setFilteredJobs(e)}
            />
            <input
              name="city"
              className="searchBar"
              type="text"
              placeholder="Search City"
              onChange={e => this.setFilteredJobs(e)}
            />
            <input
              name="job_title"
              className="searchBar"
              type="text"
              placeholder="Search Job Title"
              onChange={e => this.setFilteredJobs(e)}
            />
          </div>
          <div id="results-found">
            <p>{this.state.jobs.length} Results Found</p>
          </div>
          <div id="search-results-container">
            {this.state.jobs.map(job => {
              return (
                <div key={job.job_id} className="job-post-container">
                  <div>
                    <h3 className="job-post-title">{job.job_title}</h3>
                    <h4 className="job-post-location">
                      {job.city}, {job.state}
                    </h4>
                  </div>
                  <div>
                    <Button
                      id="more-info-button"
                      className="more-info-button"
                      id={`id-${job.job_id}`}
                      onClick={() => this.jobPage(job)}
                    >
                      More Info >
                    </Button>
                  </div>
                  {/* <UncontrolledCollapse toggler={`#id-${job.job_id}`}>
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
                            <h3 className="job-post-title">Job Description</h3>
                            <div>
                              <p id="job-info-collapse">
                                {job.job_title} - {job.city}, {job.state}
                              </p>
                            </div>
                          </div>
                          {/* <div>
                        <h4 className="job-post-date">Posted: {moment(job.activation_date * 1000).endOf('day').fromNow()}</h4>
                      </div> */}
                  {/* </div>
                        <hr />
                        <div dangerouslySetInnerHTML={this.setInnerHtml(job)} />
                        <hr />
                        <div id="apply-button-container">
                          <ApplyModal
                            onClick={this.clickMe.bind(this, job)}
                            job={job}
                          />
                        </div>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse> */}
                </div>
              );
            })}
          </div>
          <style>{`

            .searchBar-flex {margin: 2rem 2rem 0.5rem 2rem; display: flex; flex-direction: row; flex-wrap: wrap; justify-content: center; align-content: center; align-items: center; max-width: 100vw;}
            .searchBar {border: solid 1px #dadada; padding: 5px; margin: 0.25rem;}
            #results-found {margin-left: 4.5rem;}

            h2 {font-size: 1.2rem;}
            h3 {font-size: 1.2rem;}
            p {font-weight: 400; letter-spacing: 1.25px; line-height: 1rem; font-family: Brandon Grotesque Regular;}
            li {font-weight: 400; letter-spacing: 1.25px; line-height: 1.5rem; font-family: Brandon Grotesque Regular; letter}
            div {font-weight: 400; letter-spacing: 1.25px; line-height: 1rem; font-family: Brandon Grotesque Regular}
            span {line-height: 1rem;}

            .apply-button {background-color: #f0561f; font-family: Brandon Grotesque Regular; padding: 3px 10px 3px 10px}
            .apply-button:focus {background-color: #f0561f; }

            .list-card-header {display: flex; flex-direction: row;}

            .job-post-title {letter-spacing: 2px; margin-bottom: -5px; font-weight: 600;}

            .job-post-location {font-size: 1rem; font-family: Brandon Grotesque Regular Italic; padding:0; margin: 5px 0 0 0;}
            .job-post-date {font-size: 1rem; font-family: Brandon Grotesque Regular Italic; padding-left: 5rem;;}

            .job-post-container {padding: 0.5rem; border-bottom: solid 1px #f5f5f5;}

            #direct-hire-list-section {
              width: 100vw;
              min-height: 100vh;
            }
            .more-info-button { font-size: 11px; border: 0; background-color: #f0561f; color: white; margin:5px 0 5px 0; !important;}
            .more-info-button:hover {text-decoration:none; color:#ffffff; }
            .more-info-button:focus {text-decoration:none; color:#ffffff; outline:none; }
            .searchBar-flex {display: flex; justify-content: center;}


            #search-bar-container {
              display: flex; flex-direction: row; justify-content: center;
              background-image: url('/static/images/employer-page/sec_01/orange-background.jpg');
              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;
              height: 5rem;
            }
            #search-results-container {padding: 0 4rem 4rem 4rem;}

            #job-info-collapse {padding: 5px 0 5px 0; margin: 0;}

            @media (max-width: 420px) {
              #search-results-container {padding: 1rem;}
              #results-found {margin-left: 1.5rem;}
              .searchBar-flex {margin: 1rem;}
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
          <h3 className="text-center" id="loading-message">
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

export default List;
