"use client"
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { LampContainer } from './ui/LampContainer';
import { motion } from "motion/react";
import SocialLink from './SocialLink';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='w-full  text-white pt-20 overflow-hidden '> 
            <LampContainer >
                <div className="flex flex-col"> 
                <motion.img
                    initial={{ opacity: 0.5,   }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    src='/logo-b.jpg' className='mx-auto h-30     ' alt='Company Logo' />

                <motion.h1
                    initial={{ opacity: 0.5, }}
                    whileInView={{ opacity: 1,   }}
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

                    initial={{ opacity: 0.5,   }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                ><div className="md:max-w-[40rem] md:text-sm  font-light   text-justify ">
                    As Du Shop est une agence de communication visuelle et de marketing digital, spécialisée dans la conception de cartes de visite et en solutions d’équipement de qualité pour entreprises. Nous accompagnons nos clients dans le développement de leur image de marque à travers des supports de communication percutants et des stratégies digitales efficaces. Notre équipe d'expert en infographie s'engage à offrir un service de qualité, alliant créativité et professionnalisme pour donner vie à vos idées.
                </div>
                    <div className='my-4  '> 
                        <SocialLink   />
                    </div>
                    <p className='text-xs'>&copy; {year} AS DU SHOP. All rights reserved  </p>
                 <p className='text-xs'> By Tendel Bantu</p>
                
                </motion.div>

</div>

            </LampContainer>






        </footer>
    );
};

export default Footer;