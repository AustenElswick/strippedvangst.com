import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import PageWrapper from "../components/PageWrapper.js";
import Menu from "../components/Menu.js";
import Hero from "../components/vangst-main-page.js/Hero";
import VangstIsDope from "../components/vangst-main-page.js/VangstIsDope";
import JobReport from "../components/vangst-main-page.js/JobReport";
import Gigs from "../components/vangst-main-page.js/Gigs";
import News from "../components/vangst-main-page.js/News";
import VangstTalent from "../components/vangst-main-page.js/VangstTalent";
import Header from "../components/Header";

const url = "https://vangst.com/";
const title = "Vangst | The Cannabis Industry's Top Staffing Agency";
const description =
  "Vangst is the cannabis industry's top staffing agency. Contact us for all of your marijuana staffing needs for the mmj staffing business.";
const keywords =
  "mmj, staffing agencies near me, cannabis job, staffing agency, cannabis staffing";

class VangstMainPage extends Component {
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
        <VangstIsDope />
        <JobReport />
        <Gigs />
        <News />
        <VangstTalent />
      </Layout>
    );
  }
}

export default PageWrapper(VangstMainPage);
