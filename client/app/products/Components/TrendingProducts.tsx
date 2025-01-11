import { Icons } from "../../../components/Icons";
import { motion } from 'framer-motion'
import React from 'react'

const TrendingProducts: React.FC = () => {
    return (
        <div className='w-full py-20'>
            <div className="flex flex-row justify-between">
            <p className="text-2xl md:text-2xl  font-semibold tracking-wider md:leading-12"> Trending Products</p>
            <div className=" top-0 md:top-5 right-2 lg:right-20 z-10 flex gap-2">
                <button className="  bg-white group p-2 flex justify-center items-center border border-solid !w-10 !h-10 transition-all duration-500 rounded-full border-black border-opacity-20">
                    <Icons.leftArrow className="text-black group-hover:text-opacity-50" />
                </button>
                <button className="swiper-button3-prev bg-white group !p-3 flex justify-center items-center border border-solid !w-10 !h-10 transition-all duration-500 rounded-full border-black border-opacity-20">
                    <Icons.rightArrow className="text-black group-hover:text-opacity-50" />
                </button>
            </div>
            </div>
            <div className="py-10" >
                <div className="min-w-52 max-w-56 h-full bg-[#F9FBFA] rounded-xl border border-[#999999]">
                    <div className="w-full h-32 bg-[#E7E7E7] rounded-t-xl border-b-2 border-gray-300"></div>
                    <div className="p-3 flex flex-col gap-2">
                        <h1 className="font-semibold">Vacum cleaner</h1>
                        <h1 className="font- text-xs">Power -2000W | Filtration: HEPA filter | Dust Capacity: 1-2 liters | Weight: 6 kg | Noise Level: 60 dB | Cord Length: 8 meters Attachments:  crevice tool, brush</h1>
                        <div className="flex flex-row justify-between">
                            <h1 className="font-semibold text-xs">Price <span className="text-gray-400">120</span> UAD
                            <br/><span className="text-xs font-normal text-gray-400">For 1 hour</span></h1>
                            
                            <div className="flex items-center gap-2 p-0.5 border-2  rounded-2xl">
                                <p className="text-xs pl-3">Book now</p>
                                <div className="bg-black w-6 p-0.5 rounded-full h-6">
                                    <motion.div animate={{scale:0.6}} className="flex items-center justify-center">
                                        <svg width="22" height="21" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.475 10.5C9.43333 10.5 8.40417 10.273 7.3875 9.819C6.37083 9.365 5.44583 8.72117 4.6125 7.8875C3.77917 7.05383 3.1355 6.12883 2.6815 5.1125C2.2275 4.09617 2.00033 3.067 2 2.025C2 1.875 2.05 1.75 2.15 1.65C2.25 1.55 2.375 1.5 2.525 1.5H4.55C4.66667 1.5 4.77083 1.53967 4.8625 1.619C4.95417 1.69833 5.00833 1.792 5.025 1.9L5.35 3.65C5.36667 3.78333 5.3625 3.89583 5.3375 3.9875C5.3125 4.07917 5.26667 4.15833 5.2 4.225L3.9875 5.45C4.15417 5.75833 4.352 6.05617 4.581 6.3435C4.81 6.63083 5.06217 6.908 5.3375 7.175C5.59583 7.43333 5.86667 7.673 6.15 7.894C6.43333 8.115 6.73333 8.317 7.05 8.5L8.225 7.325C8.3 7.25 8.398 7.19383 8.519 7.1565C8.64 7.11917 8.75867 7.10867 8.875 7.125L10.6 7.475C10.7167 7.50833 10.8125 7.56883 10.8875 7.6565C10.9625 7.74417 11 7.842 11 7.95V9.975C11 10.125 10.95 10.25 10.85 10.35C10.75 10.45 10.625 10.5 10.475 10.5Z" fill="white"/>
                                        </svg>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingProducts