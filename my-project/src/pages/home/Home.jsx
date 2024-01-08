import React from 'react'
import { useState, useEffect } from 'react'
import {BiSolidPhone} from 'react-icons/bi'
import { BsTelephoneInbound, BsFillTelephoneOutboundFill, BsArchiveFill } from 'react-icons/bs'
import Inbox from '../keypad/Keypad'
import { useNavigate } from 'react-router-dom'
import ArchivedCalls from '../archivedCalls/ArchivedCalls'

const Home = () => {
    const baseURL = 'https://cerulean-marlin-wig.cyclic.app/'
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [calls, setCalls] = useState([])
    const data2 = {
        is_archived: true
    };
    // const handleDelete = (id) => {
    //     setCalls(calls.filter((call) => call.id !== id));
    //   };

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
    const archive = async (id) => {
        const updatedItems = calls.filter(item => item.id === id); // Update all items to be archived
        localStorage.setItem('archived', JSON.stringify(updatedItems))
        // const updatedItems = calls.map(item => ({ ...item, is_archived:false })); // Update all items to be archived
        const response = await fetch(`${baseURL}/activities/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data2)
        })
        console.log(response);
        console.log(JSON.stringify(data2))
        const data = await response.json()
        if(response.ok) {
            setCalls(data)
          }
          console.log(data);
          console.log(updatedItems);
    }
  
    
  return (
    <div className='ps-2 pt-4'>
        {loading && <span className="loading loading-lg loading-spinner text-primary absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"></span>}
        <p onClick={()=> archiveAllItems()} className='archive_all flex justify-center items-center gap-3 p-2 m-2 max-w-lg mx-auto cursor-pointer rounded-t-badge border duration-150'><span><BsArchiveFill/></span>Archive all calls</p>
        {calls && calls.map(call => (
            <div className='flex items-center'>
            <span>{call.direction === 'inbound' ? <BsTelephoneInbound/> : <BsFillTelephoneOutboundFill/>}</span>
            <div className='single_call flex items-center justify-between w-[95%] bg-gray-100 rounded-md mx-6 mb-5 px-3 py-8 hover:bg-slate-200 duration-700'>
                <div className='flex gap-5 items-center'>
                <span title="archive" onClick={() => archive(call.id)} className="text-xs p-2 cursor-pointer">
                        <BsArchiveFill />
                    </span>
                    <div>
                        <p onClick={() => navigate(`/callDetails/${call.id}`)} className={`${call.call_type === 'missed' ? 'text-red-600' : ''} cursor-pointer`}>
                            {call.via}
                        </p>
                        <p className='text-xs text-slate-400'>{call.created_at.substr(0, 10)}</p>
                    </div>
                </div>
                <div className=''>
                    {call.call_type === 'answered' ? <BiSolidPhone/>: <BiSolidPhone className='text-red-600'/>}
                </div>
            </div>
            </div>
        ))}
    </div>
  )
}

export default Home