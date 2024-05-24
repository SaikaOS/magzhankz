"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const NewComment = () => {
  const [comment, setComment] = useState('')
  const [arr, setArr] = useState<string[]>([])
  const [editIndex, setEditIndex] = useState<number | null>(null)

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value)
  }

  const handleAddComment = () => {
    if (editIndex !== null) {
      const newArr = [...arr]
      newArr[editIndex] = comment
      setArr(newArr)
      setEditIndex(null)
    } else {
      setArr(prevArr => [...prevArr, comment])
    }
    setComment('')
  }

  const handleEdit = (index: number) => {
    setComment(arr[index])
    setEditIndex(index)
  }

  const handleDelete = (index: number) => {
    setArr(prevArr => prevArr.filter((_, i) => i !== index))
  }

  return (
    <div className=' flex flex-col justify-between'>
      <div>
        {arr.map((item, index) => (
          <div className='flex justify-between w-[600px]'>
      <Image src={"/icons/comment_user_icon.svg"} width={64} height={64} alt="user icon" className='mb-auto mr-auto'/>
      <div className='w-[500px] flex flex-col justify-between min-h-[150px]'>
        <div className='flex justify-between w-[100px]'>
        <h1>Сіз</h1>
        <p className='text-[#CCCCCC]'>бүгін</p>
        </div>
        <p className='mt-4'>{item}</p>
        <div className='ml-auto mt-auto w-[70px] flex justify-between items-center'>
             <button onClick={() => handleEdit(index)}>
               <Image src={"/icons/edit_icon.svg"} width={24} height={24} alt="edit icon"/>
             </button>
             <button onClick={() => handleDelete(index)}>
             <Image src={"/icons/delete_icon.svg"} width={24} height={24} alt="edit icon"/>
             </button>
             </div>
        <hr className='my-6'/>
      </div>
  </div>
        ))}
      </div>
      <div className='flex flex-col justify-between h-[180px] mt-4'>
        <textarea
          value={comment}
          onChange={onChange}
          placeholder='Пікіріңізді жазыңыз...'
          className='bg-[#F6F7F9] p-6 rounded-xl w-[600px] h-[120px]'
        ></textarea>
        <button
          onClick={handleAddComment}
          className='bg-[#172B4D] text-white py-2 px-4 rounded-2xl w-[200px] mt-auto ml-auto mr-28'
        >
          {editIndex !== null ? 'Сақтау' : 'Қосу'}
        </button>
      </div>
    </div>
  )
}

export default NewComment