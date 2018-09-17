import React, { Component } from "react";
import Layout from "../components/Layout";
import PageWrapper from "../components/PageWrapper";
import Menu from "../components/Menu";
import InternalList from "../components/vangst-internal-positions/InternalList";
import Header from "../components/Header";

const url = "https://www.vangst.com/vangst-internal-positions";
const title = "Work For Vangst";
const description =
  "Apply here to work for the cannabis industry's top staffing agency.";
const keywords = "cannabis jobs";

class WorkForVangst extends Component {
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
        <InternalList />
      </Layout>
    );
  }
}

export default PageWrapper(WorkForVangst);
