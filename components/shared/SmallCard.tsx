'use client';

import { smallCardData } from '@/constants'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import ButtonComponent from './ButtonComponent';

const SmallCard = () => {
    return (
        <section className={`py-14 lg:py-[100px]  md:px-10 lg:px-0`}>
            <h2 className='p-normal-32 text-[#2C384A] tracking-tight py-8' data-aos="zoom-in">Related deals you might like for</h2>
            <div className="">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView="auto"
                    spaceBetween={8}
                    loop={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}

                >
                    {smallCardData.map((item: any, i: number) => {
                        return (
                            <SwiperSlide key={i} >
                                <div className="rounded-3xl border border-transparent bg-white transition duration-500 px-5 pb-5 pt-7 max-w-[333px] shadow-sm" data-aos="zoom-in">
                                    <Image src={item.img} alt="web-builder" width={141} height={103} className='mx-auto' />
                                    <div className='text-[#074786] flex gap-1 pt-14'>
                                        <p className='bg-gray-light p-normal-13 py-[5px] px-[10px] rounded-lg'>{item.offer}</p>
                                        <p className='bg-gray-light p-normal-14 py-[5px] px-[10px] rounded-lg'>{item.tag}</p>
                                    </div>

                                    <div className="text-[#626E79] flex flex-col gap-2 pb-3 pt-2">
                                        <h4 className="h4-bold text-center">{item.title}</h4>
                                        <h5 className="p-normal-16 tracking-[0.020rem]">
                                            {item.excerpt}
                                        </h5>

                                        <div className='flex gap-[12.4px]'>
                                            <span className='p-normal-20 text-gray-basic'>
                                                ${item.price}
                                            </span>
                                            <sub className='p-normal-14 text-[#9FA9B3]'>
                                                ${item.originalPrice}
                                            </sub>
                                            <sub className='text-[#EF4C5D] p-normal-13'>({item.offer})</sub>
                                        </div>
                                    </div>

                                    <ButtonComponent title={'View Deal'} />
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default SmallCard
