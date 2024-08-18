'use client'
import React from 'react';
// import Link from 'next/link';
// import { Link } from 'react-router-dom';
import page from "@/app/page.js";
import Image from "next/image";
import Logo from "@/images/Logo.png"
import Profile from "@/images/Profile.gif";
import "../Navbar/navbar.css"

// import About from '@/app/components/Aboutus/about.js';

// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";


// Let this below part be commented only don't remove it
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHouse, faFile, faAddressCard } from '@fortawesome/free-solid-svg-icons';


function Navbar() {





    // useGSAP(() => {
    //     const tl = gsap.timeline();
    //     tl.from("#logo", {
    //       y: -30,
    //       opacity: 0,
    //       duration: 1,
    //       delay:0.5
    //     });

    //   });


    return (
        <div className='flex justify-center fixeds'>
            <div className='w-[93vw] h-[12vh] bg-[#03256c] rounded-full mt-[3vh] flex items-center justify-between px-[4vw] shadow-xl shadow-[#0f0529]'>
                <Image id='logo' className='w-[6.3vw] h-[11vh]' src={Logo}></Image>
                <ul className='flex items-center gap-12 font-bold'>
                    <div id='home' className='flex items-center justify-center w-[110px] h-[40px] hover:bg-orange-500 hover:rounded-full  hover:font-bold'>
                        <li className='cursor-pointer'>Home</li>
                    </div>
                    <div className='flex items-center justify-center w-[110px] h-[40px] hover:bg-orange-500 hover:rounded-full  hover:font-bold'>
                        <li className='cursor-pointer'>Services</li>
                    </div>
                    <div className='flex items-center justify-center w-[110px] h-[40px] hover:bg-orange-500 hover:rounded-full  hover:font-bold' >
                        <li className='cursor-pointer'>About Us </li>
                    </div>
                    <div className='flex items-center justify-center w-[130px] h-[40px] hover:bg-orange-500 hover:rounded-full  hover:font-bold'>
                        <li className='cursor-pointer'>Contact Us</li>
                    </div>

                    <li className='cursor-pointer'> <Image className='w-[5.5vw] h-[11vh]' src={Profile}></Image></li>
                </ul>


            </div>

        </div>

    )
}

export default Navbar