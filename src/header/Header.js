import React from 'react'
import { Link } from 'react-router-dom'
import Img from 'react-image'
import { Navbar,  MenuItem, NavItem, NavDropdown, Nav } from 'react-bootstrap'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to="/">Home</Link>
  </React.Fragment>
)

const myImg = () => <Img src="http://www.redstickcrossfit.com/wp-content/uploads/2018/03/Image.png" width={100}
  height={100}/>

const Header = ({ user }) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#/"> { myImg() }</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">
          { user && <span>Welcome, {user.email}</span>}
        </NavItem>
        <NavItem eventKey={2} href="#">
          { user ? authenticatedOptions : unauthenticatedOptions }
        </NavItem>
        <NavItem eventKey={3} href="#">
          { alwaysOptions }
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
