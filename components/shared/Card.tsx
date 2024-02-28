"use client"

import Image from 'next/image'
import React from 'react'
import RatingComponent from './RatingComponent'
import ButtonComponent from './ButtonComponent'
import { cardData } from '@/constants'
import { Label } from '@radix-ui/react-dropdown-menu'

const Card = () => {
  return (
    <section>
      <div className='flex flex-col gap-7'>

        {cardData.map((card, index) => (
          <div key={index}>
            {card.tagIcon && <Label className='bg-[#FF7724] max-w-[136px] flex-center gap-2 py-[5px] ml-5 text-white p-normal-16 tracking-tight rounded-r-lg'>
              <Image src={card.tagIcon} alt="" width={20} height={20} />
              {card.tag}
            </Label>}
            <div className="rounded-[32px]  md:grid md:grid-cols-4 lg:mt-0 text-gray-custom">
              <div className="col-span-1">
                <div className='rounded-full border border-[#E1E4E6] max-w-[44px] p-normal-20 flex-center p-[10px] mt-[14px]'>{index + 1}</div>
                <div className='flex-center flex-col  gap-2'>
                  <Image
                    src={card.img}
                    alt="web"
                    width={141} height={103}
                  />
                  <p className='text-[#626E79] p-normal-13 tracking-tight'>{card.heading}</p>
                </div>
              </div>
              <div className="col-span-2">
                <ul className="p-1 p-normal-16 tracking-tight gap-2">
                  <li className="">
                    <span className="h4-bold">{card.title}</span>
                    {card.excerpt}
                  </li>
                  <li className="">
                    <h4 className="h4-bold">Main highlights</h4>
                    <p className='px-[19px] py-3'>{card.highlights}</p>
                  </li>
                  <li className='pt-2'>Show more</li>
                </ul>
              </div>

              <div className='col-span-1 flex flex-col items-center justify-between'>
                <RatingComponent rating={card.rating} tag={card.ratingTag} />
                <ButtonComponent title='View' />
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}

export default Card
