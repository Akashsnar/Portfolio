

import aboutImg from "../assets/about.jpg";
// import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">
                About
                <span className="text-neutral-500"> Me</span>
            </h1>
            <div className="flex flex-wrap justify-center">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-5/6 pt-[3rem] flex justify-center">
                    <div className="flex justify-center">
                        <p className="max-w-3xl py-3 text-lg leading-8 text-center">
                            
                        I am a full stack Web and Software developer with a knack for crafting robust and scalable web applications. 
                        With 1 year of hands-on experience, I have honed my skills in back-end technologies like Javascript, Node.js, MySQL, Django, AWS 
                        and MongoDB and front-end technologies like React and Next.js.
                        My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.


                        </p>
                    
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About