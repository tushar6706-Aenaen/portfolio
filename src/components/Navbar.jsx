import React from 'react'
import { motion } from "motion/react"
const navContainer = {
    hidden: {},
    show: {
        transition: {
            delayChildren: 0.3,
            staggerChildren: .1,
        },
    },
};


const main = {
    hidden: {  },
    show: {  transition: { staggerChildren: 1 } },
}
const logoVariants = {
    hidden: {
        opacity: 0,
        y: -20

    },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4 },
    }
}
const navItem = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
}
const Navbar = () => {
    const list = [
        'Home',
        'Projects',
        'About',
        'Skills',
    ]
    return (
        <motion.div
           variants={main}
            initial="hidden"
            animate="show"
            className='h-15 p-4 navbar  flex justify-between items-center border-gray-300'
            >
            {/* logo */}
            
                <motion.div
                    variants={logoVariants}
                    initial="hidden"
                    animate="show"
                    className='name text-2xl'
                >
                    Tushar chauhan
                </motion.div>
                {/* nav items */}
                <motion.div
                    variants={navContainer}
                    initial="hidden"
                    animate="show"
                    className='flex'
                >


                    {
                        list.map((item) => (
                            <motion.span
                                variants={navItem}
                                key={item}
                                className='p-4  text-lg capitalize cursor-pointer hover:text-blue-500'
                            >
                                {item}
                            </motion.span>
                        ))
                    }
                </motion.div>
                <div>connect</div>
        </motion.div>
    )
}

export default Navbar
