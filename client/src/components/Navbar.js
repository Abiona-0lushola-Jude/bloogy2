import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <NavLink to='/'>All Blogs</NavLink>
        <NavLink to='/bloggy/create'>Create a Blog</NavLink>
        <NavLink to='/bloggy/news'>Movie News</NavLink>
        <NavLink to='/bloggy/todo'>Todo</NavLink>
    </nav>
  )
}

export default Navbar
