import { getNews } from '@/api/getNews'
import MyNews from '@/components/News/MyNews'
import { News } from '@/utils/types'
import React from 'react'

const OtherNews = async() => {
    const news: News[] = await getNews()
    const data = news.slice(0, 6)

    data.forEach((item, index) => {
      item.id = index + 1
  })
    
  return (
    <main className={`bg-white m-auto mt-7 px-14`}>
            <section className='grid grid-cols-3 gap-6 grid-rows-2'>
                {
                    data.map((item, index) => (
                            <MyNews index={index} key={index} item={item} isRowsThree={false}/>
                    ))
                }
            </section>
        </main>
  )
}

export default OtherNews