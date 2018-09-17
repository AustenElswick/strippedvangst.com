import React, { Component } from "react";
import Menu from "../components/Menu";
import Hero from "../components/cannabis-employers/hero";
import CandidateDataBase from "../components/cannabis-employers/candidateDataBase";
import BestRecruiters from "../components/cannabis-employers/bestRecruiters";
import GuaranteePlaced from "../components/cannabis-employers/guaranteePlaced";
import TestimonyCarousel from "../components/cannabis-employers/testimonyCarousel";
import Companies from "../components/cannabis-employers/companies";
import EmailForm from "../components/cannabis-employers/emailForm";
import ContactSales from "../components/cannabis-employers/contactSales";
import Layout from "../components/Layout";
import PageWrapper from "../components/PageWrapper";
import Header from "../components/Header";

const url = "https://vangst.com/cannabis-employers";
const title = "Employers | Hire Cannabis Professionals";
const description =
  "Vangst Cannabis Staffing has successfully connected over 7,500 cannabis professionals with high level cannabis careers in the rapidly emerging mmj industry.";
const keywords =
  "mmj, staffing agencies near me, temp agencies near me, job agency, staffing companies";

class EmployerPage extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header
            url={url}
            title={title}
            description={description}
            keywords={keywords}
          />
          <Menu />
          <Hero />
          <ContactSales />
          <CandidateDataBase />
          <BestRecruiters />
          <GuaranteePlaced />
          <EmailForm />
          <TestimonyCarousel />
          <Companies />
        </Layout>
      </div>
    );
  }
}

export default PageWrapper(EmployerPage);
