import Image from 'next/image'
import React from 'react'

const Guide = () => {
    return (
        <section className='max-w-[1440px] mx-auto mb-20 flex flex-col'>
            <div className='relative'>
                <Image
                    src="camp.svg"
                    alt='logo'
                    width={70}
                    height={70}
                    className='absolute top-[.08rem] left-[1.5rem] lg:top-[.08rem] w-12 lg:left-[5rem]' />
                <p className='mt-12 mx-6 lg:mx-20 text-[1.2rem] text-green-600 leading-[120%] mb-4'>WE ARE HERE FOR YOU</p>
            </div>

            <div className='mx-6 lg:mx-20 flex flex-col gap-4 items-start lg:gap-10 xl:flex-row xl:justify-between xl:gap-32 '>
                <h2 className='font-bold text-[2.6rem] leading-[120%] lg:text-[4rem] xl:w-screen xl:leading-none '>Guide You to Easy Path</h2>
                <p className='text-gray-500 text-[16px] lg:text-[17px] font-[400] xl:w-screen'>Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</p>
            </div>





            <div className='mt-20 flex items-center justify-center relative'>
                <div className=' py-8 border-2 border-gray-200 absolute w-[16rem] md:left-[5%] xl:top-[15%] rounded-[2rem] bg-white flex items-center justify-center gap-3'>
                    <Image src='meter.svg' height={25} width={25} alt='meter' />
                    <div className='flex flex-col gap-10'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row justify-between items-center gap-8'>
                                <p className='text-gray-400'>Destination</p>
                                <p className='text-green-600 font-bold'>48 min</p>
                            </div>
                            <p className='text-black text-[1.2rem] font-[700]'>Aguas Calientes</p>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-gray-400'>Start track</p>
                            <p className='text-black text-[1.2rem] font-[700]'>Wonorejo Pasuruan</p>

                        </div>
                    </div>
                </div>
                <Image src='/boat.webp' alt='boat' width={1000} height={700} className='w-full 2xl:rounded-[3rem]' />

            </div>


        </section>
    )
}

export default Guide
