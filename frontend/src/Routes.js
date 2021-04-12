import {Redirect, Route, Switch} from "react-router";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import Chat from "./containers/Chat/Chat";
import Home from "./containers/Home/Home";

const ProtectedRoute = props => {
    return props.isAllowed ? <Route {...props} /> : <Redirect to="/" />
};
const Routes = ({user}) => {
    return (
        <Switch>
            <ProtectedRoute
                path="/messages"
                component={Chat}
                isAllowed={user}
            />
            <Route path="/" exact  component={Home}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/login"  exact component={Login}/>
        </Switch>
    )
};

export default Routes;
