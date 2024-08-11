import Image from 'next/image'
import React from 'react'

interface IconProps {
  icon: string
  title: string
  amount: string
  width?: number
  height?: number
  bgColor?: string
  id: number
}

const Icon: React.FC<IconProps> = ({
  icon,
  id,
  title,
  width = 73,
  height = 73,
  bgColor,
}) => {
  return (
    <div
      key={id}
      className='flex h-[73px] w-[73px] items-center justify-center rounded-full p-2'
      style={{ backgroundColor: bgColor }}
    >
      <Image src={icon} height={height} width={width} alt={title} />
    </div>
  )
}

export default Icon
