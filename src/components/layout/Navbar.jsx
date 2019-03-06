import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import "./navBar.css";

export default class MainNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

        // NavBar Toggle Function

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

      // Scroll Functions

   scrollToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  scrollToAbout = () => {
    window.scroll({ top: 2000, left: 0, behavior: "smooth"});
  }

  render() {
    
    return (
      <div>
        <Navbar color="faded" className="navbar-inner" light>
        <NavbarBrand href="/" className="mr-auto"></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink onClick={this.scrollToTop} id="top-ref">Search</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.scrollToAbout} id="about-ref">About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
