"use client"

import Card from "@/components/shared/Card";
import Label from "@/components/shared/Label";
import Main from "@/components/shared/Main";
import SmallCard from "@/components/shared/SmallCard";
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    })
  }, [])

  return (
    <section className="xl:ml-[280px] xl:mr-52  pl-10 pr-10">
      <Main />
      <Card />
      <SmallCard />

      <section className="grid grid-cols-1 md:grid-cols-2 md:place-items-end pb-8">
        <div className="p-normal-32 text-gray-basic">Sign up and get exclusive special deals</div>

        <form action="#">
          <div className="mb-3 flex ">
            <input className=" p-4 pl-10 max-w-[348px] 2xl:w-[348px] text-sm rounded-lg focus:outline-gray-light sm:rounded-none sm:rounded-l-xl bg-white shadow-sm " type="email" id="email" required />

            <button type="submit" className="py-4 px-5 text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary sm:rounded-none sm:rounded-r-xl focus:ring-4 focus:ring-primary-3000 p-normal-14 tracking-normal">Sign Up</button>

          </div>

        </form>
      </section>
    </section>
  );
}
