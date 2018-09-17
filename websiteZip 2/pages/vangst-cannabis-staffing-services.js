import React, { Component } from "react";
import PageWrapper from "../components/PageWrapper";
import Layout from "../components/Layout";
import Menu from "../components/Menu";
import Hero from "../components/candidate-page/hero";
import FeaturedJobs from "../components/candidate-page/featuredJobs";
import SeeGigs from "../components/candidate-page/seeGigs";
import GigsDetails from "../components/candidate-page/gigsDetails";
import CreateAccount from "../components/candidate-page/createAccount";
import Header from "../components/Header";

const url = "https://www.vangst.com/vangst-cannabis-staffing-services";
const title = "Direct Hire and Temporary Staffing Services";
const description =
  "We are the only staffing agency dedicated to the cannabis industry. We offer direct hire, contract to hire and temporary staffing, based on our clients specific needs.";
const keywords = "temp staffing, budtender, weed jobs, trimmers";

class CandidatePage extends Component {
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
        <FeaturedJobs />
        <SeeGigs />
        <GigsDetails />
        <CreateAccount />
      </Layout>
    );
  }
}

export default PageWrapper(CandidatePage);
