import React from 'react'
import { CONTACT } from '../Constant'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div>
        <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        
        className='text-center text-4xl my-10'>Get in Touch</motion.h1>
        <div className='text-center'>
            <motion.p 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1}}
            
            className='my-4'>{CONTACT.address}</motion.p>
            <motion.p 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:1}}
            className='my-4'>{CONTACT.phoneNo}</motion.p>
            <p className='my-4'>{CONTACT.email}</p>
        </div>
      
    </div>
  )
}

export default Contact
