import axios from "axios";
import Auth_Header from './Auth_Header';

const BASE_URL = "http://localhost:8080/api/auth/admin/";


class Student_Service {
    getAllStudents() {
        return axios.get(BASE_URL + "viewStudents", { headers: Auth_Header() })
    }
    delete(id) {
        return axios.delete(BASE_URL + "deleteStudent/" + id, { headers: Auth_Header() })
    }
    getStudentbyId(id) {
        return axios.get(BASE_URL + "viewStudent/" + id, {
            headers: Auth_Header()
        })

    }
    
    editStudent(id, student) {
        return axios.put(BASE_URL + "editStudent/" + id, student, {
            headers: Auth_Header()
        })
    }
}
export default new Student_Service;
