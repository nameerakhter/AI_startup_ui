import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
    const navItems =['Features', 'Developers', 'Company', 'Blog', 'Changelog']
  return (
    <>
    <div className='flex items-center justify-center'>
        <div className='flex justify-center flex-row items-center p-2'>
        <Image src='/assets/icons/Logo.png' alt='logo' width={38} height={38}/>
        </div>
        <div className='flex flex-row items-center justify-center thin-border opacity-55  rounded-full px-1 m-7 gap-7  font-thin max-w-[64rem]'>
            {navItems.map((item, index) =><div className='font-normal cursor-pointer' key={index}>{item}</div>)}
        </div>
        <div className='border-1 border-white rounded-xl p-2'>
        <Button className='shad-primary-btn rounded-xl'>Join Waitlist</Button>

        </div>
    </div>
    <hr className='border-1 opacity-15'/>
    </>
  )
}

export default Navbar