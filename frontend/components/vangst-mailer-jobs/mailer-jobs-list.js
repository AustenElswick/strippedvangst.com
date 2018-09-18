import React, { Component } from "react";
import axios from "axios";

class mailerJobsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      isLoading: true
    };
  }
  componentDidMount() {
    axios
      .get("/all-jobs")
      .then(json => {
        return json.data.data.map(job => ({
          job_title: job.job_title,
          city: job.city,
          state: job.state,
          job_url: job.job_url,
          job_pay_range: job.pay_range,
          business_name: job.business,
          recruiter_email: job.recruiter_email
        }));
      })
      .then(newData =>
        this.setState({
          jobs: newData,
          isLoading: false
        })
      )
      .catch(error => alert(error));
  }

  render() {
    if (!this.state.isLoading) {
      return (
        <section id="direct-hire-list-section">
          <p>
            Note: Positions are ordered with most recent open date at the top of
            the table.
          </p>
          <table>
            <tr>
              <th className="text-center">Job Title</th>
              <th className="text-center">Location</th>
              <th className="text-center">Pay Range</th>
              <th className="text-center">Business</th>
              <th className="text-center">Recruiter Email</th>
              <th className="text-center">Job URL</th>
            </tr>
            {this.state.jobs.map(job => {
              return (
                <tr>
                  <td className="text-center">{job.job_title}</td>
                  <td className="text-center">
                    {job.city}, {job.state}
                  </td>
                  <td className="text-center">{job.job_pay_range}</td>
                  <td className="text-center">{job.business_name}</td>
                  <td className="text-center">{job.recruiter_email}</td>
                  <td className="text-center">
                    <a href={job.job_url} target="_blank">
                      {job.job_url}
                    </a>
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
