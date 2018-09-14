import React, { Component } from "react";
import Layout from "../components/Layout";
import PageWrapper from "../components/PageWrapper";
import ContactInfo from "../components/contact-page/contactInfo";
import Menu from "../components/Menu";
import Header from "../components/Header";

const url = "https://www.vangst.com/contact-vangst-talent";
const title = "Contact Vangst";
const description =
  "Contact Vangst Talent with any cannabis related question. Our cannabis staffing team is happy to help you land a dream job in the marijuana industry.";
const keywords = "vangst, staffing agency, vangst talent";

class ContactVangstTalent extends Component {
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
        <ContactInfo />
      </Layout>
    );
  }
}

export default PageWrapper(ContactVangstTalent);
