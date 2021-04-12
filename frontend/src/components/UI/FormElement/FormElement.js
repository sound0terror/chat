import PropTypes from 'prop-types';
import {Col, Form, FormGroup, FormControl, FormLabel} from "react-bootstrap";

const FormElement = props => {
    let formControlChildren;

    if(props.type === "select" && props.options) {

        formControlChildren = props.options.map(option => {
            return (<option
                value={option._id}
                key={option._id}
            >
                {option.title}
            </option>)
        });
    }


    return (
        <FormGroup>
            <FormLabel sm={2} htmlFor={props.name}>{props.title}</FormLabel>
            <Col sm={10}>
                <FormControl
                    {...props}
                    type={props.type}
                    name={props.name} id={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    placeholder={props.placeholder}
                    isInvalid={!!props.error}
                    required={props.required}
                >
                    {formControlChildren}
                </FormControl>
                {
                    props.error ?
                        <Form.Control.Feedback type="invalid">
                            {props.error}
                        </Form.Control.Feedback> : null
                }

            </Col>
        </FormGroup>
    );
};

FormElement.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    error: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
    onChange: PropTypes.func.isRequired
};

export default FormElement;
