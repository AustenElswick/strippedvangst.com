import React, { Component } from "react";
import Layout from "../components/Layout";
import PageWrapper from "../components/PageWrapper";
import Menu from "../components/Menu";
import InternalList from "../components/vangst-internal-positions/InternalList";

class WorkForVangst extends Component {
  render() {
    return (
      <Layout>
        <Menu />
        <InternalList />
      </Layout>
    );
  }
}

export default PageWrapper(WorkForVangst);
