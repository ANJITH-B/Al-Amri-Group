'use client'
import { SentenceAnimation } from '@/components/AnimationText'
import React from 'react'

const Search:React.FC = () => {
  return (
    <div className='w-full py-20 xl:py-20 flex flex-col gap-5 items-center'>
        <SentenceAnimation className='text-4xl' sentences={['Rental Categories']}/>
        <h1 className='  w-[560px] text-center'> 
        Discover top-quality lifestyle apparel, catering, and construction solutions designed to elevate your projects. Experience excellence, reliability, and unmatched service with Al Amri Group </h1>
        <div className='border-1 border-gray-600 rounded-2xl h-10'>
            <input className='border-0'/>
            <button className='bg-black text-white px-5 py-1 rounded-2xl'>Search</button>
        </div>
    </div>
  )
}

export default Search