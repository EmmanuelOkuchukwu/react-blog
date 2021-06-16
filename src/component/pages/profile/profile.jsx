import React, { useState, useEffect } from 'react';
import Navbar from '../../layout/navbar/navbar';
import './profile.scss';
import { AuthService } from "../../../service/authService";

const Profile = () => {
    const [mainUser, setMainUser] = useState({});
    useEffect(() =>{
        AuthService.getUser()
        .then((results) => {
            setMainUser(results);
            console.log('User:', results)
        })
    }, [])
    const currentUser = AuthService.getCurrentUser();
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }
    return (
        <main className="profile-container">
            <Navbar currentUser={currentUser} />
            <section className="banner-wrapper">
                <div className="user">
                    <h1>{mainUser.first_name}{' '}{mainUser.last_name}</h1>
                </div>
            </section>
            <nav className="sm-nav-wrapper">
                <ul className="nav">
                    <li><a className="li-a" href="">About</a></li>
                    <li><a className="li-a" href="">Add New Post</a></li>
                    <li><a className="li-a" href="">Photos</a></li>
                    <li><a className="li-a" href="">Users</a></li>
                    {/*<li><a href=""></a></li>*/}
                </ul>
            </nav>
            <section className="profile-content">
                <div className="main-content">
                    <div className="intro">
                        <h1>Introduction</h1>
                        <div className="userInfo">
                            <div className="user-text">
                                <h5>Description:</h5>
                                <p>{truncate(mainUser.description, 150)}</p>
                            </div>
                            <div className="user-text">
                                <h5>Name:</h5>
                                <p>{mainUser.first_name}{' '}{mainUser.last_name}</p>
                            </div>
                            <div className="user-text">
                                <h5>User Role:</h5>
                                <p>{mainUser.roles}</p>
                            </div>
                        </div>
                    </div>
                    <div className="blog-feed">
                        <h1>Mini Blog feed</h1>
                    </div>
                    <div className="photos">
                        <h1>Photos</h1>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Profile;
