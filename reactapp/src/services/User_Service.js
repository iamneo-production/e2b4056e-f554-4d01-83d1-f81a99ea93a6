import axios from "axios";
import Auth_Header from "./Auth_Header";

const BASE_URL = "http://localhost:8080/api/auth/";

class User_Service {

    post(student) {
        return axios.post(BASE_URL + "addAdmission", student, { headers: Auth_Header() })
    }
    getEnrolledCourses(userId) {
        return axios.get(BASE_URL + "viewenrolledcourses/" + userId, {
            headers: Auth_Header()
        })
    }
}

export default new User_Service;