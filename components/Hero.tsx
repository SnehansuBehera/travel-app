import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className='py-9 pb-28 z-10 flex flex-col  gap-20 max-w-[1440px] mx-auto px-6 lg:py-20 lg:px-20 xl:flex-row  3xl:px-0'>

            <div className='relative flex flex-col xl:w-1/2'>
                <Image
                    src="camp.svg"
                    alt='logo'
                    width={50}
                    height={50}
                    className='absolute top-[-1.3rem] w-9 left-[-0.2rem] lg:w-[2.9rem]'
                />
                <h1 className="font-[700] text-[52px] leading-[120%] lg:text-[88px] lg:leading-[120%]">Putuk Truno Camp Area</h1>

                <p className='mt-6 text-gray-500 text-[16px] font-[400]'>We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app</p>

                <div className="my-10 py-1 flex flex-wrap gap-2">
                    <Image src="star.svg" height={25} width={25} alt='' />
                    <Image src="star.svg" height={25} width={25} alt='' />
                    <Image src="star.svg" height={25} width={25} alt='' />
                    <Image src="star.svg" height={25} width={25} alt='' />
                    <p className='text-[1.2rem] font-bold'>198k<span className='font-normal mx-1'>Excellent Reviews</span></p>
                </div>
                <div className='flex flex-col gap-2 sm:flex-row sm:justify-start'>
                    <Button
                        text="Download App"
                        imgClass="hidden"
                        design="px-6 py-4 bg-green-600 text-white" />
                    <Button
                        text="How we work?"
                        imgClass="block"
                        img="play.svg"
                        design="px-6 py-2 text-black" />
                </div>

            </div>
            <div className='flex items-start relative xl:w-1/2'>
                <div className='flex  flex-col relative  rounded-[1rem] px-7 py-8 w-[15rem] gap-7 bg-[#292C27]  text-white'>
                    <div>
                        <div className='flex items-center justify-between'>
                            <p className='text-[0.9rem] text-gray-400'>Location</p>
                            <Image
                                src="close.svg"
                                alt='close'
                                height={24}
                                width={24}

                            />
                        </div>
                        <p className='font-bold '>Aguas Calientes</p>

                    </div>
                    <div className='flex items-center justify-between gap-2'>
                        <div>
                            <p className='text-[0.9rem] text-gray-400'>Distance</p>
                            <p className='font-bold '>173.28 mi</p>
                        </div>
                        <div>
                            <p className='text-[0.9rem] text-gray-400'>Elevation</p>
                            <p className='font-bold '>2.040 km</p>
                        </div>
                    </div>
                </div>


            </div>



        </section>
    )
}

export default Hero
