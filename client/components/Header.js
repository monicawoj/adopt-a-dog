import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/">
         find your furry friend &nbsp;
         <FontAwesomeIcon
           icon={faPaw}
           size="1x"
         />
      </a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav pullRight>
    <NavItem eventKey={1} href="/">
      Explore all
    </NavItem>
    <NavItem eventKey={2} href="/search/">
      Search by type
    </NavItem>
    <NavItem eventKey={2} href="/favorites/">
      My favorites
    </NavItem>
    <NavDropdown eventKey={3}title="About" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1} href='/about/'>Inspiration</MenuItem>
      <MenuItem eventKey={3.2} href='http://monicawojciechowski.com'>About the creator</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.3} href='https://github.com/monicawoj/adopt-a-dog.git'>Source code</MenuItem>
    </NavDropdown>
  </Nav>
</Navbar>;
}

export default Header;
