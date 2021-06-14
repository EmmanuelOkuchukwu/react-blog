import React, { useState, useEffect } from 'react';
import './blog.scss';
import Navbar from '../../layout/navbar/navbar';
import { PostService } from '../../../service/postService';
import PostCard from '../../layout/card/postCard';

export default function Blog() {
    const [posts, setPosts] = useState([]);
    useEffect(()=> {
        const fetchPosts = () => {
        PostService.getPosts()
            .then((result) => {
                setPosts(result)
                console.log('Data: ', result)
            }).catch(err => console.log)
        }
        return fetchPosts();
    },[])
    
    return (
        <div className="main-container">
            <Navbar />
            <div className="blog-container">
                <div className="blog-heading">
                    <h1>Blog</h1>
                </div>
                <div className="blog-body">
                    <div className="blog">
                        {posts?.map(post => (
                            <PostCard post={post} />
                        ))}
                    </div>
                    <div className="side-collumn">
                        <div className="about-me-section">
                            <h1>About Me</h1>
                        </div>
                        <div className="popular-posts">
                            <h1>Popular Posts</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
