import React from 'react'
import Card from './Card'

const Cards = () => {
    var data1 = [
        ["Up Next : Culture"],
        ["Get In Touch"]
    ]
    var data2 = [
      ["Who we are"],
      [
          "Let's get to it,",
          <br key="1" />,
          "together."
      ]
  ]
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-20 flex gap-3'>
            <Card key="1" width={"basis-1/3"} start = {false} para = {true} one = {data1[0]} two={data2[0]} />
            <Card key="2" width={"basis-2/3"} start = {true} para = {false} one = {data1[1]} two={data2[1]} hover={"true"}/>
        </div>
    </div>
  )
}

export default Cards