"use client"

import React from 'react'
import { WalletConnectButton } from "@/components/WebsiteLanding/buttons/WalletConnectButton";
import { SiOpensea } from "react-icons/si";
import { RiEmojiStickerFill } from "react-icons/ri";
import { IoShareSocialSharp } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { usePathname, useRouter } from 'next/navigation';
import { GiHamburger, GiHamburgerMenu } from 'react-icons/gi';

export const Navbar = () => {

  const router = useRouter();

  return (
    <div className='fixed top-5 z-[100] flex items-center justify-center h-20 w-full '>
        <div className='max-md:hidden flex items-center gap-8'>
            <button className='flex items-center justify-center gap-2 text-lg hover:-translate-y-1 duration-200'>
                <SiOpensea className='text-3xl'/>
                Opensea
            </button>

            <button onClick={()=>{router.push("/sticker")}} className='flex items-center justify-center gap-2 text-lg hover:-translate-y-1 duration-200'>
                <RiEmojiStickerFill className='text-3xl'/>
                Sticker Gen
            </button>

            <button className='flex items-center justify-center gap-2 text-lg hover:-translate-y-1 duration-200'>
                <IoShareSocialSharp className='text-3xl'/>
                Socials
            </button>

            <button className='flex items-center justify-center gap-2 text-lg hover:-translate-y-1 duration-200'>
                <RiTeamFill className='text-3xl'/>
                Team
            </button>

            <WalletConnectButton/>
        </div>
        <div className='md:hidden flex gap-6'>
            <button className='flex items-center justify-center gap-2 text-lg hover:-translate-y-1 duration-200'>
                <SiOpensea className='text-3xl'/>
                
            </button>

            <button onClick={()=>{router.push("/sticker")}} className='flex items-center justify-center gap-2 text-lg hover:-translate-y-1 duration-200'>
                <RiEmojiStickerFill className='text-3xl'/>
            </button>

            <button className='flex items-center justify-center gap-2 text-lg hover:-translate-y-1 duration-200'>
                <IoShareSocialSharp className='text-3xl'/>
                
            </button>

            <button className='flex items-center justify-center gap-2 text-lg hover:-translate-y-1 duration-200'>
                <RiTeamFill className='text-3xl'/>
                
            </button>

            <WalletConnectButton/>
        </div>
    </div>
  )
}
