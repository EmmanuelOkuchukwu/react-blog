import axios from 'axios';

async function getPosts() {
    try {
        const response = await axios.get('http://localhost/wordpress-blog/wp-json/wp/v2/posts')
        return response.data
    } catch(err) {
        console.log(err);
    }

}

export const PostService = {
    getPosts
}