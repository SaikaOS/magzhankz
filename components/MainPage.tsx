import React from 'react'
import Pagination from './Pagination'
import Link from 'next/link'
import { getNews } from '@/api/getNews'
import { navbar } from './Header'

export const API_KEY = "cc2bd8e2c6ee4a9fab7d5e7dd953b8a1"

export const colors = ["bg-[#4B68A1]", "bg-[#479CFF]", "bg-[#FF6D6D]", "bg-[#1EBD71]", 
                      "bg-[#B957D2]", "bg-[#FFB72C]", "bg-[#AA2424]", "bg-[#4B47E2]"]

export const funcRandom = (arr: string[]) => {
    return Math.floor(Math.random() * arr.length)
}

export interface News {
    title: string
    urlToImage: string
    publishedAt: Date
    description: string
    id: number
    tag: string
}

interface Params {
    page?: string
    per_page?: string
}

const MainPage = async ({searchParams = {page: '1', per_page: '10'}, bgColor, isMainPage = true}
:{searchParams?: Params, bgColor: string, isMainPage: boolean}) => {

    const data: News[] = await getNews()

    const page: number = Number(searchParams['page']) || 1
    const per_page: number = Number(searchParams['per_page']) || 10
    const start: number = (page - 1) * per_page
    const end: number = page * per_page
    const entries: News[] = data.slice(start, end)

    data.forEach((item, index) => {
        item.id = index + 1
        item.tag = navbar[funcRandom(navbar)]
    })

    return (
        <main className={`${bgColor} m-auto mt-7 px-14`}>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(150px,_auto)]'>
                {
                    entries.map((item, index) => (
                            <Link
                            href={`/news/${item.id}`} key={index}
                                className={`rounded-3xl shadow-md p-4 flex flex-col cursor-pointer hover:opacity-80 ${index % 2 === 0 ? 'justify-end' : 'justify-around'} ${index === 1 ? 'col-span-2 row-span-2' : ''}`}
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
                    ))
                }
            </section>
            {isMainPage && <Pagination len={data.length} perPage={10}/>}
        </main>
    )
}

export default MainPage
