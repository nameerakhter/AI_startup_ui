'use client'
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'

const BrandCard = ({src, alt}:{src:string, alt:string}) => {
  return (
    <motion.div whileHover={{scale: 1.1}}>
        <div className='rounded-xl partner-card h-[6rem] flex items-center '>
        <Image src={src} alt={alt} height={34} width={155}/>
        </div>
    </motion.div>
  )
}

export default BrandCard