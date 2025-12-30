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
            className='grid  min-h-[calc(100vh-80px)] grid-cols-1 md:grid-cols-2'>
            <motion.div
                variants={textVariants}
                className='textContentMain h-[500px] md:h-auto  flex flex-col justify-center space-y-1.5'>
                

                
                <motion.div
                    variants={textVariants}
                    className='text-7xl font-bold'>
                    Full-stack developer
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }} 
                    className='text-7xl font-bold'>
                    shaping modern
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className='text-7xl font-bold'>
                    web experiences.
                </motion.div>
                
            </motion.div>
            <motion.div
                variants={object3D}
                className='md:w-[650px]  bg-[#f7f7f7] h-[300px]  md:h-[500px]'><Scene /></motion.div>
        </motion.div>
    )
}

export default Home
