import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Student_Service from '../../services/Student_Service'

const EditStudent = () => {
    const { admissionid } = useParams()
    const [studentId, setStudentId] = useState(null)
    //const [formErrors, setFormErrors] = useState({})
    const navigate = useNavigate()
    const [formValues, setFormValues] = useState({
        studentname: "",
        gender: "",
        fathersname: "",
        mothersname: "",
        age: "",
        phonenumber: "",
        email: "",
        nationality: "",
        state: "",
        pincode: "",
        address: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(formValues)

        Student_Service.editStudent(studentId, formValues)
            .then((res) => {
                console.log(res)
            })
            .catch((e) => {
                console.log(e)
            })
        navigate('/view-students')
    }

    useEffect(() => {
        Student_Service.getStudentbyId(admissionid)
            .then((response) => {
                console.log(response.data)
                setStudentId(response.data.studentid)
                setFormValues(response.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }, []);

    return (
        <>
            <div className='container1'>
                <form onSubmit={handleSubmit}>

                    <div class="row">
                        <div className="col ">
                            <label>Student Name</label>
                            <input
                                type="text"
                                name="studentname"
                                id="firstName"
                                className="form-control"
                                placeholder="Enter your name"
                                onChange={handleChange}
                                required
                                value={formValues.studentname}
                            />
                        </div>

                        <div class="col ">
                            <label>Gender</label>
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
                            <label>Father's Name</label>
                            <input
                                type="text"
                                name="fathersname"
                                id="fatherName"
                                className="form-control"
                                placeholder="Enter father name"
                                onChange={handleChange}
                                required
                                value={formValues.fathersname}
                            />
                        </div>

                        <div class="col mt-3">
                            <label>Mother's Name</label>
                            <input
                                type="text"
                                name="mothersname"
                                id="motherName"
                                className="form-control"
                                placeholder="Enter mother name"
                                onChange={handleChange}
                                required
                                value={formValues.mothersname}
                            />

                        </div>
                    </div>

                    <div class="row">
                        <div className="col mt-3">
                            <label>Age</label>
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
                            <label>Mobile Number</label>
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
                            <label>Email</label>
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
                            <label>Nationality</label>
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
                            <label>State</label>
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
                            <label>Pincode</label>
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
                        <label>Address</label>
                        <input
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
                        <Button type="submit" className="form-btn btn-success" id="enrollNowButton" value="Edit">Edit</Button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default EditStudent