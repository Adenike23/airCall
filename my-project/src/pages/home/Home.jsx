import React from 'react'
import { useState, useEffect } from 'react'
import {BiSolidPhone} from 'react-icons/bi'
import { BsTelephoneInbound, BsFillTelephoneOutboundFill } from 'react-icons/bs'
import Inbox from '../inbox/Inbox'

const Home = () => {
    const baseURL = 'https://cerulean-marlin-wig.cyclic.app/'

    // const [selectedTab, setSelectedTab] = useState('tab1')
    const [calls, setCalls] = useState([])
    // const handleTabClick = (tab) => {
    //     setSelectedTab(tab);
    // };

    const getCalls   = async () => {
        const response = await fetch(`${baseURL}/activities`)
    console.log(response);
        const data = await response.json()
        if(response.ok) {
            setCalls(data)
          }
    //   if(response) setLoading(false)
    console.log(data);
    }
    useEffect(()=>{
        getCalls()
    }, [])
    
  return (
    <div className=' pt-4'>
        {/* <div className="flex gap-1 justify-around my-3 border-b-2 pb-5 md:gap-12">
                <button className={selectedTab === 'tab1' ? 'active-tab' : 'inactive-tab'} onClick={() => handleTabClick('tab1')}>Activity</button>
                <button className={selectedTab === 'tab2' ? 'active-tab' : 'inactive-tab'} onClick={() => handleTabClick('tab2')}>Inbox</button>
                <button className={selectedTab === 'tab3' ? 'active-tab' : 'inactive-tab'} onClick={() => handleTabClick('tab3')}>All calls</button>
        </div>
        <Inbox selectedTab={selectedTab}/> */}
    
        {calls && calls.map(call => (
            <div className='flex items-center justify-between bg-gray-100 rounded-md mx-6 mb-3 px-3 py-5 hover:bg-slate-200 duration-700'>
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