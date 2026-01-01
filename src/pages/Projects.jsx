import React from 'react'
import { motion } from 'framer-motion'
import fintrackImg from '../assets/images/fintrack.png'
const Projects = () => {
    // Enhanced stagger container for child animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    }

    // Smooth fade-up animation for children
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 60,
            filter: "blur(10px)"
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94] // Custom easing curve
            }
        }
    }

    // Image reveal animation with scale
    const imageVariants = {
        hidden: {
            opacity: 0,
            y : 40 ,
            filter: "blur(10px)"
        },
        visible: {
            opacity: 1,
            y : 0 , 
            filter: "blur(0px)",
            transition: {
                duration: 1,
                ease: [0.22, 1, 0.36, 1] // Smooth ease-out
            }
        }
    }

    // Title animation with letter stagger effect
    const titleVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.03
            }
        }
    }

    const letterVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            filter: "blur(10px)"
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    
    const title = "PROJECT-FEATURED";

    return (
        <section
            id='projects'
            className='flex flex-col w-full min-h-screen py-20 '>

            {/* Animated Title */}
            <motion.div
                variants={titleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                className="flex items-center justify-center border-y-2 border-black overflow-hidden py-4">
                <h2 className="font-[Bebas_Neue] text-6xl md:text-9xl font-extrabold flex">
                    {title.split('').map((char, index) => (
                        <motion.span
                            key={index}
                            variants={letterVariants}
                            className="inline-block"
                            style={{ display: 'inline-block' }}
                        >
                            {char === '-' ? '\u00A0-\u00A0' : char}
                        </motion.span>
                    ))}
                </h2>
            </motion.div>

            {/* Subtitle */}
            <motion.div
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
                <h2 className="text-2xl font-[Bebas_Neue] text-center mt-8 font-medium mb-10 text-gray-700">
                    Featured projects that I have worked on
                </h2>
            </motion.div>

            {/* Projects Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className='px-6 md:px-20 my-10 space-y-32'>

               
                    <div  className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>

                        {/* Project Image */}
                        <motion.div
                            variants={imageVariants}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className='relative group overflow-hidden rounded-2xl fintrack-img-bg  shadow-2xl border-10 border-gray-400  '>


                            {/* Image container with parallax effect */}
                            <motion.div
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className='overflow-hidden'>
                                <img
                                    src={fintrackImg}
                                    alt='FINTRACK'
                                    className='w-full h-full object-cover'
                                />
                            </motion.div>

                            
                        </motion.div>

                        {/* Project Details */}
                        <motion.div
                            variants={itemVariants}
                            className='flex flex-col justify-center space-y-6'>

                            {/* Title and Tag */}
                            <div className='space-y-4'>
                                <div className='flex gap-4 items-center flex-wrap'>
                                    <motion.h1
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        className='text-5xl md:text-6xl font-bold text-black bg-clip-text '>
                                        FINTRACK
                                    </motion.h1>

                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                        whileHover={{ scale: 1.05 }}
                                        className={`px-4 py-1 rounded-full bg-black text-white text-sm font-medium  shadow-lg`}>
                                        Full-stack
                                    </motion.div>
                                </div>

                                {/* Description */}
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    className='text-xl text-gray-600 font-medium tracking-wide'>
                                    EXPENSE TRACKER WITH BUDGET PLANNER
                                </motion.p>
                            </div>

                            {/* Tech Stack */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className='flex gap-3 flex-wrap'>
                                
                                    
                            </motion.div>

                            {/* CTA Button */}
                            
                        </motion.div>
                    </div>
            
            </motion.div>
        </section>
    )
}

export default Projects