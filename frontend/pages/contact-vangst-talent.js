import React, { Component } from 'react';
import Layout from '../components/Layout';
import PageWrapper from '../components/PageWrapper';
import Contact from '../components/contact-page/contact';
import ContactInfo from '../components/contact-page/contactInfo';
import Menu from '../components/Menu';

class ContactVangstTalent extends Component {
  render() {
    return (
      <Layout>
        <Menu />
        <Contact />
        <ContactInfo />
      </Layout>
    );
  }
}

export default PageWrapper(ContactVangstTalent);
