import React, { useState, useEffect } from 'react'
import AdminNavbar from './AdminNavbar'
import { useNavigate, useParams } from 'react-router-dom'
import Course_Service from '../../services/Course_Service'

const AddCourse = () => {
    const [addcourse, setAddCourse] = useState({
        courseName: "",
        courseDuration: "",
        courseDescription: ""
    })
    const [formerrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const navigate = useNavigate()
    const { instituteId } = useParams()
    const { courseId } = useParams()

    const InputEvent = (e) => {
        const { name, value } = e.target
        setAddCourse((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(addcourse))
        setIsSubmit(true)
    }

    const validate = (values) => {
        const errors = {}
        if (!values.courseName)
            errors.courseName = "Course Name is required!!"
        if (!values.courseDuration)
            errors.courseDuration = "Course Duration is required!!"
        if (!values.courseDescription)
            errors.courseDescription = "Course Description is required!!"
        return errors
    }

    useEffect(() => {
        console.log(formerrors);
        if (Object.keys(formerrors).length === 0 && isSubmit) {
            if (courseId) {
                Course_Service.updateCourse(courseId, addcourse)
                    .then((response) => {
                        //console.log(response)
                        navigate(-1)
                    })
                    .catch((e) => {
                        console.log(e)
                    })
            }
            else {
                Course_Service.createCourseInAcademy(instituteId, addcourse)
                    .then((response) => {
                        //console.log(response)
                        navigate(-1)
                    })
                    .catch((e) => {
                        console.log(e)
                    })
            }

        }
    }, [formerrors])

    useEffect(() => {
        Course_Service.getCourseById(courseId)
            .then((response) => {
                console.log(response)
                setAddCourse(response.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])




    return (
        <>
            <AdminNavbar />
            <div className='container d-flex align-items-center mt-3'>
                <div className="mb-3">
                    <input type="text"
                        className="form-control"
                        id="courseName"
                        name="courseName"
                        placeholder="Enter Course Name"
                        onChange={InputEvent}
                        value={addcourse.courseName}
                    />
                </div>
                {formerrors.courseName ? (<p className='alert alert-danger' role="alert">{formerrors.courseName}</p>) : (<p className='d-none'></p>)}
                <div className="mb-3">
                    <input type="text"
                        className="form-control"
                        id="courseDuration"
                        name="courseDuration"
                        placeholder="Enter Course Duration"
                        onChange={InputEvent}
                        value={addcourse.courseDuration}
                    />
                </div>
                {formerrors.courseDuration ? (<p className='alert alert-danger' role="alert">{formerrors.courseDuration}</p>) : (<p className='d-none'></p>)}
                <div className="mb-3">
                    <input type="text"
                        className="form-control"
                        id="courseDescription"
                        name="courseDescription"
                        placeholder="Enter Course Description"
                        onChange={InputEvent}
                        value={addcourse.courseDescription}
                    />
                </div>
                {formerrors.courseDescription ? (<p className='alert alert-danger' role="alert">{formerrors.courseDescription}</p>) : (<p className='d-none'></p>)}
                {
                    !courseId
                        ? <button type="button" id="addCourse" className="btn btn-success" onClick={(e) => handleSubmit(e)}>
                            Add Course
                        </button>
                        : <button type="button" id="editCourse" className="btn btn-success" onClick={(e) => handleSubmit(e)}>
                            Edit Course
                        </button>
                }
            </div>
        </>
    )
}

export default AddCourse