import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import ApplyModal from './applyModal'
import { UncontrolledCollapse, Collapse, Button, CardBody, Card } from 'reactstrap';

class List extends Component {

  constructor(props) {
    super(props)
    this.state = {
      jobs: [],
      store: [],
      isLoading: true,
      jobTitle: '',
      jobUrl: ''
    }
  }
  componentDidMount() {
    axios.get('http://54.185.129.161/jobs')
      .then(json => {
        return json.data.data.map(job => ({
        job_id: job.id,
       business_name: job.business,
       job_title: job.job_title,
       job_description: job.job_description,
       job_pay_range: job.pay_range,
       state: job.state,
       city: job.city,
       company_email: job.company_email,
       external_job_id: job.external_job_id,
       activation_date: job.activation_date
     }))})
      .then(newData => this.setState({
        jobs: newData,
        store: newData,
        isLoading: false,
      }))
      .catch(error => alert(error))
  }

  setInnerHtml = (job) => {
    return {__html: job.job_description}
  }

  getFilteredJobs(e) {
    const filteredJobs = this.state.store.filter(item => (
      item.state.toLowerCase().includes(e.target.value.toLowerCase())
      ||
      item.city.toLowerCase().includes(e.target.value.toLowerCase())
      ||
      item.job_title.toLowerCase().includes(e.target.value.toLowerCase())
      ||
      item.business_name.toLowerCase().includes(e.target.value.toLowerCase())
    ))
    this.setState({
      jobs: filteredJobs,
    })
  };

  clickMe(job){
    if(job.job_url) {
      this.setState({ jobTitle: job.job_title, jobUrl: job.job_url })
    } else {
      this.setState({ jobTitle: job.job_title, jobUrl: job.job_id })
    }
  }

  render() {
    if(!this.state.isLoading){
      return (
        <section id="direct-hire-list-section">
          <div id="search-bar-container">
            <input className="searchBar" type="text" placeholder="Search jobs" onChange={(e) => this.getFilteredJobs(e)} />
          </div>
          <div id="search-results-container">
            {this.state.jobs.map(job => {
              return (
              <div key={job.job_id} className="job-post-container">
                <h3 className="job-post-title">{job.job_title}</h3>
                <h4 className="job-post-location">{job.city}, {job.state}</h4>
                <Button id="more-info-button" className="more-info-button" id={`id-${job.job_id}`} style={{ marginBottom: '1rem' }}>
                  More Info >
                </Button>
                <UncontrolledCollapse toggler={`#id-${job.job_id}`}>
                  <Card>
                    <CardBody>
                    <Button className="more-info-button text-center" color="link" id={`id-${job.job_id}`} style={{ marginBottom: '1rem' }}>
                      <p>Close</p>
                    </Button>
                    <div className="list-card-header">
                      <div>
                        <h3 className="job-post-title">{job.job_title}</h3>
                        <h4 className="job-post-location">{job.city}, {job.state}</h4>
                      </div>
                      <div>
                        <h4 className="job-post-date">Posted: {moment(job.activation_date * 1000).endOf('day').fromNow()}</h4>
                      </div>
                    </div>
                    <hr></hr>
                    <div dangerouslySetInnerHTML={this.setInnerHtml(job)}></div>
                    <ApplyModal onClick={this.clickMe.bind(this, job)} jobTitle={this.state.jobTitle} jobUrl={this.state.jobUrl} />
                    </CardBody>
                  </Card>
                </UncontrolledCollapse>
              </div>)}
            )}
          </div>
          <style>{`
            h2 {font-size: 1.2rem;}
            h3 {font-size: 1.2rem;}
            p {font-weight: 400; letter-spacing: 1.25px; line-height: 1rem; font-family: Brandon Grotesque Regular;}
            li {font-weight: 400; letter-spacing: 1.25px; line-height: 1.5rem; font-family: Brandon Grotesque Regular; letter}
            div {font-weight: 400; letter-spacing: 1.25px; line-height: 1rem; font-family: Brandon Grotesque Regular}
            span {line-height: 1rem;}

            .apply-button {background-color: #f0561f; font-family: Brandon Grotesque Regular; padding: 3px 10px 3px 10px}
            .apply-button:focus {background-color: #f0561f; } 

            .list-card-header {display: flex; flex-direction: row;}
          
            .job-post-title {letter-spacing: 1px; margin-bottom: -5px; font-weight: 700;}
            
            .job-post-location {font-size: 1rem; font-family: Brandon Grotesque Regular Italic; padding:0;}
            .job-post-date {font-size: 1rem; font-family: Brandon Grotesque Regular Italic; padding-left: 5rem;;}

            .job-post-container {padding: 0.3rem 0 0 0; border-bottom: solid 1px #f5f5f5;}
            
            #direct-hire-list-section {
              width: 100vw;
              height: auto;
            }
            .more-info-button { font-size: 11px; border: 0; background-color: white; color: #f0561f; margin: 0 !important; padding: 0 3px 0 3px;}
            .more-info-button:hover {text-decoration:none; color:#ffffff; }
            .more-info-button:focus {text-decoration:none; color:#ffffff; }

            .searchBar {border: solid 1px #dadada; padding: 5px; width: 350px;}
            #search-bar-container {
              display: flex; flex-direction: row; justify-content: center;
              background-image: url('/static/images/employer-page/sec_01/orange-background.jpg');
              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;
              padding: 0.5rem;
            }
            #search-results-container {padding: 4rem;}

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
          <h3 id="loading-message">Jobs are loading...</h3>
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