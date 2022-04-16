import { Navbar, Container, Nav } from 'react-bootstrap';
import AuthAPI from '../utils/auth_utils';

function AppNav(props) {

  const handleLogout = ()=>{
    AuthAPI.logOut(props.setUser)
  }

  return (
    
    <Navbar bg="dark" variant="dark" sticky="top" expand="md">
      <Container fluid>
        <Navbar.Brand href="#/">To-Do App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            { !props.user && <Nav.Link href="#/">Sign Up</Nav.Link> }
            { !props.user && <Nav.Link href="#/login/">Log In</Nav.Link> }
            { props.user && <Navbar.Text>Signed in as: {props.user}</Navbar.Text> }
            { props.user && <Nav.Link onClick={ handleLogout }>Log Out</Nav.Link> }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default AppNav;