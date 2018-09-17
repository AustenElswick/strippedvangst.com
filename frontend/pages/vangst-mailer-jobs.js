import React, { Component } from "react";
import Layout from "../components/Layout";
import PageWrapper from "../components/PageWrapper";
import Menu from "../components/Menu";
import List from "../components/vangst-mailer-jobs/mailer-jobs-list";
import Header from "../components/Header";

const url = "https://vangst.com/vangst-mailer-jobs";
const title = "Vangst | Mailer Jobs";
const description = "";
const keywords = "";

class DirectHire extends Component {
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
        <List />
      </Layout>
    );
  }
}

export default PageWrapper(DirectHire);
