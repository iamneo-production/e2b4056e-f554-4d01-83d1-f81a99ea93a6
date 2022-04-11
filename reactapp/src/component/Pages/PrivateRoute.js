import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
const useAuth = () => {
    const user = localStorage.getItem('user')
    let user2
    /*if (user) {
        return true;
    } else {
        return false;
    }*/
    if (user) {
        user2 = JSON.parse(user)
    }
    if (user2) {
        return {
            auth: true,
            role: user2.roles[0]
        }
    } else {
        return {
            auth: false,
            role: null
        }
    }
}

const PrivateRoute = (props) => {
    const { auth, role } = useAuth();

    if (props.rolerequired) {
        return auth ? (props.rolerequired === role ? (
            <Outlet />
        ) : (<Navigate to="/accessdenied" />)
        ) : (
            <Navigate to="/" />
        )
    }
    else {
        return auth ? <Outlet /> : <Navigate to="/" />
    }
    /*return auth ? <Outlet /> : <Navigate to="/" />*/
}

export default PrivateRoute