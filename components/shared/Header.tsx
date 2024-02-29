import { headerLinks } from '@/constants'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { IoSearch } from 'react-icons/io5'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
    return (
        <section className='bg-custom flex-end md:flex-center h-16'>
            <MobileNav />
            <div className='hidden md:flex gap-[78px]'>
                <NavItems />
            </div>
        </section>
    )
}

export default Header
