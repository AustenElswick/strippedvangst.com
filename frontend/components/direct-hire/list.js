import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import { UncontrolledCollapse, Collapse, Button, CardBody, Card } from 'reactstrap';

class List extends Component {

  constructor(props) {
    super(props)
    this.state = {
      jobs: [],
      store: [],
      isLoading: true,
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

  render() {
    console.log(this.state.job)
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
                <div></div>
                <Button className="btn btn-link more-info-button" id={`id-${job.job_id}`} style={{ marginBottom: '1rem' }}>
                  More Info >
                </Button>
                <UncontrolledCollapse toggler={`#id-${job.job_id}`}>
                  <Card>
                    <CardBody>
                      <div dangerouslySetInnerHTML={this.setInnerHtml(job)}></div>
                      <li>{job.job_pay_range}</li>
                      <li>{job.state}</li>
                      <li>{job.city}</li>
                      <li>{job.company_email}</li>
                      <li>Posted: {moment(job.activation_date * 1000).endOf('day').fromNow()}</li>
                    </CardBody>
                  </Card>
                </UncontrolledCollapse>
                
              </div>)}
            )}
          </div>
          <style>{`
            h2 {font-size: 1.4rem;}
            .job-post-title {letter-spacing: 1px; margin-bottom: -5px;}
            .job-post-location {font-size: 1.25rem; font-family: Brandon Grotesque Regular Italic; padding:0;}
            #direct-hire-list-section {
              width: 100vw;
              height: auto;
            }
            .more-info-button {border: 0; background-color: white; color: orange; margin: 0 !important; padding: 0;}
            .searchBar {border: solid 1px #dadada; padding: 5px; width: 350px;}
            #search-bar-container {
              display: flex; flex-direction: row; justify-content: center;
              background-image: url('/static/images/employer-page/sec_01/orange-background.jpg');
              background-position: center;
              background-repeat: no-repeat;
              background-size: cover;
              padding: 2rem;
            }
            #search-results-container {padding: 4rem;}
            .job-post-container {padding: 1rem 0 1rem 0; border-bottom: solid 1px #dadada;}
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