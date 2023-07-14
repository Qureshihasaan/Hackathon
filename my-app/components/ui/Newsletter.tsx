import { Bruno_Ace } from 'next/font/google';
import React from 'react'

export const Newsletter = () => {
  return (
      <section className="mt-28 py-10 flex flex-col items-center justify-center text-center sm:text-left gap-4 relative ">
      <h2 className="text-[3rem] sm:text-[3rem] md:text-[6.875rem] leading-[110px] z-[1] absolute opacity-10 font-extrabold">Newsletter</h2>
      <h3 className="text-[2rem] font-bold text-[#212121]">Subscribe Our Newsletter</h3>
      <p className="text-base font-light mb-2">Get the latest information and promo offers directly</p>
      <div className="flex flex-col gap-1 sm:flex-row w-full max-w-md items-center z-10">
        <input
         type="email"
         placeholder="Input Email Address"
         className="bg-white rounded-none border-2 border-black focus-visible:ring-transparent"
         />
         <button className="h-10 w-32 bg-[#212121] border-2 border-[#212121] text-white rounded-none">Get Started</button>
      </div>
    </section> 
 
        )
}

export default Newsletter;
