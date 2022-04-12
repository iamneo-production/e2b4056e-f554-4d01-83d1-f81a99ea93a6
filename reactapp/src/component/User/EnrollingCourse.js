import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import authId from '../../services/auth_id'
import { useState, useEffect } from 'react'
import User_Service from '../../services/User_Service'
import UserNavbar from './UserNavbar'
import { Button, Modal } from 'react-bootstrap'

const EnrollingCourse = () => {
    const { courseId } = useParams()
    const navigate = useNavigate()

    const [formValues, setFormValues] = useState({
        firstName: "",
        gender: "",
        fatherName: "",
        motherName: "",
        age: "",
        phonenumber: "",
        email: "",
        nationality: "",
        state: "",
        pincode: "",
        address: "",
        userid: authId(),
        course_id: courseId
    });

    const [formErrors, setFormErrors] = useState({});
    const [show, setShow] = useState(false) 

    const handleShow = () => navigate('/enrolledcourses')
    const handleClose = () => setShow(false)
    const [studentid, setStudentid] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        User_Service.post(formValues)
            .then((response) => {
                setFormErrors("")
                setStudentid(response.data.studentid)
                setShow(true)
            })
            .catch((error) => {
                console.log(error)
                setFormErrors(error.data)
            })
    }

    useEffect(() => {

    }, [formErrors]);

    return (
        <>
            <UserNavbar />
            <div className="container1">

                <form onSubmit={handleSubmit}>

                    <div class="row">
                        <div className="col ">
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                className="form-control"
                                placeholder="Enter your name"
                                onChange={handleChange}
                                required
                                value={formValues.firstName}
                            />
                        </div>

                        <div class="col ">

                            <input
                                type="text"
                                name="gender"
                                id="gender"
                                className="form-control"
                                placeholder="Enter your gender"
                                onChange={handleChange}
                                required
                                value={formValues.gender}
                            />

                        </div>
                    </div>


                    <div class="row">
                        <div className="col mt-3">

                            <input
                                type="text"
                                name="fatherName"
                                id="fatherName"
                                className="form-control"
                                placeholder="Enter father name"
                                onChange={handleChange}
                                required
                                value={formValues.fatherName}
                            />
                        </div>

                        <div class="col mt-3">

                            <input
                                type="text"
                                name="motherName"
                                id="motherName"
                                className="form-control"
                                placeholder="Enter mother name"
                                onChange={handleChange}
                                required
                                value={formValues.motherName}
                            />

                        </div>
                    </div>

                    <div class="row">
                        <div className="col mt-3">

                            <input
                                type="text"
                                name="age"
                                id="age"
                                className="form-control"
                                placeholder="Enter age"
                                pattern='^[0-9]+$'
                                onChange={handleChange}
                                required
                                value={formValues.age}
                            />
                        </div>

                        <div class="col mt-3">

                            <input
                                type="text"
                                name="phonenumber"
                                id="phoneNumber"
                                className="form-control"
                                placeholder="Enter phone number"
                                pattern=".{10}"
                                title="Enter 10 numbers"
                                required
                                value={formValues.phonenumber}
                                onChange={handleChange}
                            />


                        </div>
                    </div>

                    <div class="row">
                        <div className="col mt-3">

                            <input
                                type="text"
                                name="email"
                                id="email"
                                className="form-control"
                                placeholder="Enter email address"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                title="characters followed by an @ sign"
                                required
                                value={formValues.email}
                                onChange={handleChange}
                            />

                        </div>

                        <div class="col mt-3">

                            <input
                                type="text"
                                name="nationality"
                                id="nationality"
                                className="form-control"
                                placeholder="Enter nationality"
                                onChange={handleChange}
                                value={formValues.nationality}
                                required
                            />
                        </div>
                    </div>

                    <div class="row">
                        <div className="col mt-3">

                            <input
                                type="text"
                                name="state"
                                id="state"
                                className="form-control"
                                placeholder="Enter state"
                                onChange={handleChange}
                                required
                                value={formValues.state}
                            />
                        </div>

                        <div class="col mt-3">

                            <input
                                type="text"
                                name="pincode"
                                id="pincode"
                                className="form-control"
                                placeholder="Enter pincode"
                                pattern=".{6}"
                                title='Enter the valid pincode format'
                                onChange={handleChange}
                                required
                                value={formValues.pincode}
                            />

                        </div>
                    </div>
                    <div className="form5 mt-3">

                        <textarea
                            type="text"
                            name="address"
                            id="address"
                            className="form-control"
                            placeholder="Enter address"
                            onChange={handleChange}
                            rows="5"
                            required
                            value={formValues.address}
                        />

                    </div>

                    <div className=" mt-3">
                        <Button type="submit" className="form-btn" id="enrollNowButton" value="Enroll Now">Enroll Now</Button>
                    </div>
                </form>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body>Student successfully registered with id : {studentid}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleShow}>
                            OK
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default EnrollingCourse