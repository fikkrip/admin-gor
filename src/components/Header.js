import * as React from 'react';
import Link from 'next/link';
import {Nav, NavDropdown, FormControl, Form, Badge} from 'react-bootstrap';



class Header extends React.Component {
  render () {
    return (
      <Nav className="align-items-center">
        <Nav.Link style={{ cursor: 'auto' }}>
            <small>Dashboard / Manage User</small>
        </Nav.Link>
        <Nav.Link style={{ cursor: 'auto' }}>
            <span>|</span>
        </Nav.Link>
        <Nav.Link className="notification-cont position-relative">
            <Link href="#">
            <span>
                <i className="fa fa-bell" aria-hidden="true" />
                <Badge
                  variant="danger"
                  className="rounded-circle position-absolute"
                >
                3
                </Badge>
            </span>
            </Link>
        </Nav.Link>
        <Nav.Link style={{ cursor: 'auto' }}>
          {/* <Link href="#"> */}
            <small>Alhamdi Ferdiawan Bahri</small>
          {/* </Link> */}
        </Nav.Link>
        <NavDropdown
          title={
            <div className="d-inline-block user-avatar">
              <img
                src="https://semanggi.app/images/semanggi-app-logo-1-247x247.jpg"
                className="img-fluid rounded-circle"
              />
            </div>
          }
          id="basic-nav-dropdown"
          className="profile-dropdown  p-0  mr-2 position-relative"
        >
          <NavDropdown.Item className="pt-2 pb-2 theme-container">
            <Link href="/">
              <a className="d-block navbarLink">
                <p className="mb-0">Log Out</p>
              </a>
            </Link>
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    );
  }
}
export default Header;
