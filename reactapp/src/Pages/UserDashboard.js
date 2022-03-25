import React from 'react'
import Usercard from '../component/Usercard'
import icon2 from '../component/image/img1.png'
import icon3 from '../component/image/img2.png'
import UserNavbar from '../component/UserNavbar'
import Search from '../component/Search'

function UserDashboard() {
    return (
        <>
            <UserNavbar />
            <Search/>
            <div className="row justify-content-md-center">
                <div className="col col-lg-2 p-3 mx-5" id="userAcademyGrid1">
                    <Usercard icon={icon3} />
                </div>
                <div className="col col-lg-2 p-3 mx-5" id="userAcademyGrid2">
                    <Usercard icon={icon2} />
                </div>
                <div className="col col-lg-2 p-3 mx-5" id="userAcademyGrid3">
                    <Usercard icon={icon3} />
                </div>
            </div>
            <div className="row justify-content-md-center" >
                <div className="col col-lg-2 p-3 mx-5" id="userAcademyGrid4">
                    <Usercard icon={icon3} />
                </div>
                <div className="col col-lg-2 p-3 mx-5" id="userAcademyGrid5">
                    <Usercard icon={icon2} />
                </div>

            </div>



        </>
    )
}

export default UserDashboard