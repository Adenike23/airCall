import React from 'react'
import { useState, useEffect } from 'react'
import {BiSolidPhone} from 'react-icons/bi'
import { BsTelephoneInbound, BsFillTelephoneOutboundFill } from 'react-icons/bs'
import Inbox from '../inbox/Inbox'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const baseURL = 'https://cerulean-marlin-wig.cyclic.app/'
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [calls, setCalls] = useState([])

    const getCalls   = async () => {
        setLoading(true)
        const response = await fetch(`${baseURL}/activities`)
    // console.log(response);
        const data = await response.json()
        if(response.ok) {
            setCalls(data)
          }
      if(response) setLoading(false)
    // console.log(data);
    }
    useEffect(()=>{
        getCalls()
    }, [])
    
  return (
    <div className=' pt-4'>
        {loading && <span className="loading loading-lg loading-spinner text-primary absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"></span>}
    
        {calls && calls.map(call => (
            <div onClick={() => navigate(`/callDetails/${call.id}`)} className='single_call flex items-center justify-between bg-gray-100 rounded-md mx-6 mb-3 px-3 py-5 hover:bg-slate-200 duration-700'>
                <div className='flex gap-5 items-center'>
                    {call.direction === 'inbound' ? <BsTelephoneInbound/> : <BsFillTelephoneOutboundFill/>}
                    <div>
                        <p className={call.call_type === 'missed' ? 'text-red-600' : ''}>
                            {call.via}
                        </p>
                        <p className='text-xs text-slate-400'>{call.created_at.substr(0, 10)}</p>
                    </div>
                </div>
                <div className=''>
                    {call.call_type === 'answered' ? <BiSolidPhone/>: <BiSolidPhone className='text-red-600'/>}
                </div>
            </div>
        ))}
    </div>
  )
}

export default Home