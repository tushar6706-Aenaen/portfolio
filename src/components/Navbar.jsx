import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react";

const main = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
        }
    },
}

const logoVariants = {
    hidden: {
        opacity: 0,
        y: -50
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
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
            delayChildren: 0.05,
        },
    },
};

const navItem = {
    hidden: {
        opacity: 0,
        y: -50
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2,
            ease: "easeOut",
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
            delay: 1.5
        }
    },
}

const dropdown = {
    hidden: {
        opacity: 0,
        y: -20,
        scale: 0.95,
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.2,
            ease: "easeOut",
            staggerChildren: 0.08,
        }
    },
    exit: {
        opacity: 0,
        y: -20,
        scale: 0.95,
        transition: {
            duration: 0.15
        }
    }
}

const dropdownItem = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 },
}

const Navbar = () => {
    const [showSocials, setShowSocials] = useState(false);
    
    const list = [
        'Home',
        'Projects',
        'About',
        'Socials',
    ]

    const socials = [
        { name: 'GitHub', link: 'https://github.com/tushar6706-Aenaen' },
        { name: 'LinkedIn', link: 'https://www.linkedin.com/in/tushar-chauhan-a7a112365' },
        { name: 'Twitter', link: 'https://x.com/ChauhanTus93646' },
    ]

    return (
        <motion.div
            variants={main}
            initial="hidden"
            animate="show"
            className='h-20 p-4 navbar flex justify-between items-center border-gray-300'
        >
            {/* logo */}
            <motion.div
                variants={logoVariants}
                className='name text-2xl font-semibold'
            >
                Tushar chauhan
            </motion.div>

            {/* nav items */}
            <motion.div
                variants={navContainer}
                className='md:flex hidden gap-5 items-center text-xl relative'
            >
                {list.map((item) => (
                    <div key={item} className="relative">
                        <motion.span
                            variants={navItem}
                            className='hover:border-b-4 transition-all duration-200 capitalize cursor-pointer pb-1'
                            onMouseEnter={() => item === 'Socials' && setShowSocials(true)}
                            onMouseLeave={() => item === 'Socials' && setShowSocials(false)}
                        >
                            {item}
                        </motion.span>

                        {/* Dropdown for Socials */}
                        {item === 'Socials' && (
                            <AnimatePresence>
                                {showSocials && (
                                    <motion.div
                                        variants={dropdown}
                                        initial="hidden"
                                        animate="show"
                                        exit="exit"
                                        className="absolute top-full mt-2 bg-white border-2 border-gray-200 rounded-lg shadow-lg py-2 w-40 z-50"
                                        onMouseEnter={() => setShowSocials(true)}
                                        onMouseLeave={() => setShowSocials(false)}
                                    >
                                        {socials.map((social) => (
                                            <motion.a
                                                key={social.name}
                                                variants={dropdownItem}
                                                href={social.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200 text-base"
                                            >
                                                {social.name}
                                            </motion.a>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        )}
                    </div>
                ))}
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