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
}) => {
  return (
    <div
      onClick={clickable ? onClick : undefined}
      className={`flex items-center justify-between rounded-xl ${
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
          style={{ backgroundColor: bgColor }}
        >
          <Image src={icon} height={height} width={width} alt={title} />
        </div>
        <div className='flex flex-col justify-center'>
          <div>{title}</div>
        </div>
      </div>
      <div className='p-4'>{amount}</div>
    </div>
  )
}

export default CategoryItem
