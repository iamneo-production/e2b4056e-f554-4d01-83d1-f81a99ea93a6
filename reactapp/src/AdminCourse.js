import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import UserNavbar from '../component/UserNavbar'
import CourseGrid from '../component/CourseGrid'
function AdminCourse() {
  return (
      <>
        <UserNavbar />
        <center>
          <Button onClick={() => navigate(`/enrollcourse`)} variant="success" className="float-right" id="addCourse"style={{marginTop:'1rem'}}>Add Course</Button>
        </center>
        <CourseGrid id='userCourseGrid1' name="Bowlers Session" duration="3 months" timing="6am to 6pm" nos="999" description="You will learn all the ins and out of bowling" userType="1"/>
        <CourseGrid id='userCourseGrid2' name="Batsman Session" duration="3 months" timing="6am to 6pm" nos="999" description="You will learn all the ins and out of batting"  userType="1"/>
        <CourseGrid id='userCourseGrid2' name="Batsman Session" duration="3 months" timing="6am to 6pm" nos="999" description="You will learn all the ins and out of batting"  userType="1"/>
        

      </>
  )
  
  
}

export default AdminCourse
