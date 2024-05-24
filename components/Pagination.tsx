'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const Pagination = ({ len, perPage }: {len: number, perPage: number}) => {
  const router = useRouter()

  const totalPages = Math.ceil(len / perPage)

  const handleClick = (page: number) => {
    router.push(`/?page=${page}`)
  }

  return (
    <div className='flex justify-center h-[150px]'>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          className={`px-4 py-2 mx-1 text-[#172B4D] text-lg font-medium`}
          onClick={() => handleClick(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  )
}

export default Pagination
