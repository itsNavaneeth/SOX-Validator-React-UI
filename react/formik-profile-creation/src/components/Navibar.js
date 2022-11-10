import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navibar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Sox Validator</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <NavDropdown title="Profile" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Create Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Profiles List</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Job" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Create Job</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Jobs List</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navibar;
