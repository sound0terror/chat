import {Redirect, Route, Switch} from "react-router";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";

const ProtectedRoute = props => {
    return props.isAllowed ? <Route {...props} /> : <Redirect to="/" />
};
const Routes = ({user}) => {
    return (
        <Switch>
            <Route path="/register" exact component={Register}/>
            <Route path="/login"  exact component={Login}/>
        </Switch>
    )
};

export default Routes;
