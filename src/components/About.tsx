"use client"

import React, { useRef, useEffect, useState } from 'react'
import OutlineBigText from './OutlineBigText';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { sourGummy } from '@/theme/font';
import CountUp from 'react-countup';

const About = () => {
    const outlineTextRef = useRef(null);
    const contentRef = useRef(null);

    const [isCountUpVisible, setIsCountUpVisible] = useState(false);

    useEffect(() => {
        setIsCountUpVisible(true);
    }, []);

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        const tlOutline = gsap.timeline({
            scrollTrigger: contentRef.current, // start the timeline animation when ".container" enters the viewport (once)
        });

        tlOutline.from(contentRef.current, {
            scale: 0,
            opacity: 0,
            duration: 1,
            ease: "power4.out"
        })

        const tlContent = gsap.timeline({
            scrollTrigger: contentRef.current, // start the timeline animation when ".container" enters the viewport (once)
        });

        tlContent.from(outlineTextRef.current, {
            opacity: 0,
            x: -100,
            duration: 1,
            ease: "power4.out"
        })
    });

    return (
        <div className="h-screen max-w-7xl mx-auto relative flex justify-center items-center">
            <OutlineBigText ref={outlineTextRef} className='-left-1/3 top-6 !text-[10rem]'>OurStoryOurstoryOurStoryOurStory</OutlineBigText>
            <div ref={contentRef}>
                <h1 className='text-8xl mx-20 my-8 font-bold text-primary'>About Us</h1>
                <div className="grid grid-cols-2 gap-x-">

                    <div className="flex justify-center">
                        <Image src="/about.jpg" width={1000} height={1000} className="object-cover w-[35rem] aspect-square rounded-xl" alt="Flowbite React Logo"></Image>
                    </div>
                    <div className="">

                        <p className=' text-secondary text-xl'>Selamat datang di <span className={`text-tertiary font-bold ${sourGummy.className}`}>Olvad</span>, tempat di mana kelezatan bertemu dengan kualitas. Kami berdedikasi untuk menyajikan roti, kue, dan pastry yang dibuat segar setiap hari menggunakan bahan-bahan pilihan terbaik. Dengan resep yang diracik penuh cinta dan perhatian, kami ingin setiap gigitan dari produk kami memberikan kehangatan dan kebahagiaan bagi Anda dan keluarga.</p>
                        <p className='my-7 text-secondary text-xl'>Sejak berdiri pada tahun 2023, kami telah menjadi bagian dari banyak momen istimewa pelanggan kami. Mulai dari seminar hingga pesta perayaan, kami berkomitmen untuk menghadirkan cita rasa yang tak terlupakan. Terima kasih telah mempercayakan Olvad sebagai pilihan Anda, dan kami berharap dapat terus menemani hari-hari Anda dengan roti dan kue terbaik.</p>
                        <div className="flex gap-x-4 justify-center w-full">
                            <div className="w-1/3 aspect-video rounded-xl  flex flex-col justify-center items-center">
                                <h2 className='text-3xl font-bold text-tertiary'>
                                    {isCountUpVisible && <CountUp start={0} end={50} duration={3} enableScrollSpy={true} />}
                                    {!isCountUpVisible && <span>50</span>}
                                    +
                                </h2>
                                <p className='font-medium text-lg text-tertiary'>Produk terbaik</p>
                            </div>
                            <div className="w-1/3 aspect-video rounded-xl  flex flex-col justify-center items-center">
                                <h2 className='text-3xl font-bold text-tertiary'>
                                    {isCountUpVisible &&<CountUp start={0} end={100} duration={3} enableScrollSpy={true} />}
                                    {!isCountUpVisible && <span>100</span>}
                                    +
                                </h2>
                                <p className='font-medium text-lg text-tertiary'>penjualan tiap bulan</p>
                            </div>
                            <div className="w-1/3 aspect-video rounded-xl  flex flex-col justify-center items-center">
                                <h2 className='text-3xl font-bold text-tertiary'>
                                    {isCountUpVisible &&<CountUp start={0} end={50} duration={3} enableScrollSpy={true} />}
                                    {!isCountUpVisible && <span>50</span>}
                                    +
                                </h2>
                                <p className='font-medium text-lg text-tertiary'>Pelanggan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About