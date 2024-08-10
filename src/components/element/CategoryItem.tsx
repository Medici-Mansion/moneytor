import Image from 'next/image'
import React from 'react'

interface CategoryItemProps {
  icon: string
  title: string
  percentage: string
  amount: string
  width?: number
  height?: number
  bgColor?: string
}
const CategoryItem: React.FC<CategoryItemProps> = ({
  icon,
  title,
  percentage,
  amount,
  width = 73,
  height = 73,
  bgColor,
}) => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex gap-4'>
        <div
          className='flex h-[73px] w-[73px] items-center justify-center rounded-full bg-[rgba(255,204,0,0.10)] p-2'
          style={{ backgroundColor: bgColor }}
        >
          <Image src={icon} height={height} width={width} alt={title} />
        </div>
        <div className='flex flex-col justify-center'>
          <div>{title}</div>
          <div>{percentage}</div>
        </div>
      </div>
      <div className='p-4'>{amount}</div>
    </div>
  )
}

export default CategoryItem
