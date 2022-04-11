import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Academy_Service from '../../services/Academy_Service'
import AdminNavbar from './AdminNavbar'
const AddAcademy = () => {
    const [addAcademy, setAddAcademy] = useState({
        img_url: "",
        instituteName: "",
        email: "",
        instituteAddress: "",
        mobile: "",
        instituteDescription: ""
    })
    const [formerrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const navigate = useNavigate()
    const { instituteId } = useParams()
    const InputEvent = (e) => {

        const { name, value } = e.target
        setAddAcademy((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //console.log(addAcademy)
        setFormErrors(validate(addAcademy))
        setIsSubmit(true)
    }
    const validate = (values) => {
        const errors = {}
        const regex_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const regex_mobno = /^(\+\d{1,3}[- ]?)?\d{10}$/

        if (!values.instituteName) {
            errors.instituteName = "Academy name is required !!"
        }
        if (!values.email) {
            errors.email = "Academy email is required !!"
        } else if (!regex_email.test(values.email)) {
            errors.email = "This is not a valid email "
        }
        if (!values.instituteAddress) {
            errors.instituteAddress = "Academy address is required !!"
        }
        if (!values.mobile) {
            errors.mobile = "Academy mobile number is required !!"
        } else if (!regex_mobno.test(values.mobile)) {
            errors.mobile = "This is not a valid mobile number"
        }
        return errors
    }
    useEffect(() => {
        console.log(formerrors)
        if (Object.keys(formerrors).length === 0 && isSubmit) {
            //console.log(addAcademy)
            if (instituteId) {
                Academy_Service.update(instituteId, addAcademy)
                    .then((response) => {
                        console.log(response)
                        navigate('/admin-dashboard')
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            } else {
                Academy_Service.create(addAcademy)
                    .then((response) => {
                        console.log(response)
                        navigate('/admin-dashboard')
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        }
    }, [formerrors])


    useEffect(() => {
        //console.log(instituteId)
        Academy_Service.getuserbyId(instituteId)
            .then((response) => {
                const res_data = response.data;
                //console.log(res_data)
                setAddAcademy(res_data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])


    return (
        <>
            <AdminNavbar />
            <div className='container d-flex align-items-center mt-3'>
                <div className="mb-3">
                    <input type="text"
                        className="form-control"
                        id="academyName"
                        name="instituteName"
                        placeholder="Enter Academy Name"
                        onChange={InputEvent}
                        value={addAcademy.instituteName}
                    />
                </div>
                {formerrors.instituteName ? (<p className='alert alert-danger' role="alert">{formerrors.instituteName}</p>) : (<p className='d-none'></p>)}
                <div className="mb-3">

                    <input type="email"
                        className="form-control"
                        id="emailId"
                        name="email"
                        placeholder="Enter Academy Email"
                        value={addAcademy.email}
                        onChange={InputEvent}
                    />
                </div>
                {formerrors.email ? (<p className='alert alert-danger' role="alert">{formerrors.email}</p>) : (<p className='d-none'></p>)}
                <div className="mb-3">

                    <input type="text"
                        className="form-control"
                        id="academyLocation"
                        name="instituteAddress"
                        placeholder="Enter Academy Location"
                        value={addAcademy.instituteAddress}
                        onChange={InputEvent}
                    />
                </div>
                {formerrors.instituteAddress ? (<p className='alert alert-danger' role="alert">{formerrors.instituteAddress}</p>) : (<p className='d-none'></p>)}
                <div className="mb-3">

                    <input type="text"
                        className="form-control"
                        id="contactNumber"
                        name="mobile"
                        placeholder="Enter Academy Contact Number"
                        value={addAcademy.mobile}
                        onChange={InputEvent}
                    />
                </div>
                {formerrors.mobile ? (<p className='alert alert-danger' role="alert">{formerrors.mobile}</p>) : (<p className='d-none'></p>)}
                <div className="mb-3 flex-nowrap">

                    <input className="form-control"
                        id="academyDescription"
                        name="instituteDescription"
                        placeholder="Enter Academy Description"
                        value={addAcademy.instituteDescription}
                        onChange={InputEvent}
                    />
                </div>
                <div className="mb-3">
                    <input className="form-control"
                        id="img_url" //need to change
                        name="img_url"
                        placeholder="Enter Image url "
                        value={addAcademy.img_url}
                        onChange={InputEvent}
                    />
                </div>
                {
                    !instituteId ? <button type="button" id="addAcademy" className="btn btn-success" onClick={(e) => handleSubmit(e)}>
                        Add Academy
                    </button>
                        : <button type="button" id="editAcademy" className="btn btn-success" onClick={(e) => handleSubmit(e)}>
                            Edit Academy
                        </button>
                }
            </div>
        </>
    )
}

export default AddAcademy