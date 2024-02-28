import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import { Link } from 'lucide-react'
import React from 'react'

const Dropdown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='flex gap-2 text-[#B6BDC4] outline-none'>
                <div className='text-[13px] font-normal leading-5'>United States</div>
                <svg className="h-4 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 20" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </DropdownMenuTrigger>

            <DropdownMenuContent className='bg-slate-400'>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu >
    )
}

export default Dropdown
