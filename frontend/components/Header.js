import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import { Config } from "../config.js";
import stylesheet from '../src/styles/style.scss'

class Header extends Component {
    constructor() {
        super();
    }

    render() {

        return (
            <div>
                <Head>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
                    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                    <link rel="icon" type="image/png" href="static/images/logos/logo-graphic.png"/>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta charSet="utf-8" />
                    <title>
                        Vangst | The Cannabis Industry's Top Staffing Agency
                    </title>
                </Head>
            </div>
        );
    }
}

export default Header;
