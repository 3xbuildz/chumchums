import React from 'react'
import Image from 'next/image'
import landingBg from "@/assets/WebsiteLanding/fillers/bgLanding.gif"

export const Landing = () => {
  return (
    <div className='flex items-end min-h-screen max-md:object-cover max-md:overflow-hidden max-sm:w-[38rem] max-[640px]:w-[45rem] max-md:w-[50rem] max-lg:w-[70rem] max-xl:w-[90rem] max-2xl:w-[110rem] 2xl:w-[145rem]' >
        <Image src={landingBg} alt='bg1' className='max-sm:w-[38rem] max-[640px]:w-[45rem] max-md:w-[50rem]  max-lg:w-[70rem] max-xl:w-[90rem] max-2xl:w-[110rem] 2xl:w-[145rem]'/>
    </div>
  )
}
