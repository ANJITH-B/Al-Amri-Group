import React from 'react'
interface CarousalCardProps {
    data:number
    index:number
    isFirst:boolean
}

const CarousalCard:React.FC<CarousalCardProps>
 = ({data,index,isFirst}) => {
  return (
    <div className='bg-green-400 h-96 w-40'>CarousalCard {index}
    {isFirst && <div>this is the first div</div>}
    </div>
  )
}

export default CarousalCard