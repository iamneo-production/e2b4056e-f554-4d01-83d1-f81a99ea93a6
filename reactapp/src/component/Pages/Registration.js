import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import Auth_Service from '../../services/Auth_Service';


const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};
const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};
const vmobno = (value) => {
  const regexp = /^([+]\d{2})?\d{10}$/;
  if (!regexp.test(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        Invalid Mobile Number
      </div>
    );
  }
};
const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Registration = () => {
  const form = useRef();
  const checkBtn = useRef();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobno, setMobno] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangeMobno = (e) => {
    const mobno = e.target.value;
    setMobno(mobno);
  }
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      Auth_Service.register(username, email, mobno, password).then(
        (response) => {
          console.log(response.data);
          setMessage(response.data);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  return (
    <>
      <nav className="navbar navbar-fixed-top">
        <div className="container-fluid d-flex justify-content-end">
          <ul className="nav">
            <li className="nav-item">
              <a href="/"><button className="btn btn-outline-light" type="button" id="login">login</button></a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mt-3">
        <h3 className="fw-bold mb-3" style={{ textAlign: "center" }}>Register</h3>
        <Form onSubmit={handleRegister} style={{ textAlign: "center" }} ref={form}>
          {!successful &&
            (<div>
              <Input
                type="text"
                className="form-input mb-2"
                name="username"
                id="username"
                placeholder="Enter Username ...."
                value={username}
                onChange={onChangeUsername}
                validations={[required, vusername]}
              />
              <Input
                type="text"
                className="form-input mb-2"
                name="email"
                id="email"
                placeholder="Enter the email ...."
                value={email}
                onChange={onChangeEmail}
                validations={[required, validEmail]}
              />
              <Input
                type="text"
                className="form-input mb-2"
                name="mobno"
                id="mobileNumber"
                placeholder="Enter the Mobile Number ...."
                value={mobno}
                onChange={onChangeMobno}
                validations={[required, vmobno]}
              />
              <Input
                type="password"
                className="form-input mb-2"
                name="password"
                value={password}
                id="password"
                placeholder="Enter the password ...."
                onChange={onChangePassword}
                validations={[required, vpassword]}
              />
              <button type="submit" className="btn btn-danger mb-2 pb-3" id="submitButton" style={{ height: "38px", color: "white" }}>Register Account</button>

            </div>
            )}

          {
            message && (<div className="form-group">
              <div
                className={successful ? "alert alert-success" : "alert alert-danger"}
                role="alert"
              >

                {message}
              </div>
            </div>
            )
          }
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
        <p className="form-message" id="signupLink">Already a User? <a href="/">Login</a>.</p>
      </div>
    </>
  );
};

export default Registration; 