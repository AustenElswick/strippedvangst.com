import React, { Component } from 'react';
import Menu from '../components/Menu';
import Hero from '../components/employer-page/hero';
import CandidateDataBase from '../components/employer-page/candidateDataBase';
import BestRecruiters from '../components/employer-page/bestRecruiters';
import GuaranteePlaced from '../components/employer-page/guaranteePlaced';
import TestimonyCarousel from '../components/employer-page/testimonyCarousel';
import Companies from '../components/employer-page/companies';
import EmailForm from '../components/employer-page/emailForm';
import ContactSales from '../components/employer-page/contactSales';
import Layout from '../components/Layout';
import PageWrapper from '../components/PageWrapper';
import Header from '../components/Header';

class EmployerPage extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header />
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
