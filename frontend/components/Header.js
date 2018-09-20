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
        "https://s3-us-west-2.amazonaws.com/vangstimages/Vangst_Logo_trimmed.png"
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
          {/* Google Task Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KFNHDDL');`
            }}
          />

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link
            rel="icon"
            type="image/png"
            href="/static/images/logos/logo-graphic.png"
          />
          <title>{this.props.title}</title>
          <meta name="description" content={this.props.description} />
          <meta name="keywords" content={this.props.keywords} />

          <meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
          <meta name="robots" content="index, follow" />
          <meta name="language" content="English" />

          {/* Schema.org markup for Google+ */}
          <meta itemProp="name" content={this.props.title} />
          <meta itemProp="description" content={this.props.description} />
          <meta
            itemProp="image"
            content="https://s3-us-west-2.amazonaws.com/vangstimages/Vangst_Logo_trimmed.png"
          />

          {/* Twitter Card data */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@vangsttalent" />
          <meta name="twitter:title" content={this.props.title} />
          <meta name="twitter:creator" content="@vangsttalent" />
          <meta
            name="twitter:image"
            content="https://s3-us-west-2.amazonaws.com/vangstimages/Vangst_Logo_trimmed.png"
          />
          <meta name="twitter:description" content={this.props.description} />
          <meta
            name="twitter:image"
            content="https://s3-us-west-2.amazonaws.com/vangstimages/Vangst_Logo_trimmed.png"
          />

          {/* Open Graph data */}
          <meta property="og:locale" content="en_US" />
          <meta property="og:title" content={this.props.title} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={this.props.url} />
          <meta
            property="og:image"
            content="https://s3-us-west-2.amazonaws.com/vangstimages/Vangst_Logo_trimmed.png"
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
            crossOrigin="anonymous"
          />
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
      </div>
    );
  }
}

export default Header;
