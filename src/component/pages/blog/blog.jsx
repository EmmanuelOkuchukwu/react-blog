import React, { useState, useEffect } from 'react';
import './blog.scss';
import Navbar from '../../layout/navbar/navbar';
import { PostService } from '../../../service/postService';
import PostCard from '../../layout/card/postCard';
import { AuthService } from '../../../service/authService';

export default function Blog() {
    let _isMounted = false;

    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState([]);
    const currentUser = AuthService.getCurrentUser();

    useEffect(() => {
        const fetchPosts = () => {
        PostService.getPosts()
            .then((result) => {
                setPosts(result)
                console.log('Data: ', result)
            })
            .catch(err => console.log(err));
        }
        return fetchPosts();
    },[]);

    return (
        <div className="main-container">
            <Navbar currentUser={currentUser} />
            <div className="blog-container">
                <div className="blog-heading">
                    {currentUser ? (
                        <h1>Welcome back {currentUser.user_nicename}</h1>
                    ) : (
                        <h1>Welcome to Reactive Blog</h1>
                    )}
                </div>
                <div className="blog">
                    {posts?.map(post => (
                        <PostCard post={post} />
                    ))}
                </div>
            </div>
        </div>
    )
}
