import React, { Component } from "react";
import Layout from "../components/Layout";
import PageWrapper from "../components/PageWrapper";
import Menu from "../components/Menu";
import List from "../components/cannabis-jobseeker/list";
import Header from "../components/Header";

const url = "https://vangst.com/cannabis-jobseeker";
const title = "Vangst Job Seekers";
const description = "Vangst Cannabis Staffing's direct hire positions.";
const keywords =
  "mmj, marijuana horticulture, dispensary jobs, Weed Jobs, cannabis job";

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
