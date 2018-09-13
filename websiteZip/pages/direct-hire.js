import React, { Component } from 'react';
import Layout from '../components/Layout';
import PageWrapper from '../components/PageWrapper';
import Menu from '../components/Menu';
import List from '../components/direct-hire/list';
import Header from '../components/Header';

class DirectHire extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Menu />
        <List />
      </Layout>
    );
  }
}

export default PageWrapper(DirectHire);
