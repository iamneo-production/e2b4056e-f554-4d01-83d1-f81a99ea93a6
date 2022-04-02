import React from 'react'
import UserNavbar from '../component/UserNavbar'
import CourseGrid from '../component/CourseGrid'
function ViewCourse() {
  return (
      <>
        <UserNavbar />
        <CourseGrid id='userCourseGrid1' name="Bowlers Session" duration="3 months" timing="6am to 6pm" nos="999" description="You will learn all the ins and out of bowling"  userType="2"/>
        <CourseGrid id='userCourseGrid2' name="Batsman Session" duration="3 months" timing="6am to 6pm" nos="999" description="You will learn all the ins and out of batting"  userType="2"/>
        

    </>
  )
}

export default ViewCourse