import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const EatOutFormPage = () => {
  return (
    <>
    <Link to='/'>
            <h1>Home</h1>
     </Link>
    <div>Out Form</div>
    <Link to="/outResults">Results Here</Link>
    </>
  )
}

export default EatOutFormPage