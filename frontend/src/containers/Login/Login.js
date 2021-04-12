import {useDispatch, useSelector} from "react-redux";
import {useState} from 'react';
import FormElement from "../../components/UI/FormElement/FormElement";
import {Alert, Button, Col, Form, FormGroup} from "react-bootstrap";
import {loginUser} from "../../store/actions/userActions";
import {useHistory} from "react-router";

const Login = () => {
    const [inputs, setInputs] = useState({username: "", password: ""});
    const error = useSelector(state => state.users.loginError);
    const dispatch = useDispatch();

    const history = useHistory();
    const inputChangeHandler = e => {
        setInputs(prevState => ({...prevState, [e.target.name]: e.target.value}));
    }
    const toRegister = () => {
        history.push('/register');
    }
    const logIn = (e) => {
        e.preventDefault();
        dispatch(loginUser(inputs));
        setTimeout(() => {
            history.push('/messages');
        }, 100)
    }
    return (
        <>
            <h1>Login</h1>
            {error ? <Alert style={{width: "80%"}} allowFullScreen variant="danger">
                {error.message}. Do you want to create new user?
                <div className="d-flex justify-content-end">
                    <Button onClick={toRegister} variant="outline-danger">
                        Create new user
                    </Button>
                </div>
            </Alert> : null}
            <Form onSubmit={logIn}>
                <FormElement
                    title="Username"
                    name="username"
                    value={inputs.username}
                    placeholder="Username"
                    type="text"
                    onChange={inputChangeHandler}
                />
                <FormElement
                    title="Password"
                    name="password"
                    value={inputs.password}
                    placeholder="Password"
                    type="password"
                    onChange={inputChangeHandler}
                />
                <FormGroup>
                    <Col>
                        <Button type="submit" color="primary">
                            Login
                        </Button>
                    </Col>
                </FormGroup>

            </Form>
        </>
    )
}

export default Login;