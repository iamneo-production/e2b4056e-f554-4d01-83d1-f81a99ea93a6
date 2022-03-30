import { useState, useEffect } from "react";
import '../App.css'
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate= useNavigate();
    const initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
            navigate('/dashboard');
        }
    });


    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
    };

    return (
        <>
           
            <div className="container">
                <div className="wrapper">
                <div className="title"><span>Login Form</span></div>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <i className="fas fa-user"></i>
                            <input

                                type="text"
                                name="email"
                                id="email"
                                placeholder="Enter Email..."
                                value={formValues.email}
                                onChange={handleChange}
                            />
                              <p>{formErrors.email}</p>
                        </div>

                        <div className="row">
                            <i className="fas fa-lock"></i>
                            <input
                                type="password"
                               name="password"
                                id="password"
                                placeholder="Enter Password..."
                                value={formValues.password}
                                onChange={handleChange}
                            />
                              <p>{formErrors.password}</p>
                        </div>
                       
                      
                       
                        <div className="row button">
                            <input type="submit" id="loginButton" value="Login" />
                        </div>
                        <div className="signup-link"><a href="/signup">Signup now</a></div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
