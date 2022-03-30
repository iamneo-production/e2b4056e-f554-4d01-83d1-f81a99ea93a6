import React from 'react'

function UserNavbar() {
    return (
     
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <a className="navbar-brand" href="/">Cricket Academy</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item ">
                            <a className="nav-link active"id="userAcademy" aria-current="page" href="/dashboard">Academy</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active"id="userEnrolledCourse"  aria-current="page" href="/enrollCourse">Enrolled Course</a>
                        </li>
                       
                    </ul>
                    <form className="d-flex">
                            <button className="btn btn-outline-danger" id="logout" type="submit">Log Out</button>
                    </form>
                </div>
            </div>
        </nav>
       
    )
}

export default UserNavbar