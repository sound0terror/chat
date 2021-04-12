import {useDispatch, useSelector} from "react-redux";
import {useState} from 'react';
import FormElement from "../../components/UI/FormElement/FormElement";
import {Button, Col, Form, FormGroup} from "react-bootstrap";
import {registerUser} from "../../store/actions/userActions";

const Register = () => {
    const [inputs, setInputs] = useState({username: "", password: ""});
    const [avatar, setAvatar] = useState("");
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
    const fileChangeHandler = (e) => {
        setAvatar(e.target.files[0]);
    }
    const register = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("avatar", avatar);
        for (let key in inputs) {
            formData.append(key, inputs[key]);
        }

        dispatch(registerUser(formData));
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
                <FormElement
                    title="Avatar"
                    name="avatar"
                    type="file"
                    onChange={fileChangeHandler}
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