import { News } from '@/utils/types'
import React from 'react'

interface NewsInfoProps {
    data: News[]
    id: number
  }  

  const NewsContent: React.FC<NewsInfoProps> = ({ data, id }) => {
  return (
    <div>
            <img className='rounded-3xl mb-10' height={380} width={676} src={data[id - 1].urlToImage} alt="img" />
            <p className='text-[#172B4D] text-lg'>{data[id - 1].description}</p>
            </div>
  )
}

export default NewsContent