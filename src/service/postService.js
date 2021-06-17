import axios from 'axios';
import AuthHeader from "../authHeader";

async function getPosts() {
    try {
        const response = await axios.get('http://localhost:8000/wp-json/wp/v2/posts')
        return response.data;
    } catch(err) {
        console.log(err);
    }
}

async function getPost(id) {
    try {
        const response = await axios.get(`http://localhost:8000/wp-json/wp/v2/posts/${id}`)
        return response.data;
    } catch(err) {
        console.log(err);
    }
}

async function getUserPost(id) {
    try {
        const response = await axios.get(`http://localhost:8000/wp-json/wp/v2/posts/${id}?_limit=2`,{
            headers: AuthHeader()
        })
        return response.data;
    } catch(err) {
        console.log(err);
    }
}

// async function getMedia(featured_media) {
//     try {
//         const response = await axios.get(`http://localhost:8000/wp-json/wp/v2/media/${featured_media}`)
//         return response.data;
//     } catch(err) {
//         console.log(err)
//     }
// }

export const PostService = {
    getPosts,
    // getMedia
    getPost,
    getUserPost
}
