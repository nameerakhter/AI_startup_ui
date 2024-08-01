'use client'
import React, { useEffect } from 'react'
import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion"

const colors = [ '#3b1a60', '#6e36c9']

const Badge = () => {
  // const color = useMotionValue(colors[0])
  // const background = useMotionTemplate`radial-gradient(100% 100% at 0% 100%, #331354 30%, ${color})`
  // useEffect(() => {
  //   animate(color, colors, {
  //     ease: 'easeInOut',
  //     duration:2,
  //     repeat: Infinity,
  //     repeatType: 'mirror'
  //   })
  // }, [color])
  return (
     <motion.div className='bg-black  rounded-full thin-border2 ' whileHover={{ scale: 1.1 }} transition={{ delay: .1 }} >
     <div className='px-2 flex items-center gap-3 z-10 relative'>
       <p className='px-2 bg-purple-light rounded-full text-black font-extrabold text-sm'>New</p>
       <p className='text-purple-light'>Latest Integration just arrived</p>
     </div>
     <div className= 'bg-[#331354] rounded-xl absolute h-[50px] w-[350px] top-[-10%] left-[-5%] z-0 blur-xl'></div>
   </motion.div>
    
  )
}

export default Badge