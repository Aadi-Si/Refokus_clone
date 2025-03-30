import React from 'react'
import Button from './Button'
import { hover } from 'motion'

const Product = ({val,mover,count}) => {
  return (
    <div className='w-full py-20 h-[23rem]'>
        <div onMouseEnter={()=>{mover(count)}} className="max-w-screen-xl mx-auto flex items-center justify-between h-[25rem] p-4 rounded-xl  hover:bg-blue-800 duration-300 ease-in-out">
            <h1 className='text-6xl capitalize font-medium font-Satoshi'>{val.title}</h1>
            <div className='dets w-1/3'>
                <p className='mb-10 font-Satoshi'>{val.description}</p>
                <div className='flex items-center gap-10'>
                {val.live && <Button />}
                {val.case && <Button title='Case Study'/>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product