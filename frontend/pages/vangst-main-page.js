import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import PageWrapper from "../components/PageWrapper.js";
import Menu from "../components/Menu.js";
import Hero from '../components/vangst-main-page.js/Hero';
import VangstIsDope from '../components/vangst-main-page.js/VangstIsDope';
import JobReport from '../components/vangst-main-page.js/JobReport';
import Gigs from '../components/vangst-main-page.js/Gigs';
import News from '../components/vangst-main-page.js/News';
import Events from '../components/vangst-main-page.js/Events';
import VangstTalent from '../components/vangst-main-page.js/VangstTalent';
import { Config } from "../config.js";


class VangstMainPage extends Component {
    render() {
        return (
            <Layout>
                <Menu />
                <Hero />
                <VangstIsDope />
                <JobReport />
                <Gigs />
                <News />
                <Events />
                <VangstTalent />
            </Layout>
        );
    }
}

export default PageWrapper(VangstMainPage);