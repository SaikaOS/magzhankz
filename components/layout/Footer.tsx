import React from 'react'
import { navbar } from '../News/MyNews'

const Footer = () => {
  return (
    <div className='bg-[#172B4D] h-[300px] flex flex-col items-center justify-around text-white'>
      <ul className='flex justify-between w-[715px]'>
        {
          navbar.map(item => (
            <li className='text-base cursor-pointer hover:opacity-80'>{item}</li>
          ))
        }
      </ul>
      <div>
        <p>Байлыныс үшін: magzhankz@gmail.com</p>
      </div>
      <div>
        <p>Барлық құқықтар сақталған@2024</p>
      </div>
    </div>
  )
}

export default Footer