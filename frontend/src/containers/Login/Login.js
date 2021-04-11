import {useDispatch, useSelector} from "react-redux";
import {useState} from 'react';
import FormElement from "../../components/UI/FormElement/FormElement";
import {Alert, Button, Col, Form, FormGroup} from "react-bootstrap";
import {loginUser} from "../../store/actions/userActions";

const Login = () => {
    const [inputs, setInputs] = useState({username: "", password: ""});
    const error = useSelector(state => state.users.loginError);
    const dispatch = useDispatch();

    const inputChangeHandler = e => {
        setInputs(prevState => ({...prevState, [e.target.name]: e.target.value}));
    }

    const logIn = (e) => {
        e.preventDefault();
        dispatch(loginUser(inputs));
    }
    return (
        <>
            <h1>Login</h1>
            {error ? <Alert color="danger">{error.message}</Alert> : null}
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
                <FormGroup row>
                    <Col sm={{offset:2, size: 10}}>
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