import { News } from '@/utils/types'
import Link from 'next/link'
import React from 'react'

export const colors = ["bg-[#4B68A1]", "bg-[#479CFF]", "bg-[#FF6D6D]", "bg-[#1EBD71]", 
                      "bg-[#B957D2]", "bg-[#FFB72C]", "bg-[#AA2424]", "bg-[#4B47E2]"]

export const navbar = ["Ақпарат", "Әдебиет", "Өнер", "Ғылым", 
                        "Эксклюзив", "Карьера", "Спорт", "Тарих"]

export const funcRandom = (arr: string[]) => {
    return Math.floor(Math.random() * arr.length)
}

const MyNews = ({item, index, isRowsThree}: {item: News, index: number, isRowsThree: boolean}) => {
    console.log(colors[1])
  return (
    <Link
    href={`/news/${item.id}`} key={index}
        className={`rounded-3xl shadow-md p-4 flex flex-col cursor-pointer hover:opacity-80 ${index % 2 === 0 ? 'justify-end' : 'justify-around'} ${index === 1 && isRowsThree ? 'col-span-2 row-span-2' : ''}`}
        style={index % 2 === 0 ? { backgroundImage: `url(${item.urlToImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
    >
        {index % 2 !== 0 && (
            <img src={item.urlToImage} className='rounded-3xl ' alt='img'/>
        )}
        <span className={`${colors[funcRandom(colors)]} text-sm text-white px-1 py-2 my-2 rounded-3xl w-[120px] text-center`}>{item.tag}</span>
        <h2 className={`text-xl font-bold mb-2 ${!item.urlToImage && 'text-black'} ${index % 2 === 0 ? 'text-white' : 'text-black'}`}>
            {item.title}
        </h2>
        <p className={`text-sm font-bold mb-2 ${!item.urlToImage && 'text-black'} ${index % 2 === 0 ? 'text-white' : 'text-black'}`}>
            {new Date(item.publishedAt).toLocaleString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })}
        </p>
    </Link>
  )
}

export default MyNews