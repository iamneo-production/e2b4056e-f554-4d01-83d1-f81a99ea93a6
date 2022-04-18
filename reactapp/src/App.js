import { Route, Routes } from 'react-router-dom';
import Login from './component/Pages/Login';
import Registration from './component/Pages/Registration';
import UserDashboard from './component/User/UserDashboard';
import PrivateRoute from './component/Pages/PrivateRoute';
import AdminDashboard from './component/Admin/AdminDashboard';
import AddAcademy from './component/Admin/AddAcademy';
import AccessDenied from './component/Pages/AccessDenied';
import EnrollCourse from './component/User/EnrollCourse';
import UserViewCourse from './component/User/UserViewCourse';
import ViewCourses from './component/Admin/ViewCourses';
import AddCourse from './component/Admin/AddCourse';
import EnrollingCourse from './component/User/EnrollingCourse';
import EnrolledCourse from './component/User/EnrolledCourse';
import StudentList from './component/Admin/StudentList';
import StudentDetails from './component/Admin/StudentDetails';

function App() {
  return (
    <div className="App" >
      <div>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Registration />}></Route>

          {/*For Private Routes*/}
          <Route element={<PrivateRoute />}>

            {/*Routes for user role*/}
            <Route element={<PrivateRoute rolerequired="ROLE_USER" />}>
              <Route path="/user-dashboard" element={<UserDashboard />}></Route>
              <Route path='/enrollcourse' element={<EnrollCourse />}></Route>
              <Route path='/:instituteId/courses' element={<UserViewCourse />}></Route>
              <Route path='/course-enroll/:courseId' element={<EnrollingCourse />}></Route>
              <Route path='/enrolledcourses' element={<EnrolledCourse />}></Route>
            </Route>

            {/*Routes for admin role*/}
            <Route element={<PrivateRoute rolerequired="ROLE_ADMIN" />}>
              <Route path="/add-academy" element={<AddAcademy />}></Route>
              <Route path="/admin-dashboard" element={<AdminDashboard />}></Route>
              <Route path="/edit-academy/:instituteId" element={<AddAcademy />}></Route>
              <Route path='/academy/:instituteId/courses' element={<ViewCourses />}></Route>
              <Route path="/academy/:instituteId/create-course" element={<AddCourse />}></Route>
              <Route path="/edit-course/:courseId" element={<AddCourse />}></Route>
              <Route path='/view-students' element={<StudentList />}></Route>
              <Route path='/student-details/:admissionid' element={<StudentDetails />}></Route>
            </Route>
          </Route>

          <Route path="/accessdenied" element={<AccessDenied />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
