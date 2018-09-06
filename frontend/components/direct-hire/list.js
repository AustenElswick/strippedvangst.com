import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';

class List extends Component {

  constructor(props) {
    super(props)
    this.state = {
      jobs: [],
      store: [],
      isLoading: true,
    }
  }

  // componentDidMount() {
  //   axios.get('https://vangsters.com/api/v1/companies/job-postings')
  //     .then(json => console.log(json)//json.data.data.map(job => ({
  //       // job_id: job.id,
  //       // business_name: job.business,
  //       // job_title: job.job_title,
  //       // job_description: job.job_description,
  //       // job_pay_range: job.pay_range,
  //       // state: job.state,
  //       // city: job.city,
  //       // company_email: job.company_email,
  //       // external_job_id: job.external_job_id,
  //       // activation_date: job.activation_date
  // //})))
  //     // .then(newData => this.setState({
  //     //   jobs: newData,
  //     //   store: newData,
  //     //   isLoading: false,
  //     // }))
  //     // .catch(error => alert(error))
  // }

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
    if(!this.state.isLoading){
      return (
        <section>
          <input className="searchBar" type="text" placeholder="search jobs" onChange={(e) => this.getFilteredJobs(e)} />
          <ul>
            {this.state.jobs.map(job =>
              <div key={job.job_id}>
                <h1>{job.job_title}</h1>
                <li>{job.business_name}</li>
                <div>{job.job_description}</div>
                <li>{job.job_pay_range}</li>
                <li>{job.state}</li>
                <li>{job.city}</li>
                <li>{job.company_email}</li>
                <li>{job.external_job_id}</li>
                <li>Posted: {moment(job.activation_date * 1000).endOf('day').fromNow()}</li>
              </div>)}
          </ul>
        </section>
      );
    } else {
      return (
        <section>
          <h3>Jobs are loading</h3>
        </section>
      );
    }
  }
}

export default List;
