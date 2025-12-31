import {  motion } from 'framer-motion'
import Scene from '../components/Scene'
import { filter } from 'motion/react-client'

const main = {
    hidden: {},
    show: {
        transition:
        {
            staggerChildren: 0.3,
            delay:1.2
        }
    },
}

const textVariants = {

    hidden: {
        opacity: 0,
        y: -20,
        filter  : "blur(10px)",
    },
    show: {
        opacity: 1,
        filter  : "blur(0px)",
        y: 0,
        transition: {
            duration: 1,
            ease: "easeOut",
            delay:1.5
        }
    }

}

const object3D = {
    hidden: {
        opacity: 0, filter: "blur(50px)", scale: 0.95
    },
    show: {
        opacity: 1, filter: "blur(0px)", scale: 1,
        transition: { duration: 0.8, ease: "easeOut" ,delay:1.5}
    }

}
const Home = () => {
    return (
        <motion.div
            variants={main}
            initial="hidden"
            animate="show"
            id="home"
            className=' flex w-full px-10 flex-col min-h-screen md:flex-row justify-between items-center md:space-x-10 lg:space-x-20 pt-10 pb-20'>
            <motion.div
                variants={textVariants}
                className='textContentMain font-[Bebas_Neue]  h-125 md:h-auto  flex flex-col justify-center space-y-5'>
                

                
                <motion.div
                    variants={textVariants}
                    className='text-6xl md:text-7xl font-bold'>
                    Full-stack developer
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }} 
                    className='text-6xl md:text-7xl font-bold'>
                    shaping modern
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className=' text-6xl md:text-7xl font-bold'>
                    web experiences.
                </motion.div>
                
            </motion.div>
            <motion.div
                variants={object3D}
                className='md:w-162.5 w-full  bg-[#dfdfdf] h-75  md:h-125'><Scene /></motion.div>
        </motion.div>
    )
}

export default Home
