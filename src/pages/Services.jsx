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
        {
            number: "04.",
            title: "UI & Interaction Design",
            description: "Designing clean, modern interfaces with smooth animations and thoughtful interactions. Focused on creating engaging user experiences that feel fast, intuitive, and visually consistent.",
            skills: ["Tailwind CSS", "Framer Motion", "GSAP", "Responsive Design", "UX Basics"]
        },
        {
            number: "05.",
            title: "Authentication & Authorization",
            description: "Implementing secure authentication and authorization systems for web applications. Experienced in building login and signup flows, protecting routes, and managing user sessions using modern authentication techniques.",
            skills: ["JWT", "HTTP-only Cookies", "Role-Based Access", "Auth Middleware", "Password Hashing"]
        },
        {
            number: "06.",
            title: "API Integration & Data Handling",
            description: "Integrating third-party APIs and managing client-server data flow efficiently. Experienced in handling async operations, authentication flows, and structured data exchange.",
            skills: ["REST APIs", "JWT", "Fetch API", "Axios", "Async/Await"]
        }


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
        <section className="min-h-screen bg-[#dfdfdf] pt-10 md:py-20 px-4 sm:px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="mb-8 md:mb-12"
                >
                    <motion.h1
                        variants={titleVariants}
                        className="text-3xl sm:text-4xl font-[bebas_neue] md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 tracking-tight"
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
                        className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-gray-600 font-light"

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
                                className="w-full py-6 md:py-8 lg:py-8 flex items-center justify-between group cursor-pointer"
                                whileHover={{ x: 4 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <div className="flex items-start md:items-center gap-3 md:gap-6 lg:gap-8 text-left flex-1">
                                    <motion.span
                                        className="text-base sm:text-lg md:text-2xl font-[bebas_neue] text-gray-500 font-normal pt-1 md:pt-0 shrink-0"

                                    >
                                        {service.number}
                                    </motion.span>

                                    <motion.h2
                                        className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-[bebas_neue] font-semibold tracking-tight"
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
                                    className="text-3xl md:text-4xl lg:text-5xl font-light shrink-0 ml-3 md:ml-6 select-none"
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
                                        <div className="pb-8 md:pb-10 lg:pb-12">
                                            <div className="pl-0 md:pl-16 lg:pl-24 xl:pl-32 space-y-4 md:space-y-6 lg:space-y-8 pr-0 md:pr-8 lg:pr-16">
                                                {/* Description */}
                                                <motion.p
                                                    initial={{ opacity: 0, y: 15 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.5, delay: 0.15 }}
                                                    className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed max-w-4xl font-light"
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