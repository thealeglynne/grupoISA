// utils/api.js
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = async (page = 1, limit = 10) => {
    const response = await axios.get(`${API_URL}?_page=${page}&_limit=${limit}`);
    return response.data;
};

export const deletePost = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};

export const createPost = async (post) => {
    const response = await axios.post(API_URL, post);
    return response.data;
};

export const updatePost = async (id, post) => {
    const response = await axios.put(`${API_URL}/${id}`, post);
    return response.data;
};
