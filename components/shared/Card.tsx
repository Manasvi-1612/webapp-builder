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
          <div key={index} data-aos="fade-up">
            {card.tagIcon && <Label className='bg-[#FF7724] max-w-[136px] flex-center gap-2 py-[4px] ml-5 text-white p-normal-16 tracking-tight rounded-r-lg'>
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
                  <li className='pt-2 text-[#1B88F4]'>Show more</li>
                </ul>
              </div>

              <div className='col-span-1 flex flex-col items-center justify-between gap-4 md:gap-0'>
                <RatingComponent rating={card.rating} tag={card.ratingTag} />
                <ButtonComponent title='View' />
              </div>
            </div>
          </div>
        ))}

        <div className='pt-10' data-aos="fade-up"
            data-aos-easing="ease-in-back"
            data-aos-delay="300">
          <div className="rounded-[32px]  md:grid md:grid-cols-4 lg:mt-0 text-gray-custom">
            <div className="col-span-1">
              <div className='rounded-full border border-[#E1E4E6] max-w-[44px] p-normal-20 flex-center p-[10px] mt-[14px]'>{cardData.length + 1}</div>
              <div className='flex-center flex-col  gap-2'>
                <Image
                  src={"/assets/images/web.png"}
                  alt="web"
                  width={141} height={103}
                />
                <p className='text-[#626E79] p-normal-13 tracking-tight'>CDK</p>
              </div>
            </div>
            <div className="col-span-2">
              <ul className="p-1 p-normal-16 tracking-tight gap-2">
                <li className="">
                  <span className="h4-bold">CDK Resposive Builder: </span>
                  An extensive library of widgets and apps, and detailed step-by-step guides
                  <p className='bg-gray-light p-normal-13 py-[4px] px-1 rounded-lg max-w-[60px] text-[#074786] mt-2'>20% Off</p>
                </li>
                <li className="">
                  <h4 className="h4-bold">Main highlights</h4>
                  <ul className='mx-[19px] py-3 mt-2 bg-[#FFF4ED] rounded-xl text-[#1B88F4] flex flex-col gap-[10px] p-normal-15'>
                    <li><span className='bg-[#FFFFFF] rounded px-2 py-1 mx-3'>9.9</span>Building Responsive</li>
                    <li><span className='bg-[#FFFFFF] rounded px-2 py-1 mx-3'>8.9</span> Cool</li>
                    <li><span className='bg-[#FFFFFF] rounded px-2 py-1 mx-3'>8.9</span> Docs</li>
                  </ul>
                </li>

                <li className="p-normal-16">
                  <h4 className='py-3'>Why we love it</h4>
                  <ul className='flex flex-col gap-1'>
                    <li className='flex gap-2'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 1.25C9.03169 1.25 6.34318 2.45406 4.3986 4.3986C3.40884 5.38837 2.61093 6.57088 2.06597 7.88493C1.38329 9.27784 1 10.8442 1 12.5C1 18.2989 5.70101 23 11.5 23C13.1558 23 14.7222 22.6166 16.1151 21.934C17.4291 21.389 18.6116 20.5912 19.6014 19.6014C21.546 17.6568 22.7501 14.9683 22.7501 12C22.7501 9.03169 21.546 6.34317 19.6014 4.3986C17.6568 2.45406 14.9683 1.25 12 1.25Z" fill="#EBF5FF" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.5303 8.46967C17.8233 8.76257 17.8233 9.23743 17.5303 9.53033L11.5303 15.5303C11.2374 15.8232 10.7626 15.8232 10.4697 15.5303L7.46967 12.5303C7.17678 12.2375 7.17678 11.7626 7.46967 11.4697C7.76256 11.1768 8.23743 11.1768 8.53033 11.4697L11 13.9393L16.4697 8.46967C16.7626 8.17678 17.2374 8.17678 17.5303 8.46967Z" fill="#0855A1" />
                    </svg>
                      Documentation</li>
                    <li className='flex gap-2'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 1.25C9.03169 1.25 6.34318 2.45406 4.3986 4.3986C3.40884 5.38837 2.61093 6.57088 2.06597 7.88493C1.38329 9.27784 1 10.8442 1 12.5C1 18.2989 5.70101 23 11.5 23C13.1558 23 14.7222 22.6166 16.1151 21.934C17.4291 21.389 18.6116 20.5912 19.6014 19.6014C21.546 17.6568 22.7501 14.9683 22.7501 12C22.7501 9.03169 21.546 6.34317 19.6014 4.3986C17.6568 2.45406 14.9683 1.25 12 1.25Z" fill="#EBF5FF" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.5303 8.46967C17.8233 8.76257 17.8233 9.23743 17.5303 9.53033L11.5303 15.5303C11.2374 15.8232 10.7626 15.8232 10.4697 15.5303L7.46967 12.5303C7.17678 12.2375 7.17678 11.7626 7.46967 11.4697C7.76256 11.1768 8.23743 11.1768 8.53033 11.4697L11 13.9393L16.4697 8.46967C16.7626 8.17678 17.2374 8.17678 17.5303 8.46967Z" fill="#0855A1" />
                    </svg>
                      Easy Use</li>
                    <li className='flex gap-2'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 1.25C9.03169 1.25 6.34318 2.45406 4.3986 4.3986C3.40884 5.38837 2.61093 6.57088 2.06597 7.88493C1.38329 9.27784 1 10.8442 1 12.5C1 18.2989 5.70101 23 11.5 23C13.1558 23 14.7222 22.6166 16.1151 21.934C17.4291 21.389 18.6116 20.5912 19.6014 19.6014C21.546 17.6568 22.7501 14.9683 22.7501 12C22.7501 9.03169 21.546 6.34317 19.6014 4.3986C17.6568 2.45406 14.9683 1.25 12 1.25Z" fill="#EBF5FF" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.5303 8.46967C17.8233 8.76257 17.8233 9.23743 17.5303 9.53033L11.5303 15.5303C11.2374 15.8232 10.7626 15.8232 10.4697 15.5303L7.46967 12.5303C7.17678 12.2375 7.17678 11.7626 7.46967 11.4697C7.76256 11.1768 8.23743 11.1768 8.53033 11.4697L11 13.9393L16.4697 8.46967C16.7626 8.17678 17.2374 8.17678 17.5303 8.46967Z" fill="#0855A1" />
                    </svg>
                      Out of box</li>
                  </ul>
                </li>
                <li className='pt-2 text-[#1B88F4] -ml-6 '>Show more</li>
              </ul>
            </div>

            <div className='col-span-1 flex flex-col items-center justify-between gap-4 md:gap-0'>
              <RatingComponent rating={9.1} tag={"Very Good"} />
              <ButtonComponent title='View' />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Card
