import axios from 'axios';

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

export const AuthService = {
    onLogin,
    onLogout,
    getCurrentUser
}
