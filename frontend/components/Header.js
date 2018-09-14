import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import { Config } from "../config.js";
import stylesheet from "../src/styles/style.scss";

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    // Rich Social Snippets data
    const data = {
      "@context": "http://schema.org",
      "@type": "Organization",
      name: "Vangst",
      url: "https://vangst.com",
      sameAs: [
        "https://www.facebook.com/Vangsttalent/",
        "https://twitter.com/vangsttalent",
        "https://www.linkedin.com/company/vangst/",
        "https://www.instagram.com/vangsttalent/"
      ]
    };

    // Rich Card Logo data
    const data2 = {
      "@context": "http://schema.org",
      "@type": "Organization",
      url: "https://vangst.com",
      logo:
        "https://static1.squarespace.com/static/54ed5044e4b035a09db13486/t/5758f8cbe707eb6fde1f128e/1465448663815/Jeffers_Vangst_Logo"
    };

    const JsonLd = ({ data }) => (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    );

    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link
            rel="icon"
            type="image/png"
            href="https://static1.squarespace.com/static/54ed5044e4b035a09db13486/t/5758f8cbe707eb6fde1f128e/1465448663815/Jeffers_Vangst_Logo"
          />
          <title>{this.props.title}</title>
          <meta name="description" content={this.props.description} />
          <meta name="keywords" content={this.props.keywords} />

          <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
          <meta name="robots" content="index, follow" />
          <meta name="language" content="English" />

          {/* Schema.org markup for Google+ */}
          <meta itemprop="name" content={this.props.title} />
          <meta itemprop="description" content={this.props.description} />
          <meta
            itemprop="image"
            content="https://static1.squarespace.com/static/54ed5044e4b035a09db13486/t/5758f8cbe707eb6fde1f128e/1465448663815/Jeffers_Vangst_Logo"
          />

          {/* Twitter Card data */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@vangsttalent" />
          <meta name="twitter:title" content={this.props.title} />
          <meta name="twitter:creator" content="@vangsttalent" />
          <meta
            name="twitter:image"
            content="https://static1.squarespace.com/static/54ed5044e4b035a09db13486/t/5758f8cbe707eb6fde1f128e/1465448663815/Jeffers_Vangst_Logo"
          />
          <meta name="twitter:description" content={this.props.description} />
          <meta
            name="twitter:image"
            content="https://static1.squarespace.com/static/54ed5044e4b035a09db13486/t/5758f8cbe707eb6fde1f128e/1465448663815/Jeffers_Vangst_Logo"
          />

          {/* Open Graph data */}
          <meta property="og:locale" content="en_US" />
          <meta property="og:title" content={this.props.title} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={this.props.url} />
          <meta
            property="og:image"
            content="https://static1.squarespace.com/static/54ed5044e4b035a09db13486/t/5758f8cbe707eb6fde1f128e/1465448663815/Jeffers_Vangst_Logo"
          />
          <meta property="og:description" content={this.props.description} />
          <meta
            property="og:site_name"
            content="Vangst Cannabis Staffing Agency"
          />

          {/* Rich Social Snippets */}
          <JsonLd data={data} />

          {/* Rich Card Logo */}
          <JsonLd data={data2} />

          {/* Google Site Verification */}
          <meta
            name="google-site-verification"
            content="MUigGFKA_WG2nJQLW__YNcSfxdpKYeliFsTadjNPiHY"
          />

          {/* Stylesheets */}
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
            integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossorigin="anonymous"
          />
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
      </div>
    );
  }
}

export default Header;
