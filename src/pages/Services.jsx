import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Services = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const services = [
        {
            number: "01.",
            title: "Front-End Development",
            description: "Creating responsive and interactive user interfaces using modern frameworks like React. Focused on performance, accessibility, and stunning visual experiences that engage users.",
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"]
        },
        {
            number: "02.",
            title: "Full-Stack Development",
            description: "Comprehensive web application development from front-end to back-end. Skilled in building scalable and secure applications using Node.js, Express, and databases like MongoDB and PostgreSQL.",
            skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"]
        },
        {
            number: "03.",
            title: "Back-End Development",
            description: "Building robust server-side applications and APIs. Expertise in database design, authentication, and creating scalable architectures that power your applications seamlessly.",
            skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"]
        },

    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Animation variants
    const titleVariants = {
        hidden: { opacity: 0, y: -40, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const lineVariants = {
        hidden: { scaleX: 0 },
        visible: {
            scaleX: 1,
            transition: { duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const subtitleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.5, ease: "easeOut" }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40, filter: "blur(5px)" },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.6,
                delay: 0.7 + i * 0.15,
                ease: [0.22, 1, 0.36, 1]
            }
        })
    };

    const contentVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
                opacity: { duration: 0.3 }
            }
        },
        open: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                opacity: { duration: 0.4, delay: 0.1 }
            }
        }
    };

    const plusVariants = {
        closed: { rotate: 0, scale: 1 },
        open: { rotate: 135, scale: 1.1 }
    };

    return (
        <section className="min-h-screen bg-[#dfdfdf] py-10 md:py-15 px-6 md:px-12 lg:px-20">
            <div className=" ">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mb-10 md:mb-15"
                >
                    <motion.h1
                        variants={titleVariants}
                        className="text-4xl  sm:text-4xl font-[bebas_neue] md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 tracking-tight"
                        style={{ letterSpacing: '0.02em' }}
                    >
                        Services
                    </motion.h1>

                    <motion.div
                        variants={lineVariants}
                        className="h-0.5 bg-black mb-6 md:mb-8 origin-left"
                    />

                    <motion.p
                        variants={subtitleVariants}
                        className="text-2xl project-detail sm:text-3xl md:text-4xl text-gray-600 font-light"

                    >
                        I can help you with
                    </motion.p>
                </motion.div>

                {/* Accordion Items */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="space-y-0"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={itemVariants}
                            className="border-b border-black/20 last:border-b-2 last:border-black"
                        >
                            {/* Accordion Header */}
                            <motion.button
                                onClick={() => toggleAccordion(index)}
                                className="w-full py-8 md:py-10 flex items-center justify-between group cursor-pointer"
                                whileHover={{ x: 4 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <div className="flex items-start md:items-center gap-4 md:gap-8 text-left flex-1">
                                    <motion.span
                                        className="text-lg md:text-2xl font-[bebas_neue] text-gray-500 font-normal pt-1 md:pt-0 shrink-0"

                                    >
                                        {service.number}
                                    </motion.span>

                                    <motion.h2
                                        className="text-3xl font-[bebas_neue] sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight"
                                        style={{

                                            letterSpacing: '0.02em'
                                        }}
                                    >
                                        {service.title}
                                    </motion.h2>
                                </div>

                                {/* Plus Icon */}
                                <motion.div
                                    animate={openIndex === index ? "open" : "closed"}
                                    variants={plusVariants}
                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    className="text-4xl md:text-5xl font-light shrink-0 ml-6 select-none"
                                    style={{ fontWeight: 200 }}
                                >
                                    +
                                </motion.div>
                            </motion.button>

                            {/* Accordion Content */}
                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        initial="closed"
                                        animate="open"
                                        exit="closed"
                                        variants={contentVariants}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-10 md:pb-12">
                                            <div className="pl-0 md:pl-24 lg:pl-32 space-y-6 md:space-y-8 pr-0 md:pr-16">
                                                {/* Description */}
                                                <motion.p
                                                    initial={{ opacity: 0, y: 15 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.5, delay: 0.15 }}
                                                    className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl font-light"
                                                    style={{ lineHeight: '1.6' }}
                                                >
                                                    {service.description}
                                                </motion.p>

                                                {/* Skills */}
                                                <motion.div
                                                    initial={{ opacity: 0, y: 15 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.5, delay: 0.25 }}
                                                    className="flex flex-wrap gap-3 md:gap-4 pt-2"
                                                >
                                                    {service.skills.map((skill, skillIndex) => (
                                                        <motion.span
                                                            key={skillIndex}
                                                            initial={{ opacity: 0, scale: 0.9 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{
                                                                duration: 0.3,
                                                                delay: 0.35 + skillIndex * 0.05,
                                                                ease: "easeOut"
                                                            }}
                                                            whileHover={{
                                                                scale: 1.05,
                                                                y: -3,
                                                                transition: { duration: 0.2 }
                                                            }}
                                                            className="px-5 md:px-6 py-2 md:py-2.5 bg-black text-white rounded-full text-sm md:text-base font-medium cursor-default shadow-sm hover:shadow-md transition-shadow"
                                                        >
                                                            {skill}
                                                        </motion.span>
                                                    ))}
                                                </motion.div>



                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;