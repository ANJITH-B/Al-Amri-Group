"use client"
import React from 'react'

const loading = () => {
    return (
        <div className='w-screen h-screen flex items-center justify-center opacity-50 bg-white'>
            <div className="w-16 h-16 animate-spin border-t-4 border-blue-500 rounded-full"></div>
        </div>
    )
}

export default loading