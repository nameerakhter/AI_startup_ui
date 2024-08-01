'use client'
import React from 'react'
import { motion } from "framer-motion"

const Badge = () => {
  return (
    <motion.div className='bg-black  rounded-full thin-border2' whileHover={{ scale: 1.1 }} transition={{ delay: .1 }}>
      <div className='px-2 flex items-center gap-3 '>
        <p className='px-2 bg-purple-light rounded-full text-black font-extrabold text-sm'>New</p>
        <p className='text-purple-light'>Latest Integration just arrived</p>
      </div>
    </motion.div>
  )
}

export default Badge