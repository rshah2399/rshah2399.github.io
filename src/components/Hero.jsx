import { motion } from "framer-motion";
import { styles } from "../styles";
import ComputersCanvas from "./canvas/Computers";

const Hero = () => {
    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div
                className={`absolute inset-0 top-[80px] md:top-[100px] lg:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-start gap-5`}
            >
                <div className='flex flex-col justify-center items-center mt-16 sm:mt-28 md:mt-5 lg:mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                    <div className='w-1 h-32 sm:h-80 violet-gradient' />
                </div>

                <div className="mt-16 sm:mt-28 md:mt-5 lg:mt-5">
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I'm <span className='text-[#915EFF]'>Rahil</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        I craft user-centric solutions with<br />
                        technical expertise and strategic innovation.
                    </p>
                </div>
            </div>

            <ComputersCanvas />

            <div className='absolute xs:bottom-2 bottom-8 md:bottom-16 lg:bottom-24 w-full flex justify-center items-center'>
                <a href='#about'>
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                        <motion.div
                            animate={{
                                y: [0, 36, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className='w-3 h-3 rounded-full bg-secondary mb-1'
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;