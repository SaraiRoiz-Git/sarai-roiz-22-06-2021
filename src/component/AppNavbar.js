import React from 'react'
import { Nav, Navbar } from "react-bootstrap";

class AppNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

    }
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Navbar.Brand className="logo-nav" href="#/"><img src="" alt="Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#/favorites">Favorites</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )

    }
}

export default AppNavbar;