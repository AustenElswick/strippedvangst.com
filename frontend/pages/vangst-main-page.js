import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import PageWrapper from "../components/PageWrapper.js";
import Menu from "../components/Menu.js";
import Hero from '../components/vangst-main-page.js/Hero';
import { Config } from "../config.js";

class VangstMainPage extends Component {
    render() {
        return (
            <Layout>
                <Menu />
                <Hero />
            </Layout>
        );
    }
}

export default PageWrapper(VangstMainPage);