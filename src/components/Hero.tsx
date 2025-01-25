"use client"

import { poppins, sourGummy } from '@/theme/font';
import textInputTheme from '@/theme/text_input';
import { useGSAP } from '@gsap/react'
import { TextInput } from 'flowbite-react';
import gsap from 'gsap';
import Image from 'next/image'
import React, { useRef } from 'react'
import { IoSearch } from "react-icons/io5";

const Hero = () => {
    const headTextRef = useRef(null);
    const outlineTextRef = useRef(null);
    const imageRef = useRef(null);

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

        gsap.from(imageRef.current, {
            opacity: 0,
            duration: 1.5,
            ease: "power4.out"
        })
    });

    return (
        <div className="max-w-7xl mx-auto">
            <h1 ref={outlineTextRef} className="text-[18rem] text-outline absolute -z-10 top-6 -left-1/4">Dreamofhappiness</h1>
            <div className="grid grid-cols-2 items-stretch">
                <div ref={headTextRef} className="flex flex-col items-start justify-center h-screen">
                    <h1 className={`${poppins.className} text-8xl font-bold text-primary`}>Feel The <span className={`${sourGummy.className} font-bold text-tertiary`}>Happiness</span> In Every Bite</h1>
                    <p className='my-7 text-secondary text-2xl font-medium'>kombinasi dari bahan alami terbaik untuk manisnya setiap momen</p>
                    {/* <button className='bg-secondary text-white py-2 px-4 rounded-xl text-xl'>Lihat Menu</button> */}
                    <TextInput sizing={"lg"} theme={textInputTheme} color='primary' id="email4" type="email" icon={IoSearch} placeholder="Cari menu favoritmu" required className='w-11/12 focus:!outline-primary' />
                </div>
                <div className="flex items-stretch justify-center">
                    <Image ref={imageRef} src="/hero.png" width={1024} height={1024} alt="hero" className='h-full w-full object-cover'></Image>
                </div>
            </div>
        </div>
    )
}

export default Hero