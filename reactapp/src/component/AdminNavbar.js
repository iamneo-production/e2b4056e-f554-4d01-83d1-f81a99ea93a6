import React from 'react'
import { NavLink } from 'react-router-dom';
function AdminNavbar() {
    return (
        <div>

            <nav class="navbar navbar-fixed-top">
                <div className="container-fluid d-flex justify-content-between">
                    <ul class="nav"></ul>
                    <ul class="nav">
                        <li class="nav-item">
                            <a class="navbar-brand fw-bold" aria-current="page" href="/" style={{ color: "white" }}>Cricket Academy</a>
                        </li>
                    </ul>
                    <ul class="nav">
                        <li class="nav-item">
                            <button type="button" id="logout" class="btn btn-outline-light">Log Out</button>
                        </li>
                    </ul>
                </div>
            </nav>

            <div >
                <div class="row my-4">
                    <div class="col btn-group mx-5">
                        <button type="button" id="adminAcademy" class="btn btn-outline-light ">
                            <NavLink to="/institute" className="link" activeClassName="active" exact>
                                Academy
                            </NavLink></button>
                   
                        <button type="button" id="adminStudent" class="btn btn-outline-light ">Student</button>
                        <button type="button" id="adminEnrolledCourse" class="btn btn-outline-light ">
                            <NavLink to="/adminCourse" className="link" activeClassName="active" exact>
                                Course
                            </NavLink>
                        </button>


                    </div>
                    <div class="col mx-5">
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
                            <button class="btn btn-outline-light" id="searchButton" type="submit" >Search</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AdminNavbar