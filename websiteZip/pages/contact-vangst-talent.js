import React, { Component } from 'react';
import Layout from '../components/Layout';
import PageWrapper from '../components/PageWrapper';
import ContactInfo from '../components/contact-page/contactInfo';
import Menu from '../components/Menu';
import Header from '../components/Header';

class ContactVangstTalent extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Menu />
        <ContactInfo />
      </Layout>
    );
  }
}

export default PageWrapper(ContactVangstTalent);
