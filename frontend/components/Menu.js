import React, { Component } from "react";
import Link from "next/link";
import { Config } from "../config.js";

const linkStyle = {
    marginRight: 15
};

class Menu extends Component {
  constructor() {
      super();
  }

  render() {
    return(
      <div>
        <div className="nav-menu">
            <Link href="/">
                <a style={linkStyle}>JOB SEEKERS</a>
            </Link>
            <Link href="/">
                <a style={linkStyle}>EMPLOYERS</a>
            </Link>
            <Link href="/">
                <a style={linkStyle}>HOW IT WORKS</a>
            </Link>
            <Link href="/">
                <a style={linkStyle}>CAREER FAIR</a>
            </Link>
            <Link href="/">
                <a style={linkStyle}>ABOUT</a>
            </Link>
        </div>
      </div>
    )
  }


}

export default Menu;
