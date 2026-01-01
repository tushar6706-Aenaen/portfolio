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
        y: -50, 
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.1,
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
            delay: 1.1
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

const mobileMenu = {
    hidden: {
        x: '100%',
        opacity: 0,
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: "easeOut",
            staggerChildren: 0.1,
        }
    },
    exit: {
        x: '100%',
        opacity: 0,
        transition: {
            duration: 0.3,
            ease: "easeIn"
        }
    }
}

const mobileNavItem = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0 },
}

const Navbar = () => {
    const [showSocials, setShowSocials] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showMobileSocials, setShowMobileSocials] = useState(false);
    
    const list = [
        {name:'Home',id:'#home'},
        {name:'Projects',id:'#projects'},
        {name:'About',id:'#about'},
        {name:'Socials',id:'#socials'},
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
            className='h-15  px-10  fixed top-0 left-0 right-0 z-10 backdrop-blur-sm navbar flex justify-between items-center '
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
                    <div key={item.id} className="relative">
                        <motion.a
                            variants={navItem}
                            href={item.id}
                            className='hover:border-b-4 transition-all duration-200 capitalize cursor-pointer pb-1'
                            onMouseEnter={() => item.name === 'Socials' && setShowSocials(true)}
                            onMouseLeave={() => item.name === 'Socials' && setShowSocials(false)}
                        >
                            {item.name}
                        </motion.a>

                        {/* Dropdown for Socials */}
                        {item.name === 'Socials' && (
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
                className='hidden md:block border-2 px-4 py-2 rounded-lg cursor-pointer hover:bg-black hover:text-white transition-all duration-300'
            >
                Lets Connect
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
                variants={connect}
                className='md:hidden flex flex-col gap-1.5 z-50'
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
            >
                <motion.span 
                    className='w-6 h-0.5 bg-black block'
                    animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 8 : 0 }}
                    transition={{ duration: 0.3 }}
                />
                <motion.span 
                    className='w-6 h-0.5 bg-black block'
                    animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                />
                <motion.span 
                    className='w-6 h-0.5 bg-black block'
                    animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -8 : 0 }}
                    transition={{ duration: 0.3 }}
                />
            </motion.button>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        variants={mobileMenu}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className='fixed top-0 right-0 h-screen w-full bg-white z-40 flex flex-col justify-center items-center gap-8 md:hidden'
                    >
                        {list.map((item) => (
                            <div key={item.id} className="w-full text-center">
                                {item.name === 'Socials' ? (
                                    <div>
                                        <motion.button
                                            variants={mobileNavItem}
                                            onClick={() => setShowMobileSocials(!showMobileSocials)}
                                            className='text-3xl font-bold capitalize cursor-pointer hover:text-blue-500 transition-colors'
                                        >
                                            {item.name}
                                        </motion.button>
                                        <AnimatePresence>
                                            {showMobileSocials && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="flex flex-col gap-3 mt-4"
                                                >
                                                    {socials.map((social) => (
                                                        <a
                                                            key={social.name}
                                                            href={social.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-xl hover:text-blue-500 transition-colors"
                                                            onClick={() => setMobileMenuOpen(false)}
                                                        >
                                                            {social.name}
                                                        </a>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <motion.a
                                        variants={mobileNavItem}
                                        href={item.id}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className='text-3xl font-bold capitalize cursor-pointer hover:text-blue-500 transition-colors block'
                                    >
                                        {item.name}
                                    </motion.a>
                                )}
                            </div>
                        ))}
                        
                        <motion.div
                            variants={mobileNavItem}
                            className='border-2 border-black px-8 py-3 rounded-lg cursor-pointer hover:bg-black hover:text-white transition-all duration-300 text-xl font-semibold'
                        >
                            Lets Connect
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default Navbar