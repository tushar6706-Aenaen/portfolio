import { motion } from 'framer-motion';
import boruto from "../assets/images/Boruto.jpg";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { 
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};

const titleVariants = {
    hidden: { 
        opacity: 0, 
        y: -50, 
        scale: 0.95,
        filter: "blur(15px)" 
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: { 
            duration: 1.2, 
            ease: [0.16, 1, 0.3, 1],
            scale: { duration: 1 }
        }
    }
};

const imageVariants = {
    hidden: { 
        opacity: 0, 
        x: -80, 
        scale: 0.9,
        filter: "blur(20px)" 
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: { 
            duration: 1.2, 
            delay: 0.5, 
            ease: [0.16, 1, 0.3, 1] 
        }
    }
};

const textVariants = {
    hidden: { 
        opacity: 0, 
        y: 40, 
        filter: "blur(8px)" 
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { 
            duration: 1, 
            ease: [0.16, 1, 0.3, 1] 
        }
    }
};

const statVariants = {
    hidden: { 
        opacity: 0, 
        scale: 0.8,
        y: 20 
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { 
            duration: 0.8, 
            ease: [0.16, 1, 0.3, 1] 
        }
    }
};

const AboutMe = () => {
    return (
        <section id="about" className="h-screen bg-[#dfdfdf] flex items-center">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 h-full items-center">
                    {/* Left Side - Image with vertical border */}
                    <motion.div 
                        initial={{ opacity: 0, y: -80 ,filter: "blur(15px)"}}
                        whileInView={{ opacity: 1, y: 0 , filter: "blur(0px)"}}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="relative flex items-center justify-center border-r-2 border-black pr-8 md:pr-12"
                    >
                        <div className="w-full max-w-xs">
                            <div className="bg-black boruto-img shadow-2xl overflow-hidden">
                                <img
                                    src={boruto}
                                    alt="About me"
                                    className="w-full h-auto object-cover grayscale"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <div className="relative flex flex-col justify-center pl-8 md:pl-12 md:col-span-2">
                        {/* Title with top border */}
                        <motion.div
                            initial={{ opacity: 0, y: -50 ,filter: "blur(15px)"}}
                            whileInView={{ opacity: 1, y: 0 , filter: "blur(0px)"}}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                            className=" pt-6 mb-8"
                        >
                            <h1 className="text-5xl md:text-6xl font-bold">About me</h1>
                        </motion.div>

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 ,filter: "blur(15px)"}}
                            whileInView={{ opacity: 1, y: 0 , filter: "blur(0px)"}}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-6 pr-5 text-base md:text-lg leading-relaxed text-gray-900"
                        >
                            <p>
                               I’m a passionate full-stack web developer with a strong focus on building modern, responsive, and user-friendly applications. I enjoy turning ideas into real, functional products by combining clean UI design with solid backend logic. I’m especially interested in understanding how things work under the hood, which is why I prefer building features step-by-step rather than relying entirely on automation.
                            </p>

                            <p>
                               Currently, I work primarily with the MERN stack and modern tools like React, Tailwind CSS, Framer Motion, Node.js, and MongoDB. Through hands-on projects like finance trackers, utility hubs, and full-stack applications, I continuously sharpen my problem-solving skills and development workflow. My goal is to keep growing as a developer, build impactful products, and contribute to real-world projects that challenge me both technically and creatively.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;