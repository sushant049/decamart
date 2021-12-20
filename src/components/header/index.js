import React from "react";
import { connect, useSelector } from "react-redux";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Header() {
    const cart = useSelector(({decaMart}) => decaMart?.cartItems);

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to="/" style={{'textDecoration': 'none', 'color': '#fff', marginRight: '1em'}}>DecaMart</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Link to="/cart" style={{'textDecoration': 'none', 'color': '#fff', marginRight: '1em'}}>
                            Cart ({cart && cart.reduce((total, n) => {
                                return total + n.quantity 
                            }, 0)})
                        </Link>
                        <Link to="#login" style={{'textDecoration': 'none', 'color': '#fff', marginRight: '1em'}}>
                            Login
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default Header;