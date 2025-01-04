import axios from 'axios'
import React, { useState } from 'react'

const BlogForm = () => {
    const initialData = {
        title: '',
        content: '',
        author: '',
        tags:''
    }
    const [formData,setFormData] = useState(initialData)

    const handleChange = (e)=>{
        const {name,value} = e.target
        setFormData({...formData,[name]:value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:9090/posts/createBlogPost",formData,{withCredentials:true})
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))

    }
    const {title,content,author,tags} = formData

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

export default BlogForm
