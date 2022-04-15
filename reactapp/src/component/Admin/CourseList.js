import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CourseGrid from '../User/CourseGrid'
import { Button } from 'react-bootstrap'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Course_Service from '../../services/Course_Service'
import { useState, useEffect } from 'react'
import Auth_Service from '../../services/Auth_Service'

const CourseList = (props) => {
    const { instituteId } = useParams()
    const navigate = useNavigate()
    const [courses, setCourses] = useState([])
    const [role, setRole] = useState(null)

    const filteredData = courses.filter((course) => {
        //console.log(props)
        if (props.inp === "") {
            return course;
        } else {
            return course.courseName.toLowerCase().includes(props.inp);
        }
    });



    const listCourses = () => {
        Course_Service.getCoursesInAcademy(instituteId)
            .then((response) => {
                //console.log(response.data)
                setCourses(response.data)
            })
            .catch((e) => {
                console.log("An error occured - " + e);
            })
    }

    const handleDelete = (id) => {
        Course_Service.deleteCourse(id)
            .then((response) => {
                listCourses()
            })
            .catch((e) => {
                console.log(e)
            })
    }

    useEffect(() => {
        listCourses()
        setRole(Auth_Service.getCurrentUser().roles[0])
    }, [])

    return (
        <>
            {role === 'ROLE_ADMIN' ? <div className='text-center position-relative'><Button variant="primary" className="mt-3 ml-auto" id="addCourse" onClick={() => navigate(`/academy/${instituteId}/create-course`)}>Add Courses</Button></div> : <></>}
            <div>
                {
                    filteredData.map(course => (
                        <div className='d-flex justify-content-center align-items-center flex-column mx-auto mt-3' style={{ width: "45rem", backgroundColor: "white" }} key={course.courseId}>
                            <CourseGrid name={course.courseName} desc={course.courseDescription} dur={course.courseDuration} courseId={course.courseId} />
                            {role === 'ROLE_ADMIN'
                                ? <div className='d-flex justify-content-center align-items-center mb-2'>
                                    <Button variant="success" id="editCourse" style={{ marginTop: '0.5rem', marginRight: '0.8rem' }} onClick={() => navigate(`/edit-course/${course.courseId}`)}>
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </Button>
                                    <Button variant="danger" id="deleteCourse" style={{ marginTop: '0.5rem' }} onClick={() => handleDelete(course.courseId)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </Button>
                                </div> : <div className='text-center'><Button variant='success' style={{ marginBottom: '0.8rem' }} onClick={() => navigate(`/course-enroll/${course.courseId}`)}>Enroll Course</Button></div>}
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default CourseList