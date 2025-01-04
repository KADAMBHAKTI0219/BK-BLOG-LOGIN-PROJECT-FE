import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {
    const [blogList, setBlogList] = useState([]);
    const userId = localStorage.getItem('userId');

    const getBlogListData = () => {
        axios
            .get(`http://localhost:8080/posts/getAllPosts/${userId}`, { withCredentials: true })
            .then((res) => {
                setBlogList(res.data); // Assuming `res.data` contains the list of blogs
            })
            .catch((err) => console.log(err));
    };

    const handleDelete = (postId) => {
        axios
            .delete(`http://localhost:8080/posts/deleteBlogPost/${postId}`, { withCredentials: true })
            .then(() => {
                getBlogListData(); // Refresh the blog list after deletion
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getBlogListData();
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Blog Author</th>
                    <th>Blog Title</th>
                    <th>Remove</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {blogList.map((blog) => (
                    <tr key={blog._id}>
                        <td>
                            <Link to={`/getSinglePostData/${blog._id}`}>{blog.author}</Link>
                        </td>
                        <td>{blog.title}</td>
                        <td>
                            <button onClick={() => handleDelete(blog._id)}>Delete</button>
                        </td>
                        <td>
                            <Link to={`/editPost/${blog._id}`}>Edit</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default BlogList;
