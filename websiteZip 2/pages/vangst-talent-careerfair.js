import React, { Component } from "react";
import Layout from "../components/Layout";
import Menu from "../components/Menu";
import PageWrapper from "../components/PageWrapper";
import Hero from "../components/career-fair/hero";
import Stats from "../components/career-fair/stats";
import UpcomingFair from "../components/career-fair/upcomingFair";
import PastEvents from "../components/career-fair/pastEvents";
import FutureCareerFairs from "../components/career-fair/futureCareerFairs";
import Companies from "../components/cannabis-employers/companies";
import Header from "../components/Header";

const url = "https://vangst.com/vangst-talent-careerfair";
const title = "Vangst Cannabis Career Fairs";
const description =
  "Vangst Cannabis Staffing and Vangsters.com hosts cannabis job fairs in Denver, Las Vegas, Las Angeles, New York, and more to come as the weed industry grows.";
const keywords = "job fair denver, cannabis jobs, job fairs near me, 420 jobs";

class CareerFair extends Component {
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
        <Stats />
        <UpcomingFair />
        <PastEvents />
        <FutureCareerFairs />
        <Companies />
      </Layout>
    );
  }
}

export default PageWrapper(CareerFair);
