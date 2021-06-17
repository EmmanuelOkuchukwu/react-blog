import React, { useState, useEffect } from 'react';
import Navbar from '../../layout/navbar/navbar';
import './profile.scss';
import { AuthService } from "../../../service/authService";
import {PostService} from "../../../service/postService";

const Profile = () => {
    const [mainUser, setMainUser] = useState({});
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const userPosts = AuthService.getUser()
    useEffect(() =>{
        AuthService.getUser()
        .then((results) => {
            setMainUser(results);
            console.log('User:', results);
            setIsLoading(true);
        })
    }, [])

    useEffect(() => {
        const fetchPosts = () => {
            let user = JSON.parse(localStorage.getItem('userInfo'));
            const id = user.id;
            PostService.getUserPost(id)
                .then((success) => {
                    setPosts(success);
                    // console.log('Results: ', success);
                })
        }
        return fetchPosts();
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
                    <img src="/assets/user-placeholder.png" className="user-placeholder" alt="" width="600" height="400" />
                    {isLoading ? <h1>{mainUser.first_name}{' '}{mainUser.last_name}</h1> : 'Loading...'}
                </div>
            </section>
            <nav className="sm-nav-wrapper">
                <ul className="nav">
                    <li><a className="li-a" href="/about">About</a></li>
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
                                {isLoading ? <p>{truncate(mainUser.description, 150)}</p> : 'Loading...'}
                            </div>
                            <div className="user-text">
                                <h5>Name:</h5>
                                {isLoading ? <p>{mainUser.first_name}{' '}{mainUser.last_name}</p> : 'Loading...'}
                            </div>
                            <div className="user-text">
                                <h5>User Role:</h5>
                                {isLoading ? <p>{mainUser.roles}</p> : 'Loading...'}
                            </div>
                        </div>
                    </div>
                    <div className="blog-feed">
                        <h1>Blog feed</h1>
                        <div className="posts">
                            {isLoading ?
                                <h2>{posts?.title?.rendered}</h2> &&
                                <p>{posts?.content?.rendered}</p>
                            : 'Loading...'}
                        </div>
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
