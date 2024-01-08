import React from 'react'

const ArchivedCalls = () => {
    // const updatedItem = JSON.parse(localStorage.getItem('updatedItems'))

    

  return (
    <div>
        {updatedItem && updatedItem.map(call => (
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

export default ArchivedCalls