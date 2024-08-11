'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const GoAllButton = () => {
  const router = useRouter()

  return (
    <div className='flex cursor-pointer items-center justify-center'>
      <div
        onClick={() => router.push('/all')}
        className='flex items-center gap-2 rounded-[100px] border-[1.4px] border-[#F2F2F7] bg-white px-4 py-2'
      >
        <span className='text-custom-gray text-[15px]'>View All Expenses</span>
        <span>
          <Image
            src='/svg/view.svg'
            width={8}
            height={14}
            alt='Go All Expenses'
          />
        </span>
      </div>
    </div>
  )
}

export default GoAllButton
