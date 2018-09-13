import React, { Component } from 'react';
import Layout from '../components/Layout';
import PageWrapper from '../components/PageWrapper';
import Menu from '../components/Menu';
import Hero from '../components/team-page/hero';
import Headshots from '../components/team-page/headshots';
import Map from '../components/team-page/map';
import ContactUs from '../components/team-page/contactUs';
import Testimony from '../components/team-page/testimony';
import Offices from '../components/team-page/offices';
import Header from '../components/Header';

class TeamPage extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Menu />
        <Hero />
        <Headshots />
        <Map />
        <Offices />
        <Testimony />
        <ContactUs />
      </Layout>
    );
  }
}

export default PageWrapper(TeamPage);
