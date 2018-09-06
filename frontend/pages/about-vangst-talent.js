import React, { Component } from 'react';
import Layout from '../components/Layout';
import PageWrapper from '../components/PageWrapper';
import Menu from '../components/Menu';
import Hero from '../components/team-page/hero';
import HeadlineAndDescription from '../components/team-page/headlineAndDescription';
import TeamPictures from '../components/team-page/teamPictures';
import Map from '../components/team-page/map';
import ContactUs from '../components/team-page/contactUs';
import Testimony from '../components/team-page/testimony';
import Offices from '../components/team-page/offices';

class TeamPage extends Component {
  render() {
    return (
      <Layout>
        <Menu />
        <Hero />
        <HeadlineAndDescription />
        <TeamPictures />
        <Map />
        <Offices />
        <Testimony />
        <ContactUs />
      </Layout>
    );
  }
}

export default PageWrapper(TeamPage);
