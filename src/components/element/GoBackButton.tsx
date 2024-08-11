'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import Image from 'next/image'

const GoBackButton = () => {
  const router = useRouter()

  return (
    <div className='cursor-pointer p-[10px]' onClick={() => router.back()}>
      <Image src='/svg/prev.svg' width={14} height={14} alt='Go Back' />
    </div>
  )
}

export default GoBackButton
