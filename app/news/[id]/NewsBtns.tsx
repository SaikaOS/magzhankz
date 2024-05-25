import Likes from '@/components/UI/Likes'
import SocialMedia from '@/components/UI/SocialMedia'
import React from 'react'

const NewsBtns = () => {
  return (
    <div className='flex justify-between items-center mt-12 mr-6'>
            <Likes />
            <SocialMedia />
            </div>
  )
}

export default NewsBtns