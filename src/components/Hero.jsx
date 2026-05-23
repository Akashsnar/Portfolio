import React from 'react'
import profilePic from "../assets/MyProfile.png"
import { motion } from "framer-motion"
import { buttonVariants } from './ui/Button'
import { cn } from "../utils/cn";
import { ArrowRight } from "lucide-react";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    },
})

const Hero = () => {
    return (
        <div id="Hero" className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-col gap-8 lg:flex-row lg:gap-0 flex-wrap'>
                {/* Left: Name/Title (mobile: order-1, desktop: order-1) */}
                <div className='order-1 w-full lg:order-1 lg:w-1/2 flex flex-col items-center lg:items-start lg:justify-start lg:pl-10'>
                    <div className='flex flex-col items-center lg:items-start lg:pl-10'>
                        <motion.div
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className='flex items-end gap-2 text-xl font-thin tracking-tight text-center lg:text-left'
                        >
                            <span>🖐 Hi,</span>
                            <span>I am</span>
                        </motion.div>
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            whileHover={{
                                scale: 1.2,
                                rotate: 8,
                            }}
                            transition={{ type: "spring", stiffness: 200 }}
                            className='pb-6 text-5xl font-semibold tracking-tight lg:mt-2 lg:text-8xl inline-block origin-center transition-all duration-500 ease-out hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:via-fuchsia-500 hover:to-indigo-500'
                        >
                            Akash
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
                            Full Stack Developer
                            / Backend Developer
                        </motion.span>
                        {/* <motion.p 
                         variants={container(1)}
                         initial="hidden"
                         animate="visible"
                        className='my-2 max-w-xl py-6 font-light text-lg tracking'>{HERO_CONTENT}
                        </motion.p> */}
                    </div>
                    {/* Buttons: mobile order-3, desktop order-2 */}
                    <div className="order-3 w-full flex flex-col items-center gap-4 mt-8 sm:flex-row sm:items-start sm:justify-center lg:justify-start lg:ml-10 lg:order-2">
                        <a
                            href="#contact"
                            className={cn(buttonVariants({ size: "lg" }), "w-full rounded-full px-8 text-base font-medium bg-white text-black hover:bg-neutral-100 hover:scale-105 hover:shadow-lg transition-transform duration-300 sm:w-auto")}
                        >
                            Contact Me
                        </a>
                        <a
                            href="#Projects"
                            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full rounded-full px-8 text-base font-medium border-border hover:bg-accent hover:text-accent-foreground hover:scale-110 hover:shadow-md transition-transform duration-300 sm:w-auto")}
                        >
                            View Projects <ArrowRight className="ml-2 size-4" />
                        </a>
                    </div>
                </div>
                {/* Image: mobile order-2, desktop order-2 */}
                <div className='order-2 w-full flex justify-center lg:order-2 lg:w-1/2 lg:p-8'>
                    <motion.img
                        initial={{ x: 0, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        src={profilePic}
                        alt="Akash Singh"
                        className='w-40 sm:w-56 md:w-64 lg:w-80 xl:w-96 h-auto rounded-2xl object-cover shadow-lg max-w-full'
                    />
                </div>


            </div>
        </div>
    )
}

export default Hero
