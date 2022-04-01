import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function Registration() {
  const navigate = useNavigate();
  const initialValues = { username: "", email: "", mobilenumber: "", password: "" };
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
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexp = /^[0-9\b]+$/;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.mobilenumber) {
      errors.mobilenumber = "Mobile Number is required!";
    } else if (!regexp.test(values.mobilenumber)) {
      errors.mobilenumber = "This is not a valid mobile number format!";
    } else if (values.mobilenumber.length != 10) {
      errors.mobilenumber = "This field must have 10 numbers!";
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
    <div>
      <nav class="navbar navbar-fixed-top">
        <div className="container-fluid d-flex justify-content-end">
          <ul class="nav">
            <li class="nav-item">
              <button type="button" id="logout" class="btn btn-outline-light" onClick={()=> navigate('/')}>LogIn</button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container2" >
        <div>
          <h1 className='fw-bold'>Cricket Academy</h1>
        </div>
        <form onSubmit={handleSubmit} style={{ textAlign: "center" }} >

          <h3 className="fw-bold">Register</h3>

          <input
            type="text"
            name="username"
            id="username"
            className="form-input"
            placeholder="Enter username"
            value={formValues.username}
            required
            onChange={handleChange}
          />
          <p>{formErrors.username}</p>
          <input
            type="text"
            name="email"
            id="email"
            className="form-input"
            placeholder="Enter email address"
            value={formValues.email}
            required
            onChange={handleChange}
          />
          <p>{formErrors.email}</p>
          <input
            type="text"
            name="mobilenumber"
            id="mobileNumber"
            className="form-input"
            placeholder="Enter mobile number"
            value={formValues.mobilenumber}
            required
            onChange={handleChange}
          />
          <p>{formErrors.mobilenumber}</p>
          <input
            type="password"
            name="password"
            id="password"
            className="form-input"
            placeholder="Enter password"
            value={formValues.password}
            required
            onChange={handleChange}
          />

          <p>{formErrors.password}</p>


          <button type="submit"
            class="submitButton"
            id="submitButton"
           >Register Account</button>

          {/* <p className="form-message my-2" id="signupLink">Already a User? <a href="/">Login</a>.</p> */}


        </form>
      </div>
    </div>
  );
}

