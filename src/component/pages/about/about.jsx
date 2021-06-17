import React, { useState, useEffect } from 'react';
import Navbar from '../../layout/navbar/navbar';
import { AuthService } from '../../../service/authService';
import './about.scss';
import moment from 'moment';

const About = () => {
    const [user, setUser] = useState({});
    const currentUser = AuthService.getCurrentUser();

    useEffect(() => {
        return fetchUser();
    }, [])

    const fetchUser = () => {
        AuthService.getUser()
            .then((success) => {
                setUser(success);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="about-container">
            <Navbar currentUser={currentUser} />
            <div className="about-profile">
                <div className="profile-card">
                    <div className="profile-card-header">
                        <h1>About You</h1>
                        <div className="img-container">
                            <img src="/assets/user-placeholder.png" alt="" className="img-responsive" width="600" height="400" />
                        </div>
                    </div>
                    <div className="profile-card-body">
                        <div className="profile-info">
                            <div className="profile-details">
                                <p>Name:</p>
                                <span>
                                <p>{user.first_name}</p>
                                <p>{user.last_name}</p>
                            </span>
                            </div>
                            <div className="profile-details">
                                <p>Email:</p>
                                <p>{user.email}</p>
                            </div>
                            <div className="profile-details">
                                <p>Username:</p>
                                <p>{user.username}</p>
                            </div>
                            <div className="profile-details">
                                <p>Date Joined:</p>
                                <p>{moment(user.registered_date).format('MMMM Do YYYY')}</p>
                            </div>
                            <div className="profile-details">
                                <p>Role:</p>
                                <p>{user.roles}</p>
                            </div>
                            {/*<div className="profile-details">*/}
                            {/*    <p>Bio:</p>*/}
                            {/*    <p>{user.description}</p>*/}
                            {/*</div>*/}
                            <button className="btn-edit-user">Edit details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
