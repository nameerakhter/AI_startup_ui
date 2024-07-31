import React from 'react'

const Badge = () => {
  return (
    <div className='bg-black  rounded-full thin-border2'>
      <div className='px-2 flex items-center gap-3 '>
        <p className='px-2 bg-purple-light rounded-full text-black font-extrabold text-sm'>New</p>
        <p className='text-purple-light'>Latest Integration just arrived</p>
      </div>
    </div>
  )
}

export default Badge