import React, { Component, Fragment } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

export default class TopNavigation extends Component {
  render() {
    return (
      <Fragment>
          <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">tHEMEZONE</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                <Nav.Link href="#">HOME</Nav.Link>
                <Nav.Link href="#">ABOUT</Nav.Link>
                <Nav.Link href="#">SERVICE</Nav.Link>
                <Nav.Link href="#">PORTFOLIO</Nav.Link>
                <Nav.Link href="#">CONTACT</Nav.Link>
                
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
      </Fragment>
    )
  }
}
