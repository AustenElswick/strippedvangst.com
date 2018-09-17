import React, { Component } from "react";
import Layout from "../components/Layout";
import PageWrapper from "../components/PageWrapper";
import Menu from "../components/Menu";
import Hero from "../components/team-page/hero";
import Headshots from "../components/team-page/headshots";
import Map from "../components/team-page/map";
import ContactUs from "../components/team-page/contactUs";
import Testimony from "../components/team-page/testimony";
import Offices from "../components/team-page/offices";
import Header from "../components/Header";

const url = "https://www.vangst.com/about-vangst-talent";
const title = "About The Vangst Team";
const description =
  "Vangst, the cannabis industry's top staffing agency, has successfully connected over 7,500 professionals with careers in the rapidly emerging cannabis industry.";
const keywords = "mmj, staffing agencies near me, temp agencies near me";

class TeamPage extends Component {
  render() {
    return (
      <Layout>
        <Header
          url={url}
          title={title}
          description={description}
          keywords={keywords}
        />
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
