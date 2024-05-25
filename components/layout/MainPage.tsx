import React from 'react'
import Pagination from '../UI/Pagination'
import { getNews } from '@/api/getNews'
import MyNews, { funcRandom, navbar } from '../News/MyNews'
import { News } from '@/utils/types'

interface Params {
    page?: string
    per_page?: string
}

const MainPage = async ({searchParams = {page: '1', per_page: '10'}, isMainPage = true}
:{searchParams?: Params, isMainPage: boolean}) => {

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
        <main className="bg-[#F6F7F9] m-auto mt-7 px-14">
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(150px,_auto)]'>
                {
                    entries.map((item, index) => (
                            <MyNews index={index} key={item.id} item={item} isRowsThree={true}/>
                    ))
                }
            </section>
            {isMainPage && <Pagination len={data.length} perPage={10}/>}
        </main>
    )
}

export default MainPage