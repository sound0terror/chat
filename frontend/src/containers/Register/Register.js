import {useDispatch, useSelector} from "react-redux";
import {useState} from 'react';
import FormElement from "../../components/UI/FormElement/FormElement";
import {Button, Col, Form, FormGroup} from "react-bootstrap";
import {registerUser} from "../../store/actions/userActions";

const Register = () => {
    const [inputs, setInputs] = useState({username: "", password: ""});
    const error = useSelector(state => state.users.registerError);
    const dispatch = useDispatch();

    const inputChangeHandler = e => {
        setInputs(prevState => ({...prevState, [e.target.name]: e.target.value}));
    }
    const getFieldError = (fieldName) => {
        return error && error.message &&
            error.message.errors && error.message.errors[fieldName] &&
            error.message.errors[fieldName].message;
    }
    const register = (e) => {
        e.preventDefault();
        dispatch(registerUser(inputs));
    }
    return (
        <>
            <h1>Register new user</h1>
            <Form onSubmit={register}>
                <FormElement
                    title="Username"
                    name="username"
                    value={inputs.username}
                    placeholder="Username"
                    type="text"
                    onChange={inputChangeHandler}
                    error={getFieldError('username')}
                />
                <FormElement
                    title="Password"
                    name="password"
                    value={inputs.password}
                    placeholder="Password"
                    type="password"
                    onChange={inputChangeHandler}
                    error={getFieldError('password')}
                />
                <FormGroup>
                    <Col>
                        <Button type="submit" color="primary">
                            Register
                        </Button>
                    </Col>
                </FormGroup>

            </Form>
        </>
    )
}

export default Register;