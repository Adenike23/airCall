import React from 'react'
import { FaPhoneAlt, FaRegUser } from 'react-icons/fa'
import { IoIosKeypad } from 'react-icons/io'
import { BsArchiveFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex justify-between items-center p-3 w-[100%] space-x-5 fixed bottom-0 text-xl bg-slate-900 opacity-100 text-white'>
        <Link to={'/'}><FaPhoneAlt /></Link>
        <span><FaRegUser /></span>
        <Link to={'/keypad'}><IoIosKeypad /></Link>
        <Link  to={'/archivedCalls'}><BsArchiveFill /></Link>
    </div>
  )
}

export default Footer