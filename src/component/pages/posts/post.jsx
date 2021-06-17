import React, { useState, useEffect } from 'react';
import Navbar from '../../layout/navbar/navbar';
import { PostService } from "../../../service/postService";
import { AuthService } from "../../../service/authService";
import './post.scss';

const Post = ({ match }) => {
    const currentUser = AuthService.getCurrentUser();
    const [post, setPost] = useState({});
    useEffect(() => {
        return fetchPost();
    }, [])

    const fetchPost = () => {
        const id = match.params.id;
        PostService.getPost(id)
            .then((results) => {
                setPost(results);
                console.log('Post: ', results);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="post-container">
            <Navbar currentUser={currentUser} />
            <div className="post">
                <div className="post-wrapper">
                    <h1>{post?.title?.rendered}</h1>
                    <p dangerouslySetInnerHTML={{ __html: post?.content?.rendered}} />
                </div>
            </div>
        </div>
    )
}

export default Post;
