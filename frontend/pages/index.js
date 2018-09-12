import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper.js";
import VangstMainPage from "./vangst-main-page";
import { Config } from "../config.js";
import Router from "next/router";

class Index extends Component {
  render() {
    return <div />;
  }
}

export default PageWrapper(Index);
