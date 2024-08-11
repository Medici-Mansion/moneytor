'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const GoBudgetButton = () => {
  const router = useRouter()
  return (
    <div
      onClick={() => router.push('/budget')}
      className='bg-moneytor fixed bottom-[52px] left-0 right-0 mx-auto flex w-full max-w-[360px] cursor-pointer items-center justify-center rounded-xl px-[14px] py-[8px]'
    >
      <span className='text-[17px] text-[#FFF]'>Get started!</span>{' '}
    </div>
  )
}

export default GoBudgetButton
