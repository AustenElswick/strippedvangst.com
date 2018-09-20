import React, { Component } from "react";
import Layout from "../components/Layout";
import PageWrapper from "../components/PageWrapper";
import Menu from "../components/Menu";
import Header from "../components/Header";
import PressList from "../components/vangst-press/PressList";

const url = "https://vangst.com/vangst-press";
const title = "Vangst In The News";
const description =
  "Vangst's latest press coverage. Take a look at why Vangst is the number one cannabis staffing agency in the United States and why you want us to fill your positions.";
const keywords = "cannabis news, weed news";

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
        <PressList />
      </Layout>
    );
  }
}

export default PageWrapper(DirectHire);
