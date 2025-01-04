import axios from 'axios'
import React, { useState } from 'react'

const LogInPage = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const userData = {
        email,password
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:8080/api/blogUser/SignIn',userData)
        .then((response) => {
            const userId = response.data.userData._id
            return localStorage.setItem('userId',userId)
            })
            .catch((error) => {
                console.error(error)
                })
    }
  return (
    <div>
      <form action="" onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder='Enter Your Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default LogInPage
