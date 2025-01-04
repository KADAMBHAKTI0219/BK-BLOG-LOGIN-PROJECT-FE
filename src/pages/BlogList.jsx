import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const BlogList = () => {
    const [BlogList,setBloglist]=useState([])
    const userId = localStorage.getItem("userId")
    const getBlogListData = ()=>{
        axios.get(`http://localhost:8080/posts/getAllPosts/${userId}`,{withCredentials:true}).then(res=>console.log(res.data
        ))
        .catch(err=>console.log(err))
    }

    const handleDelete = (postId)=>{
        axios.delete(`http://localhost:8080/posts/deleteBlogPost/${postId}`,{withCredentials:true
            }).then(res=>getBlogListData())
            .catch(err=>console.log(err))
    }


    useEffect(()=>{
        getBlogListData()

    },[])
  return (
    <table>
        <thead>
            <tr>
                <th>Blog Author</th>
                <th>Remove</th>
                <th>Edit</th>
            </tr>
        </thead>
        <tbody>
        {/* {BlogList.map(el=>(
        <tr key={el._id}>
            <td><Link to={`/getSinglePostData/${el._id}`}>{el.author}</Link></td>
            <td><button onClick={()=>handleDelete(el._id)}>Delete</button></td>
            <td><Link to={`/editPost/${el._id}`}>Edit</Link></td>
        </tr>
      ))} */}
        </tbody>
    </table>
  )
}

export default BlogList
