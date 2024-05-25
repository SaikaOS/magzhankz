import { getNews } from '@/api/getNews'
import CommentPage from '@/components/Comment/CommentPage'
import React from 'react'
import NewsBtns from './NewsBtns'
import NewsInfo from './NewsInfo'
import { News } from '@/utils/types'
import NewsContent from './NewsContent'
import OtherNews from './OtherNews'

const SingleNews = async ({params}: {params: {id: string}}) => {
    const data: News[] = await getNews()
    const id = Number(params.id) 

  return (
     <div className='min-h-screen mb-44'>
        <div className='w-1/2 m-auto'>
            <h1 className='text-3xl text-[#172B4D] font-bold my-6'>{data[id - 1].title}</h1>
            <NewsInfo data={data} id={id}/>
            <NewsContent data={data} id={id}/>
            <NewsBtns />
            <CommentPage params={params} />
        </div>
        <OtherNews />
    </div>
  )
}

export default SingleNews