import React from 'react'
import { Button } from '../ui/button'

const ButtonComponent = ({ title }: { title: string }) => {
    return (
        <Button className='w-full rounded-xl py-[14px] bg-primary text-white' >
            {title}
        </Button>
    )
}

export default ButtonComponent
