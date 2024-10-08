import Image from 'next/image'
import React from 'react'

interface CategoryItemProps {
  icon: string
  title: string
  amount: string
  width?: number
  height?: number
  bgColor?: string
  onClick?: () => void
  clickable?: boolean
  isSelected?: boolean
  today?: string
}
const CategoryItem: React.FC<CategoryItemProps> = ({
  icon,
  title,
  amount,
  width = 73,
  height = 73,
  bgColor,
  onClick,
  clickable,
  isSelected,
  today,
}) => {
  return (
    <div
      onClick={clickable ? onClick : undefined}
      className={`flex items-center justify-between rounded-xl py-2 ${
        clickable ? 'cursor-pointer' : 'cursor-default'
      }`}
      style={{
        pointerEvents: clickable ? 'auto' : 'none',
        backgroundColor: isSelected
          ? 'rgba(79, 195, 215, 0.12)'
          : 'transparent',
      }}
    >
      <div className='flex gap-4'>
        <div
          className='flex h-[73px] w-[73px] items-center justify-center rounded-full bg-[rgba(255,204,0,0.10)] p-2'
          style={{ backgroundColor: isSelected ? 'transparent' : bgColor }}
        >
          <Image src={icon} height={height} width={width} alt={title} />
        </div>
        <div className='flex flex-col justify-center'>
          <div>{title}</div>
        </div>
      </div>
      <div className='p-4'>
        <div>{amount}</div>
        <div
          className={`text-end ${isSelected ? 'text-[#4FC3D7]' : 'text-[#8E8E93]'} `}
        >
          {today}
        </div>
      </div>
    </div>
  )
}

export default CategoryItem
