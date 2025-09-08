import React from 'react'

export default function ImageGrid({ img, name, designation }) {
  return (
    <div>
      <img className='w-full h-full' src={img} alt="" />
      <p className='text-[20px]'>{name}</p>
      <p className='text-[16px] text-[#040404BA]'>{designation}</p>
    </div>
  )
}
