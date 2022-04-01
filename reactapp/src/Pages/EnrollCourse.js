import React from 'react'
import { useState, useEffect } from "react";
import '../App.css'
import UserNavbar from "../component/UserNavbar";

function EnrollCourse() {
  
  const initialValues = {email: "", phonenumber: ""};
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
    return errors;
  };

  return (
    <div>
      <UserNavbar/>
    <div className="container1">
      
      <form onSubmit={handleSubmit}>
          <div className="form1">
            <div className="form-group">
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="form-input"
              placeholder="Enter your first name"
              minLength={4}
              required
            />
            </div>
            <div className="form-group">
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="form-input"
              placeholder="Enter your last name"
              required
            />
            </div>
            <div className="form-group">
              <input
              type="text"
              name="male/female"
              id="male/female"
              className="form-input"
              placeholder="Enter your gender"
              required
              />
            </div>
          </div>
          <div className="form2">
            <div className="form-group">
            <input
              type="text"
              name="fatherName"
              id="fatherName"
              className="form-input"
              placeholder="Enter father name"
              required
            />
            </div>
            <div className="form-group">
            <input
              type="text"
              name="motherName"
              id="motherName"
              className="form-input"
              placeholder="Enter mother name"
              required
            />
            </div>
            <div className="form-group">
            <input
              type="text"
              name="age"
              id="age"
              className="form-input"
              placeholder="Enter age"
              required
            /> 
            </div>
          </div>
          <div className="form3">
            
            <div className="form-group">
            <input
              type="text"
              name="phonenumber"
              id="phoneNumber1"
              className="form-input"
              placeholder="Enter phone number"
              pattern=".{10}"
              title="Enter 10 numbers"
              required
              value={formValues.phonenumber}
              onChange={handleChange}
            />
            <p>{formErrors.phonenumber}</p>
            </div>
          
            <div className="form-group">
            <input
              type="text"
              name="alternatenumber"
              id="phoneNumber2"
              className="form-input"
              placeholder="Enter alternate number"
            />
            </div>
            <div className="form-group">
                <input
                type="text"
                name="email"
                id="emailId"
                className="form-input"
                placeholder="Enter email address"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="characters followed by an @ sign"
                required
                value={formValues.email}
                onChange={handleChange}
              />
              <p>{formErrors.email}</p>
              </div>
          </div>
          <div className="form4">
            <div className="form-group">
            <input
              type="text"
              name="pincode"
              id="pincode"
              className="form-input"
              placeholder="Enter Pincode"
              required
            />
            </div>
            <div className="form-group">
            <input
              type="text"
              name="state"
              id="state"
              className="form-input"
              placeholder="Enter state"
              required
            />
            </div>
            <div className="form-group">
            <input
              type="text"
              name="nationality"
              id="nationality"
              className="form-input"
              placeholder="Enter nationality"
              required
            />
            </div>
            </div>
          <div className="form5">
              
              <textarea
                type="text"
                name="address"
                id="address"
                className="form-address"
                placeholder="Enter address"
                required
              />
              
          </div>
            
          <div className="form-btn1">
              <button className="button" id="enrollCourseButton" value="Enroll Course">Enroll Course</button>
          </div>
          
          
       
      </form>
    </div>
    </div>
  );
}

export default EnrollCourse;