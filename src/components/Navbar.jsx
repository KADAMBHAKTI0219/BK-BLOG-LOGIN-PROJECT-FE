import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <nav>
     <NavLink to='/blogList/:userId'  activeClassName="active">BlogList</NavLink>
     <NavLink to='/addBlogPost'  activeClassName="active">Add Blog</NavLink>
     <NavLink to='/login'  activeClassName="active">Login</NavLink>
     <NavLink to='/signUp' activeClassName="active">SignUp</NavLink>
     </nav>
    </div>
  )
}

export default Navbar
