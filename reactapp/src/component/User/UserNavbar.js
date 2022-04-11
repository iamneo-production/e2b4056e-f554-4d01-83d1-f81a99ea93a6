import React from 'react'

import Auth_Service from '../../services/Auth_Service'
import { useNavigate } from 'react-router-dom'


function UserNavbar() {

    const navigate = useNavigate()

    const handleLogout = () => {
        Auth_Service.logout()
        navigate('/')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <p className="h2">Cricket Academy</p>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item ">
                            <a className="nav-link active" id="userAcademy" aria-current="page" href='/user-dashboard'>Academy</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" id="userEnrolledCourse" aria-current="page" href='/enrolledcourses'>Enrolled Course</a>
                        </li>

                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-danger" id="logout" type="submit" onClick={handleLogout}>Log Out</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default UserNavbar