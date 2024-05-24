import { getComments } from '@/api/getNews'
import React from 'react'
import SingleComment from './SingleComment'
import NewComment from './NewComment'

export interface CommentType {
  id?: number
  email: string
  body: string
}

const CommentPage = async ({params}: {params: {id: string}}) => {
  const data:CommentType[] = await getComments(params.id)

  return ( 
    <div className='my-36 text-lg'>
      <p className='mb-10'>Пікірлер ({data.length })</p>
      <div className={`flex flex-col justify-between mb-20 ${data.length !==0 ? "min-h-[1500px]": ''}`}>
      {
        data.map((item, index) => (
          <SingleComment key={index} body={item.body} email={item.email}/>
        ))
      }
       <NewComment />
      </div>
    </div>
  )
}

export default CommentPage