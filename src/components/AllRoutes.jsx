import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LogInPage from '../pages/LogInPage'
import BlogList from '../pages/BlogList'
import BlogEditForm from '../pages/BlogEditForm'
import BlogDetails from '../pages/BlogDetails'
import BlogForm from '../pages/BlogForm'
import SignUp from '../pages/SignUp'

const AllRoutes = () => {
  return (
    <div>
     <Routes>
        <Route path="/blogList/:userId" element={<BlogList />} />
        <Route path="/editPost/:id" element={<BlogEditForm />} />
        <Route path="/getSinglePostData/:id" element={<BlogDetails />} />
        <Route path="/addBlogPost" element={<BlogForm />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signUp" element={<SignUp/>}/>

     </Routes>

    </div>
  )
}

export default AllRoutes
