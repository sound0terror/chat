import React from 'react';
import {Container, Nav, Navbar, NavbarBrand} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import UserMenu from "./Menu/UserMenu";
import UnauthorizedMenu from "./Menu/UnauthorizedMenu";

const Toolbar = ({user, logout}) => {
    return (
        <Navbar bg="dark" variant="dark" className="mb-3">
            <Container>
                <LinkContainer to="/" exact>
                    <NavbarBrand>Chat</NavbarBrand>
                </LinkContainer>
                <Nav className="ml-auto">
                    {
                        user ?
                            <UserMenu
                                user={user}
                                logout={logout}
                            />
                            :
                            <UnauthorizedMenu />
                    }
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Toolbar;
