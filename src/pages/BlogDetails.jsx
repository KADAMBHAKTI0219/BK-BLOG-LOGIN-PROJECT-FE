import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BlogDetails = () => {
    const postId = useParams()
    const [getSingleData,setSingleData] = useState([])
    const getSinglePostData = ()=>{
        axios.get(`http://localhost:9090/posts/getSinglePost/${postId.id}`,{withCredentials:true})
        .then(res=>setSingleData(res.data.
            getSingleBlogPost))
        .catch(err=>console.log(err))
    }
    const {title,content,publishedDate,author,tags} = getSingleData

    useEffect(()=>{
        getSinglePostData()
    },[])
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
      <p>{publishedDate}</p>
      <p>{author}</p>
      <p>{tags}</p>
    </div>
  )
}

export default BlogDetails
