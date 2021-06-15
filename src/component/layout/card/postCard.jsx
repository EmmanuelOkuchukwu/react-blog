import React, { useState, useEffect } from 'react';
import './postCard.scss';
import axios from 'axios';

const PostCard = ({ post }) => {
    const [image, setImage] = useState([]);
    const [author, setAuthor] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(()=> {
        const getImage = axios.get(`http://localhost:8000/wp-json/wp/v2/media/${post.featured_media}`)
        const getAuthor = axios.get(`http://localhost:8000/wp-json/wp/v2/users/${post.author}`)
        Promise.all([getImage, getAuthor]).then(res => {
            setImage(res[0].data.media_details.sizes.full.source_url)
            setAuthor(res[1].data.name)
            setIsLoading(true);
        })
    }, [])
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }
    if(isLoading) {
        return (
            <div className="card" key={post.id}>
                <div className="card-header">
                    <img className="featured-media" src={image} alt={post?.title?.rendered} width="600" height="400" />
                    <h1 className="post-title">{post?.title?.rendered}</h1>
                </div>
                <div className="card-body">
                    <p>{truncate(post?.content?.rendered, 200)}</p>
                    <p>Written by{' '}{author}</p>
                </div>
            </div>
        )
    } return <p>Loading...</p>;

}

export default PostCard;
