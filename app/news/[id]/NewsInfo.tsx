import { navbar } from '@/components/layout/Header'
import { colors, funcRandom } from '@/utils/global-funcs'
import { News } from '@/utils/types'
import React from 'react'

interface NewsInfoProps {
  data: News[]
  id: number
}       

const NewsInfo: React.FC<NewsInfoProps> = ({ data, id }) => {
  const newId = Number(id)
  return (
    <div className='flex justify-between items-center w-[200px] mb-4'>
      <span className={`${colors[funcRandom(colors)]} text-xs text-white p-2 my-2 rounded-3xl text-center`}>
        {navbar[funcRandom(navbar)]}
      </span>
      <p className='text-sm text-black'>
        {new Date(data[newId - 1].publishedAt).toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </p>
    </div>
  )
}

export default NewsInfo
