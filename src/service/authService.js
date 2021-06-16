import axios from 'axios';
import AuthHeader from '../authHeader';

const Api_url = 'http://localhost:8000';

function onLogin(formData) {
    return axios.post(`${Api_url}/wp-json/jwt-auth/v1/token`, (formData), {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            if(response.data.token) {
                localStorage.setItem('currentUser', JSON.stringify(response.data))
            }
            return response.data;
        })
}

function onLogout() {
    localStorage.clear();
    setTimeout(() => window.location.reload(), 1000);
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

function getUser() {
    return axios.get(`${Api_url}/wp-json/wp/v2/users/me/?context=edit`,{
        headers: AuthHeader()
    })
        .then((response) => {
            if(response.status === 200) {
                return response.data;
            }
        })
        .catch((error) => {
            console.log(error);
        })
}

export const AuthService = {
    onLogin,
    onLogout,
    getCurrentUser,
    getUser
}
