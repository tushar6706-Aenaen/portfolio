import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
    return (
        <section
            id='projects' 
            className='flex flex-col  w-full min-h-screen'>

            

                <motion.div
                 initial={{ opacity: 0, y: -100, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                     className="flex items-center justify-center border-y-2 border-black">
                    
                        <h2 className="font-[Bebas_Neue] text-9xl font-extrabold">Project-FEATURED </h2>
                   
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className="text-2xl font-[poppins] text-center  mt-5 font-medium mb-5">
                       Featured projects that I have worked on
                    </h2>
                </motion.div>

            
        </section>
    )
}

export default Projects
