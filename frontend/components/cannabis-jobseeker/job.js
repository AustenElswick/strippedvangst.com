import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap';
import ApplyModal from './applyModal';
import Axios from 'axios';

class Job extends Component {
  
  constructor() {
    super()
    this.state = {
      job: [],
      statusMessage: 'Job is loading...'
    }
  }

  async componentDidMount() {
    const res = await Axios('/jobs')
    await this.getResponse(res)
  }

  getResponse = (res) => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const singleJob = res.data.data.filter(item => {
      if(item.id == id) {
        return (item.id == id)
      } else {
        this.setState({ statusMessage: 'Job has been taken down.' })
      }
    })
    this.setState({ job: singleJob })
  }

  setInnerHtml = job => {
    return { __html: job.job_description };
  };

  render() {
    console.log(this.state.job)
    if(this.state.job[0]) {
    return (
      <section>
        <div className="job-post-container">
          <div>
          </div>
            <Card>
              <CardBody>
                <div className="list-card-header">
                  <div>
                    <h3 className="job-post-title">Job Description</h3>
                    <div>
                      <p id="job-info-collapse">
                        {this.state.job[0].job_title} - {this.state.job[0].city}, {this.state.job[0].state}
                      </p>
                    </div>
                  </div> 
                  {/* <div>
                <h4 className="job-post-date">Posted: {moment(job.activation_date * 1000).endOf('day').fromNow()}</h4>
              </div> */}
          </div>
                <hr />
                <div dangerouslySetInnerHTML={this.setInnerHtml(this.state.job[0])} />
                <hr />
                <div id="apply-button-container">
                  <ApplyModal
                    job={this.state.job[0]}
                  />
                </div>
              </CardBody>
            </Card>
        </div>
        <style>
          {`
          .list-card-header {display: flex; flex-direction: row;}
          .job-post-title {letter-spacing: 2px; margin-bottom: -5px; font-weight: 600;}
          #job-info-collapse {padding: 5px 0 5px 0; margin: 0;}
           h2 {font-size: 1.2rem;}
          h3 {font-size: 1.2rem;}
          p {font-weight: 400; letter-spacing: 1.25px; line-height: 1rem; font-family: Brandon Grotesque Regular;}
          li {font-weight: 400; letter-spacing: 1.25px; line-height: 1.5rem; font-family: Brandon Grotesque Regular; letter}
          div {font-weight: 400; letter-spacing: 1.25px; line-height: 1rem; font-family: Brandon Grotesque Regular}
          span {line-height: 1rem;}
          `}
        </style>
      </section>
    );
  }
  else {
    return (
      <h3>{this.state.statusMessage}</h3>
    )
  }
  }
}

export default Job;
