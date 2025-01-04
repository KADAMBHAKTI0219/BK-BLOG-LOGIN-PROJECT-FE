import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BlogEditForm = () => {
    const postId = useParams()

    const editFormData = {
        title: '',
        content: '',
        author: '',
        tags:''
    }
    const [formData,setFormData] = useState(editFormData)
    const {title,content,author,tags} = formData
    const getData = ()=>{
        axios.get(`http://localhost:9090/posts/getSinglePost/${postId.id}`,{withCredentials:true})
        .then(res=>setFormData(res.data.
            getSingleBlogPost))
        .catch(err=>console.log(err))
    }
    const handleChange = (e)=>{
        const {name,value} = e.target
        setFormData({...formData,[name]:value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:9090/posts/updateBlogPost/${postId.id}`,formData,{withCredentials:true})
        .then(res=>set(res.data.updateBlogPost))
        .catch(err=>console.log(err))

    }

    useEffect(()=>{
        getData()
    },[])
  return (
    <div>
      <form action="" onSubmit={(e)=>handleSubmit(e)}>
  
              <input type="text" onChange={(e)=>handleChange(e)} name='title' value={title} placeholder='title'/>
              <input type="text" onChange={(e)=>handleChange(e)} name='content' value={content} placeholder='content'/>
              <input type="text" onChange={(e)=>handleChange(e)} name='tags' value={tags} placeholder='tags'/>
              <input type="text" onChange={(e)=>handleChange(e)} name='author' value={author} placeholder='author'/>
              <input type="submit" />

      </form>
    </div>
  )
}

export default BlogEditForm
