import { getNews } from '@/api/getNews'
import CommentPage from '@/components/CommentPage'
import { navbar } from '@/components/Header'
import Likes from '@/components/Likes'
import MainPage, { News, colors, funcRandom } from '@/components/MainPage'
import SocialMedia from '@/components/SocialMedia'
import React from 'react'

const SingleNews = async ({params}: {params: {id: string}}) => {
    const data: News[] = await getNews()
    let id = Number(params.id)

  return (
     <div className='min-h-screen mb-44'>
        <div className='w-1/2 m-auto'>
            <h1 className='text-3xl text-[#172B4D] font-bold my-6'>{data[id - 1].title}</h1>
            <div className='flex justify-between items-center w-[200px] mb-4'>
            <span className={`${colors[funcRandom(colors)]}  text-xs text-white p-2 my-2 rounded-3xl text-center`}>{navbar[funcRandom(navbar)]}</span>
            <p className={`text-sm text-black'}`}>
              {new Date(data[id - 1].publishedAt).toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</p>
            </div>
            <img className='rounded-3xl mb-10' height={380} width={676} src={data[id - 1].urlToImage} alt="img" />
            <p className='text-[#172B4D] text-lg'>{data[id - 1].description}</p>
            <div className='flex justify-between items-center mt-12 mr-6'>
            <Likes />
            <SocialMedia />
            </div>
            <CommentPage params={params} />
        </div>
        <MainPage bgColor={"bg-white"} isMainPage={false}/>
    </div>
  )
}

export default SingleNews