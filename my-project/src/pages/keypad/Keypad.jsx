import React, { useEffect, useRef, useState } from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoIosBackspace } from 'react-icons/io'

const Inbox = () => {
    const [dial, setDial] = useState('')
    const inputRef = useRef()
    const handleCancel = (e) => {
        e.preventDefault()
        setDial(dial.slice(0, -1))
    }
    useEffect(() => {
        inputRef.current?.focus()
    })
  return (
    <div>
      <form className='mx-auto w-[85%] mt-[2rem]'>
        <input type="text" name="" id="" value={dial} onChange={() => {}} ref={inputRef} className='w-[95%] mx-auto p-3 px-[10rem] m-3 outline-none'/>
        <div className='grid grid-cols-3 mt-[4rem]'>
          <input type='button' value='1' onClick={(e) => setDial(dial + e.target.value)} className='rounded-full py-3 px-5 bg-black text-white mx-auto opacity-90 text-2xl w-[30%] text-center my-3'/>
          <input type='button' value='2' onClick={(e) => setDial(dial + e.target.value)} className='rounded-full py-3 px-5 bg-black text-white mx-auto opacity-90 text-2xl w-[30%] text-center my-3'/>
          <input type='button' value='3' onClick={(e) => setDial(dial + e.target.value)} className='rounded-full py-3 px-5 bg-black text-white mx-auto opacity-90 text-2xl w-[30%] text-center my-3'/>
          <input type='button' value='4' onClick={(e) => setDial(dial + e.target.value)} className='rounded-full py-3 px-5 bg-black text-white mx-auto opacity-90 text-2xl w-[30%] text-center my-3'/>
          <input type='button' value='5' onClick={(e) => setDial(dial + e.target.value)} className='rounded-full py-3 px-5 bg-black text-white mx-auto opacity-90 text-2xl w-[30%] text-center my-3'/>
          <input type='button' value='6' onClick={(e) => setDial(dial + e.target.value)} className='rounded-full py-3 px-5 bg-black text-white mx-auto opacity-90 text-2xl w-[30%] text-center my-3'/>
          <input type='button' value='7' onClick={(e) => setDial(dial + e.target.value)} className='rounded-full py-3 px-5 bg-black text-white mx-auto opacity-90 text-2xl w-[30%] text-center my-3'/>
          <input type='button' value='8' onClick={(e) => setDial(dial + e.target.value)} className='rounded-full py-3 px-5 bg-black text-white mx-auto opacity-90 text-2xl w-[30%] text-center my-3'/>
          <input type='button' value='9' onClick={(e) => setDial(dial + e.target.value)} className='rounded-full py-3 px-5 bg-black text-white mx-auto opacity-90 text-2xl w-[30%] text-center my-3'/>
          <input type='button' value='*' onClick={(e) => setDial(dial + e.target.value)} className='rounded-full py-3 px-5 bg-black text-white mx-auto opacity-90 text-2xl w-[30%] text-center my-3'/>
          <input type='button' value='0' onClick={(e) => setDial(dial + e.target.value)} className='rounded-full py-3 px-5 bg-black text-white mx-auto opacity-90 text-2xl w-[30%] text-center my-3'/>
          <input type='button' value='#'onClick={(e) => setDial(dial + e.target.value)} className='rounded-full py-3 px-5 bg-black text-white mx-auto opacity-90 text-2xl w-[30%] text-center my-3'/>
        </div>
        <div className='flex justify-center items-center'>
            <button type="submit" className='rounded-full py-3 px-5 bg-green-500 text-white opacity-90 text-2xl w-[12%] text-center my-3'><FaPhoneAlt/></button>
        <div onClick={(e) => {handleCancel(e)}} className=''><button className='text-3xl'><IoIosBackspace/></button></div>
        </div>
      </form>
    </div>
  )
}

export default Inbox