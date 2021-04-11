import {NavDropdown} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';

const UserMenu = ({user, logout}) => {
    return (
        <NavDropdown id="NavDropDown"  alignRight navbar title={`Hello, ${user.username}`}>
            <LinkContainer to="/messages" exact>
                <NavDropdown.Item>All messages</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
        </NavDropdown>
    )
};

export default UserMenu;
