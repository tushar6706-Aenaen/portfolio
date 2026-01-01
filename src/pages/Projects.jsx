import React from 'react'
import { motion } from 'framer-motion'
import fintrackImg from '../assets/images/fintrack.png'
import col from '../assets/images/col.png'
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
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    }

    // Image reveal animation
    const imageVariants = {
        hidden: {
            opacity: 0,
            y: 100,
            filter: "blur(10px)"
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 1,
                ease: [0.52, 1, 0.36, 1]
            }
        }
    }

    // Title animation with letter stagger effect
    const titleVariants = {
        hidden: { opacity: 0 ,filter: "blur(10px)"},
        visible: {
            opacity: 1,
            filter: "blur(0px)",
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

    const projects = [
        {
            name: "FINTRACK",
            tag: "Full-stack",
            tagline: "EXPENSE TRACKER WITH BUDGET PLANNER",
            description: "FinTrack is a personal finance management web application designed to help users take control of their finances by tracking and organizing income, expenses, and financial activity in a clean and intuitive dashboard.",
            tech: ["React", "Supabase", "Shadcn ui", "Framer motion", "Gsap"],
            image: fintrackImg,
            imagePosition: "left",
            Project_Link:"https://fintrack-tc.vercel.app/",
            Github_repo_link:"https://github.com/tushar6706-Aenaen/fintrack"
        },
        {
            name: "College Utility Hub",
            tag: "Full-stack",
            tagline: "ALL-IN-ONE STUDENT PLATFORM",
            description: "A comprehensive full-stack web application for managing college utilities including notices, events, lost & found items, and feedback.",
            tech: ["React", "Express js", "Node js", "MongoDB", "Shadcn ui", "Framer motion"],
            image: col,
            imagePosition: "right",
            Project_Link:"https://col-uti-hub-fnd.vercel.app/",
            Github_repo_link:"https://github.com/tushar6706-Aenaen/college-utility-hub"
        }
    ];

    return (
        <section
            id='projects'
            className='flex flex-col w-full min-h-screen py-12 md:py-20'>

            {/* Animated Title */}
            <motion.div
                variants={titleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                className="flex items-center justify-center border-y-2 border-black overflow-hidden py-3 md:py-4">
                <h2 className="font-[Bebas_Neue] text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold flex flex-wrap justify-center">
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
                <h2 className="text-lg sm:text-xl md:text-2xl font-[Bebas_Neue] text-center mt-6 md:mt-8 mb-12 md:mb-20 font-medium text-gray-700 px-4">
                    Featured projects that I have worked on
                </h2>
            </motion.div>

            {/* Projects Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className='px-4 sm:px-6 md:px-12 lg:px-20 my-6 md:my-10 space-y-20 md:space-y-32'>

                {projects.map((project, idx) => (
                    <div 
                        key={idx}
                        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center ${
                            project.imagePosition === 'right' ? 'lg:flex-row-reverse' : ''
                        }`}>

                        {/* Project Image */}
                        <motion.div
                            variants={imageVariants}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className={`relative group overflow-hidden rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl order-1 ${
                                project.imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1'
                            }`}
                            style={{
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                            }}>

                            <motion.div
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className='overflow-hidden aspect-video md:aspect-auto md:h-full'>
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className='w-full h-full object-cover'
                                />
                            </motion.div>
                        </motion.div>

                        {/* Project Details */}
                        <motion.div
                            variants={itemVariants}
                            className={`flex flex-col justify-center space-y-4 md:space-y-8 order-2 ${
                                project.imagePosition === 'right' ? 'lg:order-1' : 'lg:order-2'
                            }`}>

                            {/* Title and Tag */}
                            <div className='space-y-3 md:space-y-4'>
                                <div className='flex gap-3 md:gap-4 items-center flex-wrap'>
                                    <motion.h1
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-[bebas_neue] font-bold text-black'>
                                        {project.name}
                                    </motion.h1>

                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                        whileHover={{ scale: 1.05 }}
                                        className='px-3 md:px-4 py-1 rounded-full bg-black text-white text-xs md:text-sm font-medium shadow-lg'>
                                        {project.tag}
                                    </motion.div>
                                </div>

                                {/* Tagline */}
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    className='text-xl sm:text-2xl md:text-3xl font-[bebas_neue] text-gray-700 font-medium tracking-wide'>
                                    {project.tagline}
                                </motion.p>
                            </div>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className='text-base sm:text-lg text-gray-600 leading-relaxed'>
                                {project.description}
                            </motion.p>

                            {/* Tech Stack */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                                className='flex gap-2 md:gap-3 flex-wrap'>
                                {project.tech.map((tech, techIdx) => (
                                    <span
                                        key={techIdx}
                                        className='px-3 py-1 text-xs md:text-sm hover:scale-105 transition-transform duration-300 border-2 border-black bg-[#dfdfdf] rounded-full font-medium text-black cursor-default'>
                                        {tech}
                                    </span>
                                ))}
                            </motion.div>

                            {/* CTA Buttons - Optional */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className='flex gap-3 md:gap-4 flex-wrap pt-2 md:pt-4'>
                                <a href={project.Project_Link}><button className='px-2 md:px-4 py-1 md:py-1.5 bg-black text-white rounded-4xl text-sm md:text-base font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg'>
                                    Live Preview
                                </button></a>
                               <a href={project.Github_repo_link}><button className='px-2 md:px-4 py-1 md:py-1.5 border-2 border-black text-black rounded-4xl text-sm md:text-base font-semibold hover:bg-black hover:text-white transition-all duration-300'>
                                    Github
                                </button></a>
                            </motion.div>
                        </motion.div>
                    </div>
                ))}
            </motion.div>
        </section>
    )
}

export default Projects