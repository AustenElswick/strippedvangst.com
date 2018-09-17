import React, { Component } from "react";
import moment from "moment";
import axios from "axios";
import {
  UncontrolledCollapse,
  Collapse,
  Button,
  CardBody,
  Card
} from "reactstrap";

class mailerJobsList extends Component {
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

  clickMe(job) {
    this.setState({ job: job });
  }

  render() {
    if (!this.state.isLoading) {
      return (
        <section id="direct-hire-list-section">
          <table>
            <tr>
              <th>Job Title</th>
              <th>Location</th>
              <th>Pay Range</th>
              <th>Business</th>
              <th>Job URL</th>
              <th>Recruiter Email</th>
              <th>Job Description</th>
            </tr>
            {this.state.jobs.map(job => {
              return (
                <tr>
                  <td>{job.job_title}</td>
                  <td>
                    {job.city}, {job.state}
                  </td>
                  <td>{job.job_pay_range}</td>
                  <td>{job.business_name}</td>
                  <td>{job.job_url}</td>
                  <td>{job.recruiter_email}</td>
                  <td>
                    <div dangerouslySetInnerHTML={this.setInnerHtml(job)} />
                  </td>
                </tr>
              );
            })}
          </table>
          <style>{`

            td {border: 1px solid black;}
            th {border: 1px solid black;}

           
         
            
            #direct-hire-list-section {
              width: 100vw;
              height: auto;
              padding: 2rem;
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

export default mailerJobsList;
