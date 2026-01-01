import AboutMe from "../pages/AboutMe"
import Home from "../pages/Home"
import Projects from "../pages/Projects"
import Services from "../pages/Services"
import EmailB from "./EmailB"
import Navbar from "./Navbar"
import { motion } from 'framer-motion'

const navbarMotion = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    }
}

const HomeMotion = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            delay: 1, // Wait for navbar animations to complete
            duration: 1,
        },
    }
}
const Email = {
    hidden: {
        opacity: 0,
        
    },
    show: {
        opacity: 1,
        
        transition: {
            delay: 1, // Wait for navbar animations to complete
            duration: 1,
        },
    }
}

const Layout = () => {
    return (
        <div>
            <motion.div
                variants={navbarMotion}
                initial="hidden"
                animate="show"
            >
                <Navbar />
            </motion.div>
            <motion.div
                variants={Email}
                initial="hidden"
                animate="show"
            >
                <EmailB />
            </motion.div>

            <motion.div
                variants={HomeMotion}
                initial="hidden"
                animate="show"
            >
                <Home />
            </motion.div>
            <Projects />
            <Services />
            <AboutMe/>
        </div>
    )
}

export default Layout
