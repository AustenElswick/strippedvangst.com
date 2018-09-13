import React, { Component } from "react";
import Layout from "../components/Layout";
import PageWrapper from "../components/PageWrapper";
import Menu from "../components/Menu";
import InternalList from "../components/vangst-internal-positions/InternalList";
import Header from '../components/Header';

class WorkForVangst extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Menu />
        <InternalList />
      </Layout>
    );
  }
}

export default PageWrapper(WorkForVangst);
