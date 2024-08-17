import React from 'react';
import Link from "next/link";
import page from "@/app/page.js";
import about from "@/app/components/Aboutus/about.js";
import Image from "next/image";
import Logo from "@/images/Logo.png"
import Profile from "@/images/Profile.gif";
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
        <div className='flex justify-center '>
            <div className='w-[93vw] h-[12vh] bg-[#0f0529] rounded-full mt-[3vh] flex items-center justify-between px-[4vw]'>
                <Image id='logo' className='w-[6.3vw] h-[11vh]' src={Logo}></Image>
                <ul className='flex items-center gap-12'>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>Services</li>
                    <li className='cursor-pointer'>About Us </li>
                    <li className='cursor-pointer'>Contact Us</li>
                    <li className='cursor-pointer'> <Image className='w-[5.5vw] h-[11vh]' src={Profile}></Image></li>
                </ul>
               

            </div>

        </div>

    )
}

export default Navbar