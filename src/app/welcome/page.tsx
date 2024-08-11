'use client'

import Image from 'next/image'
import React from 'react'
import GoAllButton from '~/components/element/GoAllButton'
import GoBudgetButton from '~/components/element/GoBudgetButton'
import Icon from '~/components/element/Icon'
import IconList from '~/components/element/Icon'

const iconItems = [
  {
    id: 1,
    icon: '/svg/taxi.svg',
    title: 'Taxi',
    amount: '50,000 KRW',
    bgColor: 'rgba(255,204,0,0.10)',
    value: 50,
  },
  {
    id: 2,
    icon: '/svg/apple.svg',
    title: 'Apple Service',
    amount: '80,000 KRW',
    width: 30,
    height: 37,
    bgColor: '#F2F2F7',
    value: 75,
  },
  {
    id: 3,
    icon: '/svg/coffee.svg',
    title: 'Coffee',
    amount: '10,000 KRW',
    bgColor: 'rgba(52, 199, 89, 0.10)',
    value: 20,
  },
]

const page = () => {
  return (
    <main className='w-full'>
      <div className='flex flex-col'>
        <div className='mb-8 flex items-center justify-center text-[17px] text-[#8E8E93]'>
          Welcome
        </div>
        <div>
          <div className='text-[22px] font-bold'>
            Enabling Push notifications and
          </div>
          <div className='text-[22px] font-bold'>adding widgets is a must!</div>
        </div>
      </div>

      <section className='flex flex-col gap-6 pb-9 pt-28'>
        <div className='flex justify-center'>
          <Image
            src='/svg/ghost.gif'
            alt='welcome Ghost'
            width={240}
            height={240}
          />
        </div>
      </section>
      <section className='flex items-center justify-center gap-5'>
        {iconItems.map((icon) => (
          <Icon
            key={icon.id}
            id={icon.id}
            icon={icon.icon}
            title={icon.title}
            amount={icon.amount}
            width={icon.width}
            height={icon.height}
            bgColor={icon.bgColor}
          />
        ))}
      </section>
      <section className='flex items-center justify-center'>
        <div className='fixed bottom-[52px] left-0 right-0 mx-auto flex w-full max-w-[360px] items-center justify-center rounded-xl px-[14px] py-[8px]'>
          <span className='text-[17px] text-[#FFF]'>Get Started!</span>{' '}
        </div>
      </section>
      <section className='flex items-center justify-center'>
        <GoBudgetButton />
      </section>
    </main>
  )
}

export default page
