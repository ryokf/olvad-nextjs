"use client"

import React, { useRef } from 'react'
import OutlineBigText from './OutlineBigText';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

const About = () => {
    const outlineTextRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    
    
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: outlineTextRef.current, // start the timeline animation when ".container" enters the viewport (once)
        });

        tl.from(outlineTextRef.current, {
            opacity: 0,
            x: -100,
            duration: 1,
            ease: "power4.out"
        })
    });

    return (
        <div className="h-screen max-w-7xl mx-auto relative flex justify-center items-center">
            <OutlineBigText ref={outlineTextRef} className='-left-1/3 top-6 !text-[10rem]'>OurStoryOurstoryOurStoryOurStory</OutlineBigText>
            <div className="">
                <h1 className='text-8xl mx-16 my-8 font-bold text-primary'>About Us</h1>
                <div className="grid grid-cols-2 gap-x-">
                    <div className="flex justify-center">
                        <Image src="/about.jpg" width={1000} height={1000} className="object-cover w-[35rem] aspect-square rounded-xl" alt="Flowbite React Logo"></Image>
                    </div>
                    <div className="">
                        <p className='my-7 text-secondary text-2xl font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae commodi magnam obcaecati illum perspiciatis, porro quas dolore doloremque accusantium tempora vel autem iure sed debitis ex, repellendus, labore sequi explicabo.</p>
                        <p className='my-7 text-secondary text-2xl font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae commodi magnam obcaecati illum perspiciatis, porro quas dolore doloremque accusantium tempora vel autem iure sed debitis ex, repellendus, labore sequi explicabo.</p>
                        <button className='bg-secondary text-white py-2 px-4 rounded-xl text-xl'>Lihat Menu</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About