import React from 'react'
import Auth_Service from '../../services/Auth_Service'
import { useNavigate, Link } from 'react-router-dom'

function AdminNavbar() {
    const navigate = useNavigate()

    const handleLogout = () => {
        Auth_Service.logout()
        navigate('/')
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <p className="h2">Cricket Academy</p>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item ">
                            <Link className="nav-link active" id="adminAcademy" aria-current="page" to="/admin-dashboard" >Academy</Link>
                        </li>
                        {/*<li class="nav-item">
                            <a class="nav-link active" id="adminStudent" aria-current="page" href="#">Courses</a>
                        </li>*/}
                        <li class="nav-item">
                            <Link class="nav-link active" id="adminEnrolledCourse" aria-current="page" to="/view-students">Students</Link>
                        </li>

                    </ul>
                    <form class="d-flex">
                        <button class="btn btn-outline-danger" id="logout" type="submit" onClick={handleLogout}>Log Out</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default AdminNavbar