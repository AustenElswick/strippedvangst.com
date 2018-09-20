import React, { Component } from "react";
import Link from "next/link";
import { Config } from "../config.js";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const linkStyle = {
  marginRight: 15
};

class Menu extends Component {
  constructor() {
    super();

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            id="ga-iframe"
            src="https://www.googletagmanager.com/ns.html?id=GTM-KFNHDDL"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Navbar className="nav-menu" color="transparent" light expand="lg">
          <NavbarBrand href="/">
            <div className="brand-container">
              <img
                className="vangst-logo-graphic d-lg-none"
                src="/static/images/logos/logo-graphic.png"
                alt="vangst logo"
              />
              <img
                className="vangst-logo-text d-lg-none"
                src="/static/images/logos/logo-text.png"
                alt="vangst logo text"
              />
              <img
                className="vangst-logo d-none d-lg-block"
                src="/static/images/logos/logo.png"
                alt="vangst logo"
              />
            </div>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  className="nav-link"
                  href="/vangst-cannabis-staffing-services"
                >
                  JOB SEEKERS
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" href="/cannabis-employers">
                  EMPLOYERS
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link"
                  href="https://blog.vangst.com/cannabis-salary-guide-2018/"
                >
                  INDUSTRY INSIGHTS
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" href="/vangst-talent-careerfair">
                  CAREER FAIR
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="nav-link">
                  ABOUT
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className="nav-link">
                    <NavLink
                      className="nav-link dropdown-link"
                      href="https://blog.vangst.com/"
                    >
                      BLOG
                    </NavLink>
                  </DropdownItem>

                  <DropdownItem className="nav-link">
                    <NavLink
                      className="nav-link dropdown-link"
                      href="/about-vangst-talent"
                    >
                      TEAM
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem className="nav-link">
                    <NavLink
                      className="nav-link dropdown-link"
                      href="/vangst-press"
                    >
                      PRESS
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem className="nav-link">
                    <NavLink
                      className="nav-link dropdown-link"
                      href="/vangst-internal-positions"
                    >
                      WORK FOR VANGST
                    </NavLink>
                  </DropdownItem>
                  <div className="dropdown-divider" />
                  <DropdownItem className="nav-link">
                    <NavLink
                      className="nav-link dropdown-link"
                      href="/contact-vangst-talent"
                    >
                      CONTACT
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
          <style>
            {`
            .dropdown-link {padding: 0 0 0 10px !important; width: 100%;}
            .nav-link {padding-right: 0; padding-left: 0; margin: 0;}
            #ga-iframe {height: 0; width: 0; display: none, visibility: hidden;}
          `}
          </style>
        </Navbar>
      </div>
    );
  }
}

export default Menu;
