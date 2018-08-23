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
      <div>
        <Navbar color="light" light expand="lg">
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
                    <NavLink href="/">JOB SEEKERS</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/">EMPLOYERS</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/">HOW IT WORKS</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/">CAREER FAIR</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                    ABOUT
                    </DropdownToggle>
                    <DropdownMenu right>
                    <DropdownItem>
                        Option 1
                    </DropdownItem>
                    <DropdownItem>
                        Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        Reset
                    </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem className="nav-item dropdown" id="sign-in">
                    <a className="nav-link">SIGN IN</a>
                </NavItem>
                <NavItem className="nav-item dropdown bg-dark" id="sign-up">
                    <a className="nav-link text-light">SIGN UP</a>
                </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
      </div>
    )
  }


}

export default Menu;
