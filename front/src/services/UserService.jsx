import axios from "axios";

const USERS_REST_API_URL = 'http://localhost:8080/users';


class UserService {
    getUsers() {
        return axios.get(USERS_REST_API_URL);
    }
    addStudent (student) {
        return axios.post(USERS_REST_API_URL, student);
    }
    deleteUser(id) {
        return axios.delete(USERS_REST_API_URL + '/' + id)
    }
    updateUser(id){
        return axios.put(USERS_REST_API_URL + '/' + id)
    }
}

export default new UserService()