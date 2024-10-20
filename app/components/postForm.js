"use client";
import React, { useState, useEffect } from 'react';
import { createPost, updatePost } from '../services/api'; // API functions to handle post creation and update
import "../styles/postForm.css"; // CSS file for styling the form

const PostForm = ({ post, onClose }) => {
    const [title, setTitle] = useState(''); // State to manage the post's title
    const [body, setBody] = useState(''); // State to manage the post's content

    // Effect to load the post data if editing an existing post
    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setBody(post.body);
        }
    }, [post]);

    // Handles form submission for creating or updating a post
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            title,
            body,
        };

        if (post) {
            // If post exists, update the post
            await updatePost(post.id, newPost); 
        } else {
            // If no post exists, create a new post
            await createPost(newPost); 
        }

        onClose(); // Close the form modal after submission
    };

    return (
        <div className="modal">
            <h2>{post ? 'Editar Post' : 'Crear Post'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Tittle:</label>
                    <input 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea 
                        value={body} 
                        onChange={(e) => setBody(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">{post ? 'Actualizar' : 'Crear'}</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default PostForm;
