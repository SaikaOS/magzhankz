'use client'
import React from 'react'

const Likes = () => {
    const [likes, setLikes] = React.useState(0)
    const [isLiked, setIsLiked] = React.useState(false)

    const handleLike = () => {
        setLikes(likes + 1)
        setIsLiked(true)
    }

    return (
        <div 
            onClick={handleLike}
            className={`w-[250px] rounded-2xl p-2 cursor-pointer hover:opacity-80 ${isLiked ? 'bg-[#FF6D6D]' : 'bg-[#F6F7F9]'}`}
        >
            <div className='flex justify-between w-7/12 m-auto items-center'>
                <span>
                    <svg 
                        width="32" 
                        height="32" 
                        viewBox="0 0 32 32" 
                        fill={isLiked ? 'white' : 'none'} 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            d="M30.6668 13.3333C30.6668 12.626 30.3859 11.9477 29.8858 11.4476C29.3857 10.9475 28.7074 10.6666 28.0002 10.6666H19.5735L20.8535 4.57325C20.8802 4.43992 20.8935 4.29325 20.8935 4.14658C20.8935 3.59992 20.6668 3.09325 20.3068 2.73325L18.8935 1.33325L10.1202 10.1066C9.62683 10.5999 9.3335 11.2666 9.3335 11.9999V25.3333C9.3335 26.0405 9.61445 26.7188 10.1145 27.2189C10.6146 27.719 11.2929 27.9999 12.0002 27.9999H24.0002C25.1068 27.9999 26.0535 27.3333 26.4535 26.3733L30.4802 16.9733C30.6002 16.6666 30.6668 16.3466 30.6668 15.9999V13.3333ZM1.3335 27.9999H6.66683V11.9999H1.3335V27.9999Z" 
                            fill={isLiked ? 'white' : '#172B4D'}
                        />
                    </svg>
                </span>
                <p className={`${isLiked ? 'text-white' : 'text-[#172B4D]'}`}>Ұнайды ({likes})</p>
            </div>
        </div>
    )
}

export default Likes
