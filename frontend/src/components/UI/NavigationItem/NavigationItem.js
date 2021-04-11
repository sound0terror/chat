import {NavItem, NavLink} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';

const NavigationItem = ({to, exact, children}) => {
    return (
        <NavItem>
            <LinkContainer exact={exact} to={to}>
                <NavLink>{children}</NavLink>
            </LinkContainer>
        </NavItem>
    )
}

export default NavigationItem;
