'use client'
import React, { useEffect, useRef } from 'react';
import page from "@/app/page.js";
import Image from "next/image";
import Logo from "@/images/Logo.png"
import Profile from "@/images/Profile.gif";
import "../Navbar/navbar.css"

// commands for gsap are "npm i gsap" & "npm i @gsap/react"

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Let this below part be commentedss , don't remove it
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHouse, faFile, faAddressCard } from '@fortawesome/free-solid-svg-icons';


function Navbar() {

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from("#nav", {
          y: -20,
          opacity: 0, 
          duration: 0.5,
          delay:0.3,
          stagger:-1
        });
        tl.from("#logo", {
            y: -20,
            opacity: 0, 
            duration: 0.6,
          });
          tl.from("#navelements li", {
            y: -20,
            opacity: 0, 
            duration: 0.4,
            stagger:0.3
          });

      });


    return (
        <div className='flex justify-center fixeds text-white'>
            <div id="nav" className='w-[93vw] h-[12vh] bg-[#03256c] rounded-full mt-[3vh] flex items-center justify-between px-[4vw] shadow-xl shadow-[#0f0529]'>
                <Image id="logo" className='w-[6.3vw] h-[11vh]' src={Logo}></Image>
                <ul id="navelements" className='flex items-center gap-12 font-bold'>
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