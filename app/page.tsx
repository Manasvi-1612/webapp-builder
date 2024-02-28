import Card from "@/components/shared/Card";
import Label from "@/components/shared/Label";
import SmallCard from "@/components/shared/SmallCard";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <section className="xl:pl-72 xl:pr-60  pl-10 pr-10">
      <Card />
      <SmallCard />

      <section className="grid grid-cols-2">
        <div className="p-normal-32 text-gray-basic">Sign up and get exclusive special deals</div>

        <form action="#">
          <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
            <div className="relative">
              <input className="block p-3 pl-10 w-full text-sm rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg " placeholder="Enter your email" type="email" id="email" required/>
            </div>
            <div>
              <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary sm:rounded-none sm:rounded-r-lg focus:ring-4 focus:ring-primary-3000">Sign up</button>
            </div>
          </div>
          
        </form>
      </section>
    </section>
  );
}
