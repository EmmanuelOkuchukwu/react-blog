import React, { useState, useEffect } from 'react';
import Navbar from '../../layout/navbar/navbar';
import {PostService} from "../../../service/postService";

const Post = ({ match }) => {
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
            <Navbar />
            <div>
                <h1>{post?.title?.rendered}</h1>
                <p>{post?.content?.rendered}</p>
            </div>
        </div>
    )
}

export default Post;
