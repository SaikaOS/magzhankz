"use client"
import Image from 'next/image'
import React from 'react'

const SocialMedia = () => {
    const shareOnFacebook = () => {
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + window.location.href, '_blank')
    }
    const shareOnVk = () => {
        window.open('https://vk.com/share.php?url=' + window.location.href, '_blank')
    }
    const shareOnTwitter = () => {
        window.open('https://twitter.com/share?url=' + window.location.href, '_blank')
    }
  return (
    <div className="w-[250px] rounded-2xl  bg-[#F6F7F9] p-2">
            <div className='flex justify-between items-center w-7/12 m-auto'>
            <Image onClick={() => shareOnFacebook()} className='hover:opacity-80 cursor-pointer' src={"/icons/fb_icon.svg"} width={32} height={32} alt="facebook icon"/>
            <Image onClick={() => shareOnTwitter()} className='hover:opacity-80 cursor-pointer' src={"/icons/twitter_icon.svg"} width={32} height={32} alt="instagram icon"/>
            <Image onClick={() => shareOnVk()} className='hover:opacity-80 cursor-pointer' src={"/icons/vk_icon.svg"} width={32} height={32} alt="twitter icon"/>
            </div>
    </div>
  )
}

export default SocialMedia