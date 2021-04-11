import './App.css';
import Toolbar from "./components/UI/Toolbar/Toolbar";
import {useDispatch, useSelector} from "react-redux"
import {NotificationContainer} from 'react-notifications';
import Routes from "./Routes";
import {logoutUser} from "./store/actions/userActions";
import {Container} from "react-bootstrap";

function App() {
    const {user} = useSelector(state => state.users);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutUser());
    }

    return (
        <>
            <NotificationContainer/>
            <header>
                <Toolbar user={user} logout={logout}/>
            </header>
            <main>
                <Container>
                    <Routes user={user}/>
                </Container>
            </main>
        </>

    );
}

export default App;
