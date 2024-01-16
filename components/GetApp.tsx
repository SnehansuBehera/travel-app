import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
    return (
        <section className='mb-28 max-w-[1440px]  mx-auto bg-[#2A2D27] px-6 py-12 flex flex-col gap-28 sm:gap-14 sm:flex-row sm:justify-center sm:py-24 lg:px-20'>

            <div className='flex flex-col items-start sm:justify-center md:items-start sm:w-[25rem] md:w-[30rem] xl:items-start xl:justify-center xl:h-[25rem] xl:w-[45rem]' >
                <h2 className='font-[700] text-[2.6rem] lg:text-[4rem] xl:w-[20rem] leading-[120%]  text-white'>Get for free now!</h2>

                <p className='text-white my-14'>Available on iOS and Android</p>
                <div className='flex flex-col xl:flex-row  gap-2 w-full'>
                    <Button
                        text='App Store'
                        img='apple.svg'
                        imgClass="block"
                        design='text-green-500 bg-white py-4 xl:w-full'
                    />
                    <Button
                        text='Play Store'
                        img='android.svg'
                        imgClass="block"
                        design='text-white border-gray-400 border-[0.05rem] xl:w-full py-4'
                    />
                </div>
            </div>
            <div className='md:w-[30rem] sm:w-[25rem] xl:h-[25rem] relative' >
                <Image
                    src='/phones.webp'
                    width={1000}
                    height={100}
                    className='h-full w-full md:w-full xl:h-auto xl:absolute xl:top-[-10rem]'
                    alt='phones'
                />
            </div>
        </section>
    )
}

export default GetApp
