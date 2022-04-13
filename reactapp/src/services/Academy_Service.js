import axios from "axios";
import Auth_Header from './Auth_Header';

const VIEW_URL = "http://localhost:8080/api/auth/admin/viewInstitutes";
const CREATE_URL = "http://localhost:8080/api/auth/admin/addInstitutes";
const EDIT_URL = "http://localhost:8080/api/auth/admin/editInstitute";
const DELETE_URL = "http://localhost:8080/api/auth/admin/deleteInstitute";
class Academy_Service {
    get() {
        return axios.get(VIEW_URL, { headers: Auth_Header() });
    }
    create(academy) {
        return axios.post(CREATE_URL, academy, { headers: Auth_Header() })
    }
    getuserbyId(academyId) {
        return axios.get(VIEW_URL + "/" + academyId, { headers: Auth_Header() })
    }
    update(academyId, academy) {
        return axios.put(EDIT_URL + "/" + academyId, academy, { headers: Auth_Header() })
    }
    delete(academyId) {
        return axios.delete(DELETE_URL + "/" + academyId, { headers: Auth_Header() });
    }
}

export default new Academy_Service;
