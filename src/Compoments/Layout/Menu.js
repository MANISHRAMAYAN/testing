import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Menu.css";
export default function Menu() {
    return (
        <>
            <div className='container-fluid main_nav'>
                <div className='row nav'>
                    <Navbar expand="lg" className="nav_container">
                        <Container>
                            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mx-auto">
                                    <Nav.Link href="#home" className='nav_list'>Home</Nav.Link>
                                    <Nav.Link href="#home" className='nav_list'>Services</Nav.Link>
                                    <Nav.Link href="#home" className='nav_list'>Works</Nav.Link>
                                    <Nav.Link href="#home" className='nav_list'>Home</Nav.Link>
                                </Nav>
                                <Button className='nav_btn' variant="outline-primary">Primary</Button>{' '}
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
        </>
    )
}