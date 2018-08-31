import React, { Component } from 'react';
import Layout from '../components/Layout';
import PageWrapper from '../components/PageWrapper';
import Menu from '../components/Menu';
import Hero from '../components/work-for-vangst-page/hero';
import FeaturedJobs from '../components/work-for-vangst-page/featuredJobs';
import VangstTalent from '../components/vangst-main-page.js/VangstTalent';

class WorkForVangst extends Component {
  render() {
    return (
      <Layout>
        <Menu />
        <Hero />
        <FeaturedJobs />
        <VangstTalent />
      </Layout>
    );
  }
}

export default PageWrapper(WorkForVangst);
