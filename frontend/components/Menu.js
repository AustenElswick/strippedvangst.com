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
    DropdownItem } from 'reactstrap';

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
    return(
        <Navbar className="nav-menu"color="transparent" light expand="lg">
            <NavbarBrand href="/">
                <div className="brand-container">
                    <img className="vangst-logo-graphic d-lg-none" src="/static/images/logos/logo-graphic.png" alt="vangst logo"></img>
                    <img className="vangst-logo-text d-lg-none" src="/static/images/logos/logo-text.png" alt="vangst logo text"></img>
                    <img className="vangst-logo d-none d-lg-block" src="/static/images/logos/logo.png" alt="vangst logo"></img>
                </div>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink className="nav-link" href="/">JOB SEEKERS</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" href="/">EMPLOYERS</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" href="/">HOW IT WORKS</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" href="/">CAREER FAIR</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret className="nav-link">
                    ABOUT
                    </DropdownToggle>
                    <DropdownMenu right>
                    <DropdownItem className="nav-link">
                        WORK FOR VANGST
                    </DropdownItem>
                    <DropdownItem className="nav-link">
                        TEAM
                    </DropdownItem>
                    <DropdownItem className="nav-link">
                        BLOG
                    </DropdownItem>
                    <DropdownItem className="nav-link">
                        CONTRACT
                    </DropdownItem>

                    </DropdownMenu>
                </UncontrolledDropdown>
                </Nav>
            </Collapse>
        </Navbar>
    )
  }


}

export default Menu;
