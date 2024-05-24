import React from 'react'
import { CommentType } from './CommentPage'
import Image from 'next/image'

const SingleComment = ({body, email}: CommentType) => {
  return (
    <div className='flex justify-between w-[600px]'>
      <Image src={"/icons/comment_user_icon.svg"} width={64} height={64} alt="user icon" className='mb-auto mr-auto'/>
      <div className='w-[500px] flex flex-col justify-between min-h-[150px]'>
        <div className='flex justify-between w-5/6'>
        <h1>{email}</h1>
        <p className='text-[#CCCCCC]'>24 қазан 2024</p>
        </div>
        <p className='mt-4'>{body}</p>
        <hr className='mt-6'/>
      </div>
  </div>
  )
}

export default SingleComment