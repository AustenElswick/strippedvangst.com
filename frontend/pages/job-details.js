import React, { Component } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Job from '../components/cannabis-jobseeker/job';
import PageWrapper from '../components/PageWrapper';

const url = "https://vangst.com/job-details";
const title = "Vangst Job Seekers";
const description =
  "Vangst Cannabis Staffing's direct hire position";
const keywords =
  "mmj, staffing agencies near me, cannabis job, staffing agency, cannabis staffing";

class JobDetails extends Component {
  render() {
    return (
      <Layout>
        <Header 
          url={url}
          title={title}
          description={description}
          keywords={keywords} />
        <Menu />
        <Job id={this.props.url.query.id} />
      </Layout>
    );
  }
}

export default PageWrapper(JobDetails);
