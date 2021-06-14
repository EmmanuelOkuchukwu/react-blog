import React from 'react';
import './postCard.scss';

const PostCard = ({ post }) => {
    return (
        <div className="card" key={post.id}>
            <div className="card-header">
                <h1 className="post-title">{post.title?.rendered}</h1>
            </div>
            <div className="card-body">
                <img src="" alt="" />
                <p></p>
            </div>
        </div>
    )
}

export default PostCard;
