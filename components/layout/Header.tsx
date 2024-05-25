import React from 'react'
import Image from 'next/image'
import { Bad_Script } from 'next/font/google'
import { Chau_Philomene_One } from 'next/font/google'
import { navbar } from '../News/MyNews'

const badScript = Bad_Script({ subsets: ['latin'], weight: '400' })
const chauPhilomeneOne = Chau_Philomene_One({ subsets: ['latin'], weight: '400' })

const Header = () => {
  return (
    <div className='flex flex-col h-[136px] justify-between px-12 m-auto bg-white'>
      <div className='flex justify-between items-center h-[72px]'>
        <p className={`${badScript.className} text-xl`}>Мен жастарға сенемін</p>
        <h1 className={`${chauPhilomeneOne.className} text-3xl`}>Magzhan.kz</h1>
        <p className={`${badScript.className} text-xl`}>Мағжан Жұмабаев</p>
      </div>
      <div className='flex justify-between bg-[#F6F7F9] rounded-3xl shadow-md mb-4'>
      <ul className='flex justify-around items-center w-3/5 h-[48px]'>
        {
          navbar.map((item, index) => (
            <li key={index} className='hover:bg-[#172B4D] hover:text-white hover:cursor-pointer rounded-3xl p-3'>{item}</li>
          ))
        }
      </ul>
      <Image src={"/icons/search_icon.svg"} width={36} height={36} alt='search icon' className='mr-2 hover:cursor-pointer'/>
      </div>
    </div>
  )
}

export default Header