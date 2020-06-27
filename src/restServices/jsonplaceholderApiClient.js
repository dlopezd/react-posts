import axios from 'axios'

const baseUrlApi = 'https://jsonplaceholder.typicode.com/';

export const getPosts = _ => {
    const path = 'posts';

    return axios.get( baseUrlApi + path);
}

export const createPost = newPost => {
    const path = 'posts';

    return axios.post( baseUrlApi + path, newPost);
}