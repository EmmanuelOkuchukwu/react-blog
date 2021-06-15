import React, { useState } from 'react';
import Navbar from '../../layout/navbar/navbar';
import './login.scss';
import { AuthService } from '../../../service/authService';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [hideLink, setHideLink] = useState(false);
    const history = useHistory();
    function handleLogin(evt) {
        evt.preventDefault();
        let formData = {
            username: username,
            password: password
        }
        AuthService.onLogin(formData)
            .then((success) => {
                history.push('/');
                console.log('Results', success);
            })
            .catch(err => console.log(err));
    }
    return (
        <main className="login-container">
            <Navbar hideLink={hideLink} />
            <div className="login-content">
                <div className="login-form">
                    <form onSubmit={handleLogin}>
                        <h1><i className="fas fa-user-lock" />{' '}Login</h1>
                        <input type="text" name="username" placeholder="Enter your username here" value={username} onChange={(evt) => setUsername(evt.target.value)} />
                        <input type="password" name="password" placeholder="Enter your password here" value={password} onChange={(evt) => setPassword(evt.target.value)} />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Login;
