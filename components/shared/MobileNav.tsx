import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import NavItems from "./NavItems"
import { HiMenuAlt3 } from "react-icons/hi";



const MobileNav = () => {
    return (
        <nav className="md:hidden">
            <Sheet>
                <SheetTrigger className="align-middle mr-10" asChild>
                    <HiMenuAlt3 size={23} color='white' />
                </SheetTrigger>
                <SheetContent side={'left'} className="flex flex-col gap-5 md:hidden bg-gray-600">
                    <NavItems  />
                </SheetContent>
            </Sheet>
        </nav>
    )
}

export default MobileNav