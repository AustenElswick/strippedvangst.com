import React, { Component } from 'react';
import Layout from '../components/Layout';
import Menu from '../components/Menu';
import PageWrapper from '../components/PageWrapper';
import Hero from '../components/career-fair/hero';
import Stats from '../components/career-fair/stats';
import UpcomingFair from '../components/career-fair/upcomingFair';
import PastEvents from '../components/career-fair/pastEvents';
import FutureCareerFairs from '../components/career-fair/futureCareerFairs';
import HiringCompanies from '../components/career-fair/hiringCompanies';

class CareerFair extends Component {
  render() {
    return (
      <Layout>
        <Menu />
        <Hero />
        <Stats />
        <UpcomingFair />
        <PastEvents />
        <FutureCareerFairs />
        <HiringCompanies />
      </Layout>
    );
  }
}

export default PageWrapper(CareerFair);
