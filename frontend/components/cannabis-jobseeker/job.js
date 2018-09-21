import React, { Component } from "react";
import { Card, CardBody } from "reactstrap";
import ApplyModal from "./applyModal";
import Axios from "axios";

class Job extends Component {
  constructor() {
    super();
    this.state = {
      job: [],
      statusMessage: "Job is loading..."
    };
  }

  async componentDidMount() {
    const res = await Axios("/jobs");
    await this.getResponse(res);
  }

  getResponse = res => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    const singleJob = res.data.data.filter(item => {
      if (item.id == id) {
        return item.id == id;
      } else {
        this.setState({
          statusMessage: "This position is no longer available."
        });
      }
    });
    this.setState({ job: singleJob });
  };

  setInnerHtml = job => {
    return { __html: job.job_description };
  };

  render() {
    console.log(this.state.job);
    if (this.state.job[0]) {
      return (
        <section id="job-section">
          <div className="job-post-container">
            <div />
            <Card>
              <CardBody>
                <div className="list-card-header">
                  <div>
                    <h3 className="job-post-title">
                      {this.state.job[0].job_title}
                    </h3>
                    <div>
                      <p id="job-info-collapse">
                        {this.state.job[0].city}, {this.state.job[0].state}
                      </p>
                    </div>
                  </div>
                  {/* <div>
                <h4 className="job-post-date">Posted: {moment(job.activation_date * 1000).endOf('day').fromNow()}</h4>
              </div> */}
                </div>
                <hr />
                <div
                  dangerouslySetInnerHTML={this.setInnerHtml(this.state.job[0])}
                />
                <hr />
                <div id="apply-button-container">
                  <ApplyModal job={this.state.job[0]} />
                </div>
              </CardBody>
            </Card>
          </div>
          <style>
            {`
            #job-section {min-height: 100vh; min-width: 100vw; padding: 1rem;}
            .list-card-header {display: flex; flex-direction: row;}
            .job-post-title {letter-spacing: 2px; margin-bottom: -5px; font-weight: 600;}
            #job-info-collapse {padding: 5px 0 5px 0; margin: 0;}
            h2 {font-size: 1.2rem;}
            h3 {font-size: 1.2rem;}
            p {font-weight: 400; letter-spacing: 1.25px; line-height: 1.25rem; font-family: Brandon Grotesque Regular;}
            li {font-weight: 400; letter-spacing: 1.25px; line-height: 1.5rem; font-family: Brandon Grotesque Regular; letter}
            div {font-weight: 400; letter-spacing: 1.25px; line-height: 1rem; font-family: Brandon Grotesque Regular}
            span {line-height: 1rem;}
            #apply-button-container {
              display: flex; flex-direction: row; justify-content: center;
            }

            @media(max-width: 380px) {
              #job-section {padding: 0.25rem;}
            }
            `}
          </style>
        </section>
      );
    } else {
      return (
        <section id="job-section">
          <h3>{this.state.statusMessage}</h3>
          <style>
            {`
            #job-section {min-height: 100vh; min-width: 100vw; display: flex; flex-direction: column; justify-content: center; align-content: center; align-items: center;}
            `}
          </style>
        </section>
      );
    }
  }
}

export default Job;
