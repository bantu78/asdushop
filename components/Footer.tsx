"use client"
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { LampContainer } from './ui/LampContainer';
import { motion } from "motion/react";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='  text-white p-5'> 
            <LampContainer className='h-100'>
                <div className="flex flex-col">

                <motion.img
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    src='/logo.png' className='mx-auto h-20' alt='Company Logo' />

                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className=" bg-gradient-to-br from-slate-300 to-white py-4 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent md:text-2xl"
                >
                    AS DU SHOP
                </motion.h1>


 

                <motion.div className='text-center mt-2'

                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                >
                    <div className='mb-4'>
                        <FaFacebookF className='inline mx-2' />
                        <FaTwitter className='inline mx-2' />
                        <FaLinkedinIn className='inline mx-2' />
                        <FaInstagram className='inline mx-2' />
                    </div>
                    <p className='text-xs'>&copy; {year} AS DU SHOP. All rights reserved.</p>
                </motion.div>

</div>

            </LampContainer>






        </footer>
    );
};

export default Footer;