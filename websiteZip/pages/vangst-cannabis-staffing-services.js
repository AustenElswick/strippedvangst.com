import React, { Component } from 'react';
import PageWrapper from '../components/PageWrapper';
import Layout from '../components/Layout';
import Menu from '../components/Menu';
import Hero from '../components/candidate-page/hero';
import FeaturedJobs from '../components/candidate-page/featuredJobs';
import SeeGigs from '../components/candidate-page/seeGigs';
import GigsDetails from '../components/candidate-page/gigsDetails';
import CreateAccount from '../components/candidate-page/createAccount';
import Header from '../components/Header';

class CandidatePage extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Menu />
        <Hero />
        <FeaturedJobs />
        <SeeGigs />
        <GigsDetails />
        <CreateAccount />
      </Layout>
    );
  }
}

export default PageWrapper(CandidatePage);
