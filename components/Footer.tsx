import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='flex flex-col max-w-[1440px] mx-auto px-6 lg:px-20 gap-14 mb-24'>




            <div className='flex flex-col gap-10 md:flex-row items-start md:gap-28'>
                <div className=''>
                    <Image src='hilink-logo.svg' height={20} width={20} alt='logo' className='w-[5rem] md:w-[6rem]' />
                </div>
                <div className='flex flex-wrap justify-start md:justify-between w-full gap-10'>
                    <div className='flex flex-col gap-5'>
                        <p className='font-bold text-[1.3rem] leading-[120%]'>Learn More</p>
                        <div className='flex flex-col gap-4'>
                            <Link href='/' className='text-gray-500'>About Hilink</Link>
                            <Link href='/' className='text-gray-500'>Press Releases</Link>
                            <Link href='/' className='text-gray-500'>Environment</Link>
                            <Link href='/' className='text-gray-500'>Jobs</Link>
                            <Link href='/' className='text-gray-500'>Privacy Policy</Link>
                            <Link href='/' className='text-gray-500'>Contact Us</Link>
                        </div>


                    </div>
                    <div className='flex flex-col gap-5'>
                        <p className='font-bold text-[1.3rem] leading-[120%]'>Our Community</p>
                        <div className='flex flex-col gap-4'>
                            <Link href='/' className='text-gray-500'>Climbing xixixi</Link>
                            <Link href='/' className='text-gray-500'>Hiking hilink</Link>
                            <Link href='/' className='text-gray-500'>Hilink kinthill</Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <p className='font-bold text-[1.3rem] leading-[120%]'>Contact Us</p>
                        <div className='flex flex-col gap-4'>
                            <Link href='/' className=''>
                                <div className='flex gap-4 md:flex-col lg:flex-row'>
                                    <p>Admin Officer</p>
                                    <p className='font-[500] text-[#0b233f]'>123-456-7890</p>
                                </div>
                            </Link>
                            <Link href='/' className=''>
                                <div className='flex gap-4 md:flex-col lg:flex-row'>
                                    <p>Email Officer</p>
                                    <p className='font-[500] text-[#0b233f]'>hilink@akinthil.com</p>
                                </div>
                            </Link>

                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <p className='font-bold text-[1.3rem] leading-[120%]'>Social</p>
                        <div className='flex gap-4'>
                            <Link href='/'><Image src='facebook.svg' height={25} width={25} alt='facebook' /></Link>
                            <Link href='/'><Image src='instagram.svg' height={25} width={25} alt='facebook' /></Link>
                            <Link href='/'><Image src='twitter (3).svg' height={25} width={25} alt='facebook' /></Link>
                            <Link href='/'><Image src='youtube.svg' height={25} width={25} alt='facebook' /></Link>
                            <Link href='/'><Image src='wordpress.svg' height={25} width={25} alt='facebook' /></Link>
                        </div>
                    </div>
                </div>


            </div>










            <div className='border-1 py-[1px] bg-gray-200'></div>

            <p className='flex justify-center text-gray-500'>2023 Hilink | All rights reserved</p>



        </footer>
    )
}

export default Footer
