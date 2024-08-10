import React from 'react'
import Image from 'next/image'
import { count } from 'console'
import Progress from './Progress'

interface CategoryItemWithStatusBarProps {
  icon: string
  title: string
  amount: string
  width?: number
  height?: number
  bgColor?: string
  onClick?: () => void
  clickable?: boolean
  isSelected?: boolean
  value: number
}

const CategoryItemWithStatusBar: React.FC<CategoryItemWithStatusBarProps> = ({
  icon,
  title,
  amount,
  width = 73,
  height = 73,
  bgColor,
  onClick,
  clickable,
  isSelected,
  value,
}) => {
  return (
    <div className='flex items-center justify-between rounded-xl'>
      <div className='flex gap-4'>
        <div
          className='flex h-[73px] w-[73px] items-center justify-center rounded-full bg-[rgba(255,204,0,0.10)] p-2'
          style={{ backgroundColor: bgColor }}
        >
          <Image src={icon} height={height} width={width} alt={title} />
        </div>
      </div>
      <div className='flex flex-col justify-center gap-[13.5px]'>
        <div className='flex w-[272px] items-center justify-between'>
          <div>Taxi</div>
          <div>{amount}</div>
        </div>
        <Progress value={value} />
      </div>
    </div>
  )
}

export default CategoryItemWithStatusBar
