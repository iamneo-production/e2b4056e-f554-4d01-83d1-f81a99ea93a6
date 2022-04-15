import React from 'react'
import { useState } from 'react'

import AdminNavbar from './AdminNavbar'

import Search from '../Pages/Search'
import CourseList from './CourseList'

const ViewCourses = () => {
    const [input, setInput] = useState("")
    const inputHandler = (inp) => {
        setInput(inp)
    }

    return (
        <>
            <AdminNavbar />
            <Search inputHandler={inputHandler} />
            <CourseList inp={input} />
        </>
    )
}

export default ViewCourses 