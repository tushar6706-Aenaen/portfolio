import React from 'react'
import { motion } from 'framer-motion'
const Email = {
    hidden: {
        opacity: 0,
        y:50,
    },
    show: {
        opacity: 1,
        y:0,
        transition: {
            delay: 1, // Wait for navbar animations to complete
            duration: 1,
        },
    }
}
const EmailB = () => {
  return (
    <>
    <motion.div 
        variants={Email}
        initial="hidden"
        animate="show"
        className='fixed bottom-4 left-3 text-[12px] md:left-10 md:text-[15px] text-black connection-text  font-sm font-up px-2 py-1  z-10  '>
      email:<span>tusharchauhan6706@gmail.com</span>
    </motion.div>

       <motion.div 
        variants={Email}
        initial="hidden"
        animate="show"
    className='fixed bottom-4 right-3 md:right-10  text-[12px] md:text-[15px]   text-black connection-text  font-sm font-up px-2 py-1  z-10  '>
      <a href="https://github.com/tushar6706-Aenaen" target="_blank" rel="noopener noreferrer">Github:<span>tushar6706-Aenaen</span></a>
    </motion.div>
       
        </>
    
  )
}

export default EmailB
