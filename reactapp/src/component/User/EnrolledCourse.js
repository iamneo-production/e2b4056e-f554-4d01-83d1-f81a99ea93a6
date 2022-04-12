import React from 'react'
import UserNavbar from './UserNavbar';
import { useState, useEffect } from 'react';
import User_Service from '../../services/User_Service';
import auth_id from '../../services/auth_id';
const EnrolledCourse = () => {

    const [enrolledcourses, setEnrolledCourses] = useState([]);

    const listEnrolledCourses = () => {
        User_Service.getEnrolledCourses(auth_id())
            .then((response) => {
                setEnrolledCourses(response.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }


    useEffect(() => {
        listEnrolledCourses()
    }, [])



    return (
        <>
            <UserNavbar />
            <div className='container mt-2'>
            <div className='row'  >
                {
                    enrolledcourses.map(enrolledcourse => (
                        <div className="col-4 mb-3">
                        <div className="card" style={{ width: "18rem" }}>
                                    <div className="card-body ">
                                    <p className="card-text" ><strong> Course Name :{enrolledcourse.coursess[0].course_name}</strong></p>
                                    <p className="card-text" ><strong>Course Duration : {enrolledcourse.coursess[0].course_duration}</strong></p> 
                                    <p className="card-text" ><strong>Course Description : {enrolledcourse.coursess[0].course_description}</strong></p>
                                </div>       
                        </div>
                        </div>   
                                
                    ))
                }
                </div>   
                </div>
                                
           
        </>
    )
}

export default EnrolledCourse