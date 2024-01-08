import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex  bg-slate-900 text-white justify-between px-6 p-3'>
        <Link to={'/'}>Activity</Link>
        <Link to={'/inbox'}>Inbox</Link>
        <Link to={'/all'}>All Calls</Link>
    </div>
  )
}

export default Navbar