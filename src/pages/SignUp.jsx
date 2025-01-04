import axios from 'axios'
import React, { useState } from 'react'

const SignUp = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const userData = {
        name,email,password
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:8080/api/blogUser/SignUp",userData)
        .then((response) => {
            console.log(response.data)
            })
            .catch((error) => {
                console.error(error)
                })
    }
  return (
    <div>
        <form action="" onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" placeholder='Enter Your Name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="text" placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder='Enter Your Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default SignUp
