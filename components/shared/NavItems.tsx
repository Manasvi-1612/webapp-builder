import { headerLinks } from '@/constants'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { IoSearch } from 'react-icons/io5'
import React from 'react'
import { SheetClose } from '../ui/sheet'

const NavItems = (props: any) => {

    const [SheetCloseWrapper, sheetCloseWrapperProps] = props.withSheetClose
        ? [SheetClose, { asChild: true }]
        : [React.Fragment, {}];

    return (
        <>
            <div className='max-w-sm flex items-center mt-6 md:mt-0'>
                <IoSearch size={24} color='#626E79' className='absolute mx-2' />
                <Input type='search' size={28} className='pl-10' />
            </div>

            <ul className='flex flex-col md:flex-row  md:flex-center gap-10 text-white'>
                {headerLinks.map((link, index) => (
                    <li key={link.title}>
                        <Link href={link.path}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default NavItems
