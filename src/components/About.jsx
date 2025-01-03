

import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT, ABOUT_TEXT_2 } from "../constants";
import { motion } from "framer-motion";
const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">
                About
                <span className="text-neutral-500"> Me</span>
            </h1>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-2x1" src={aboutImg} alt="about" />
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 pt-[3rem]">
                    <div className=" justify-center lg:justify-start">
                        <p className="max-w-xl py-3 text-lg"> {ABOUT_TEXT}</p>
                        <p className="my-1 max-/w-xl py-3 text-lg"> {ABOUT_TEXT_2}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About