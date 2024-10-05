import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
    <div>HomePage</div>
    <div>

    <Link to='/eat-in-form'>Eat In</Link>
    </div>
    <div>

    <Link to='/eat-out-form'>Eat Out</Link>
    </div>
    </>
  )
}

export default HomePage