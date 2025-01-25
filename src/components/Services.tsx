import React from 'react'
import OutlineBigText from './OutlineBigText';
import Image from 'next/image';

const Services = () => {
    return (
        <div className='h-screen w-full max-w-7xl mx-auto relative'>
            <div className="pt-36 grid grid-cols-2 grid-rows-2 gap-10 gap-x-20 max-h-full items-center">
                <div className="self-start">
                    <OutlineBigText className='!text-8xl top-24'>Our Services</OutlineBigText>
                    <h1 className='text-6xl font-bold text-primary pl-10'>Our Service</h1>
                </div>
                <div className="justify-self-end">
                    <Image src="/service-blob/vector.svg" width={400} height={400} alt=""></Image>
                </div>
                <div className="justify-self-end">
                    <Image src="/service-blob/vector.svg" width={400} height={400} alt=""></Image>
                </div>
                <div className="">
                    <Image src="/service-blob/vector.svg" width={400} height={400} alt=""></Image>
                </div>
                
            </div>
        </div>
    )
}

export default Services