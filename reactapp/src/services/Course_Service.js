import axios from "axios";
import Auth_Header from './Auth_Header';

const VIEW_URL = "http://localhost:8080/api/auth/admin/institutes";
const COURSE_URL = "http://localhost:8080/api/auth/admin"

class Course_Service {

    getCoursesInAcademy(academyId) {
        return axios.get(VIEW_URL + "/" + academyId + "/courses", {
            headers: Auth_Header()
        })
    }

    getCourseById(courseId) {
        return axios.get(COURSE_URL + "/" + "view-course" + "/" + courseId, {
            headers: Auth_Header()
        })
    }

    createCourseInAcademy(academyId, course) {
        return axios.post(VIEW_URL + "/" + academyId + "/create-course", course, {
            headers: Auth_Header()
        })
    }

    updateCourse(courseId, course) {
        return axios.put(COURSE_URL + "/" + "edit-course" + "/" + courseId, course, {
            headers: Auth_Header()
        })
    }

    deleteCourse(courseId) {
        return axios.delete(COURSE_URL + "/" + "delete-course" + "/" + courseId, {
            headers: Auth_Header()
        })
    }
}

export default new Course_Service;