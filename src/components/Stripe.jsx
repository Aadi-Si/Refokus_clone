import React from 'react'

const Stripe = ({val}) => {
  return (
    <div className='w-[16.66%] px-6 py-5 border-t-[2px] border-b-[2px] border-r-[2px] border-zinc-700 flex items-center justify-between'>
        <img src={val.url} alt="" />
        <span className='font-semibold text-xl'>{val.number}</span>
    </div>
  )
}

export default Stripe