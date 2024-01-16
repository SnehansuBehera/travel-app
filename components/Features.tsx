import React from 'react'
import AddFeat from './AddFeat'
import Image from 'next/image'
const Features = () => {
    return (
        <section className='xl:mx-10 xl:my-24 mb-20'>

            <div className='mx-6 lg:mx-20 lg:flex'>


                <div className='lg:min-w-[35vw] relative'><Image src='/phone (1).webp' height={1000} width={500} alt='phone' className='hidden absolute  lg:flex z-10 rotate-[15deg] top-[17%] left-[-3rem] xl:left-[-8rem] xl:top-[12%]' /></div>



                <div className='grid grid-rows-[0 1fr 1fr 1fr 1fr] md:grid-cols-2  gap-12 lg:gap-20'>
                    <div className='relative md:col-span-2 '>
                        <Image
                            src="camp.svg"
                            alt='logo'
                            width={70}
                            height={70}
                            className='absolute top-[-1.5rem] left-[-0.3rem] lg:top-[-1.4rem] w-10 lg:left-[-0.1rem] lg:w-[3.5rem]' />
                        <h2 className='font-bold text-[2.6rem] leading-[120%] lg:text-[5rem]'>Our Features</h2>
                    </div>
                    <AddFeat
                        indice='map.svg'
                        heading='Real Maps Can Be Offline'
                        about='We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location'
                    />
                    <AddFeat
                        indice='calendar.svg'
                        heading='Set An Adventure Schedule'
                        about='Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there is no more discussion' />
                    <AddFeat
                        indice='tech.svg'
                        heading='Technology Using Augment Reality'
                        about='Technology uses augmented reality as a guide to your hiking trail in the  forest to the top of the mountain. Already supported by the latest technology without an internet connection' />
                    <AddFeat
                        indice='location.svg'
                        heading='Many New Locations Every Month'
                        about='Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing' />

                </div>


            </div>

        </section>
    )
}

export default Features
