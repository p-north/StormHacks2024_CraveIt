import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const EatInFormPage = () => {
  return (
    <>
    
        <Link to='/'>
            <h1>Home</h1>
        </Link>
    
    <div>In Form</div>
    <Link to='/inResults'>Get Results</Link>
    </>

  )
}

export default EatInFormPage