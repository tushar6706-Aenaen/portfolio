import Home from "../pages/Home"
import Navbar from "./Navbar"
import {motion} from 'framer-motion'

const navbarMotion = {
    hidden :{
        opacity: 0,
    },
    show :{
        opacity: 1,
        transition:{
            duration: 0.5,
        },
    }
}

const HomeMotion = {
    hidden :{
        opacity: 0,
    },
    show :{
        opacity: 1,
        transition:{
            delay: 1.5, // Wait for navbar animations to complete
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
                variants={HomeMotion}
                initial="hidden"
                animate="show"
            >
                <Home />
            </motion.div>
        </div>
    )
}

export default Layout
