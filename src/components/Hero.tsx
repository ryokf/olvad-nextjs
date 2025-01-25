"use client"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import Image from 'next/image'
import React, { useRef } from 'react'

const Hero = () => {
    const headTextRef = useRef(null);
    const outlineTextRef = useRef(null);

    useGSAP(() => {
        gsap.from(headTextRef.current, {
            opacity: 0,
            x: -100,
            duration: 1,
            ease: "power4.out"
        })

        gsap.from(outlineTextRef.current, {
            opacity: 0,
            x: 100,
            duration: 1,
            ease: "power4.out"
        })
    });

    return (
        <div className="max-w-7xl mx-auto">
            <h1 ref={outlineTextRef} className="text-[20rem] text-outline absolute -z-10 top-5 -left-1/4">Dreamofhappiness</h1>
            <div className="grid grid-cols-2 items-stretch">
                <div className="flex flex-col items-start justify-center h-screen">
                    <h1 ref={headTextRef} className="text-9xl font-bold text-primary">Dream Of Happiness</h1>
                    <p className='my-7 text-secondary text-3xl font-light'>kombinasi dari bahan alami terbaik untuk manisnya setiap momen</p>
                    <button className='bg-secondary text-white py-2 px-4 rounded-xl text-xl'>Lihat Menu</button>
                </div>
                <div className="flex items-stretch justify-center">
                    <Image src="/hero.png" width={1024} height={1024} alt="hero" className='h-full w-full object-cover'></Image>
                </div>
            </div>
        </div>
    )
}

export default Hero