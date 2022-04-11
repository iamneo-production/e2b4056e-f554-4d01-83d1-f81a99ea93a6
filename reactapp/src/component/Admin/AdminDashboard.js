import React from 'react'
import AcademyList from './AcademyList'
import AdminNavbar from './AdminNavbar'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Search from '../Pages/Search'

const AdminDashboard = () => {
    const [input, setInput] = useState("")
    const navigate = useNavigate()

    const inputHandler = (inp) => {
        setInput(inp)
    }
    return (
        <>
            <AdminNavbar />
            <Search inputHandler={inputHandler} />
            <div className='text-center'>
                <button type='button' id="adminEnrolledCourse" className="btn btn-primary btn-sm" style={{ marginBottom: "1.5rem", marginLeft: "0.8rem", marginTop: "1rem" }} onClick={() => navigate('/add-academy')}>Add Academy</button>
            </div>
            <AcademyList inp={input} />
        </>
    )
}

export default AdminDashboard