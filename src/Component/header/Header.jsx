import React from 'react'
import { Container,Navbar,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
function Header() {
  return (
    <div style={{backgroundColor:'black !important'}}>
      <Navbar expand="lg" className="text-white bg-dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/' >Posts</Nav.Link>
              <Nav.Link as={Link} to='/Comments'>Comments</Nav.Link>
              <Nav.Link as={Link} to='/Photos'>Photos</Nav.Link>
              <Nav.Link as={Link} to='/Album'>Album</Nav.Link>
              <Nav.Link as={Link} to='/todos'>Todos</Nav.Link>
              <Nav.Link as={Link} to='/user'>Users</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;