import {  motion } from "framer-motion"
const main = {
    hidden: {},
    show: {
        transition:
        {
            staggerChildren: 0.3,
            delayChildren: 0.2,
        }
    },
}

const logoVariants = {
    hidden: {
        opacity: 0,
        y: -20

    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        }

    }
}
const navContainer = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,

        transition: {
            duration: 1,
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const navItem = {
    hidden: {
        opacity: 0,
        y: -20
    },
    show: {
        opacity: 1,
        y: 0,
        transition:{
            duration:0.2,
            ease:"easeOut",
        }
    },
}
const connect = {
    hidden: {
        
        opacity: 0,
    },
    show: {
        opacity: 1,

        transition: {
            duration: 0.5,
            ease: "easeOut",
            delay:1
        }

    },
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
            className='h-20 p-4 navbar  flex justify-between items-center border-gray-300'
        >
            {/* logo */}

            <motion.div
                variants={logoVariants}
                className='name text-2xl'
            >
                Tushar chauhan
            </motion.div>
            {/* nav items */}
            <motion.div
                variants={navContainer}
                className='flex gap-5 items-center text-xl'
            >


                {
                    list.map((item) => (
                        <motion.span
                            variants={navItem}
                            key={item}
                            className=' hover:border-b-4  transition-all duration-200  capitalize cursor-pointer '
                        >
                            {item}
                        </motion.span>
                    ))
                }
            </motion.div>
            <motion.div
                variants={connect}
                className='border-2 px-4 py-2 rounded-lg cursor-pointer hover:bg-black hover:text-white transition-all duration-300'
            >
                Lets Connect
            </motion.div>
        </motion.div>
    )
}

export default Navbar
