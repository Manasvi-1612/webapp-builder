'use client'

import { categoriesLinks, contactLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'
import Dropdown from './Dropdown'
import { Separator } from '@radix-ui/react-dropdown-menu'

const Footer = () => {
    return (
        <section className='bg-custom m-3'>
            <section className='flex flex-col-reverse lg:flex-row lg:items-center lg:justify-center xl:gap-56 gap-8 lg:gap-20 pt-[50px] lg:pb-44 xl:pr-44 px-3 lg:px-0 pb-10'>
                <div className='flex flex-col lg:flex-row justify-start xl:gap-52 lg:gap-20 gap-6'>
                    <div>
                        <h6 className='uppercase text-white pb-2'>Categories</h6>
                        <ul className='flex flex-col gap-[13px]'>
                            {categoriesLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.path} className='text-[13px] font-normal leading-5 text-[#B6BDC4]'>{link.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Separator className='border border-[#343a40] lg:hidden' />
                    <div>
                        <h6 className='uppercase text-white pb-2'>Contact</h6>
                        <ul className='flex flex-col gap-[13px]'>
                            {contactLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.path} className='text-[13px] font-normal leading-5 text-[#B6BDC4]'>{link.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Dropdown />

            </section>
        </section>
    )
}

export default Footer
