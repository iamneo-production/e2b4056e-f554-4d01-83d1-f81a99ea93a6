import React from 'react'
import Search from '../Pages/Search'
import UserAcademyList from './UserAcademyList'
import UserNavbar from './UserNavbar'
import { useState } from 'react'

function UserDashboard() {
    const [input, setInput] = useState("")

    const inputHandler = (inp) => {
        setInput(inp)
    }

    return (
        <>
            <UserNavbar />
            <Search inputHandler={inputHandler} />
            <UserAcademyList inp={input} />
        </>
    )
}

export default UserDashboard