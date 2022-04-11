import React from 'react'
import UserNavbar from './UserNavbar'
import CourseList from '../Admin/CourseList'
import Search from '../Pages/Search'
import { useState } from 'react'
function UserViewCourse() {
    const [input, setInput] = useState("")
    const inputHandler = (inp) => {
        setInput(inp)
    }

    return (
        <>
            <UserNavbar />
            <Search inputHandler={inputHandler} />
            <CourseList inp={input} />
        </>
    )
}

export default UserViewCourse